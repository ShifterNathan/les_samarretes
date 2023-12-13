import React from "react";
import tw from "twin.macro";
//eslint-disable-line
import { css } from "styled-components/macro";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.ts";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { IHeaderProps } from "../../interfaces/IHeaderProps.ts";
import { NavLinks, NavLink, PrimaryLink, Header, DesktopNavLinks, MobileNavLinksContainer, MobileNavLinks, NavToggle, LogoLink} from "./const/const.ts";

const HeaderComponent = (props: IHeaderProps) => {
  let { logo, logoContent, links, className, collapseBreakpointClass = "lg" } = props;

  const logoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      {logoContent}
    </LogoLink>
  );

  const linksToRender: JSX.Element[] = links.map(link => {
    const { content, href, type } = link

    if(type !== "Nav") return <PrimaryLink href={href}>{content}</PrimaryLink>

    return <NavLink href={href}>{content}</NavLink>
  })

  const linksComponent = <NavLinks key={1}>{linksToRender}</NavLinks>;

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks className={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {linksComponent}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {linksComponent}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};

export default HeaderComponent;