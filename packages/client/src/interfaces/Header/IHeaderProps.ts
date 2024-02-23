import { ReactElement } from "react";

export interface IHeaderProps { 
    className?: string;
    pages: {
        name: string;
        href: string;
        current: boolean;
    }[] | null;
}