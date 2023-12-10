import { ReactElement } from "react";

export interface IHeaderProps { 
    roundedHeaderButton?: boolean;
    logoLink?: ReactElement;
    links?: string[];
    className?: string;
    collapseBreakpointClass?: string;
    }