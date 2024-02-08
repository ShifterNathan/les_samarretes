export interface ICartItemsListProps {
    products: {
        id: number;
        name: string;
        href: string;
        price: string;
        color: string;
        stock: number;
        size: string | null;
        imageSrc: string;
        imageAlt: string;
        leadTime?: string;
    }[];
}