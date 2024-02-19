
type SlideoverType = "cart" | "wishlist";


export interface ICartSlideOverProps {
    show: boolean;
    toggleSlideover: (type: SlideoverType) => void;
    products: {
        name: string;
        description: string;
        href: string;
        icon: any;
    }[];
}