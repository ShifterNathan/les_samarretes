export interface ICartPopoverProps {
    products: {
        id: number;
        imageSrc: string;
        imageAlt: string;
        name: string;
        color: string;
        href: string;
        quantity: number;
    }[];
}