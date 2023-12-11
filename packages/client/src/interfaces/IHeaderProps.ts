import { ReactElement } from "react";

export interface IHeaderProps { 
    roundedHeaderButton?: boolean;
    logoLink: ReactElement;
    links: {content: string, href: string, type: string, classname: string}[];
    className?: string;
    collapseBreakpointClass?: string;
    }