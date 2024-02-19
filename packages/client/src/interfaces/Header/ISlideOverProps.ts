export interface ISlideOverProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<{
        show: boolean;
        type: string;
    }>>;
}

