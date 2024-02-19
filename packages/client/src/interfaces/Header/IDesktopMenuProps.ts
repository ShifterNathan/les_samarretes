export interface IDesktopMenuProps {
    products: {
        name: string;
        description: string;
        href: string;
        icon: any;
    }[];
    
    callsToAction: {
        name: string;
        href: string;
        icon: any;
    }[];

    company: {
        name: string;
        href: string;
    }[];
}