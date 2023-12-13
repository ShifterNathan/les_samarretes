import { motion } from "framer-motion";
import styled from "styled-components";
import tw, { TwComponent } from "twin.macro";

export const NavLinks: TwComponent<'div'> = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink: TwComponent<'a'> = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink: TwComponent<'a'> = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-600 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink: TwComponent<'a'> = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-3!`};
  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer: TwComponent<'nav'> = tw.nav`flex flex-1 items-center justify-between`;

export const NavToggle: TwComponent<'button'> = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300 mr-3
`;

export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks: TwComponent<'nav'> = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;