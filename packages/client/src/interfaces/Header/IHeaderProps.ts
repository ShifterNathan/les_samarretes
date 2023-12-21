import { ReactElement } from "react";

export interface IHeaderProps { 
    links: {content: string, href: string, type: string,}[];
    className?: string;
    collapseBreakpointClass?: string;
    logo: string,
    logoContent: string
}