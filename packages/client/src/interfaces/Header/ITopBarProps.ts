export interface ITopBarProps {
    pages: {
        name: string;
        href: string;
        current: boolean;
    }[] | null;
}