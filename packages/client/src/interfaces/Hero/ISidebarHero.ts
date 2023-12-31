export interface ISidebarHero {
    backgroundImages: {classname: string, upperText: string, lowerText: string, href: string}[];
    currentImageIndex: number;
    handleSidebarItemClick: Function;
}