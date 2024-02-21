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

    brands: {
        name: string;
        href: string;
    }[];
}