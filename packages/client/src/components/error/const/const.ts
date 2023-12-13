import tw, { TwComponent } from "twin.macro";

export const Container: TwComponent<'div'> = tw.div`
  flex items-center justify-center h-screen bg-gray-100
`;

export const ContentContainer: TwComponent<'div'> = tw.div`
  text-center p-10 bg-white rounded-lg shadow-lg max-w-md mb-32
`;

export const Heading: TwComponent<'h1'> = tw.h1`
  text-6xl font-bold text-primary-500
`;

export const Text: TwComponent<'p'> = tw.p`
  text-xl text-secondary-500 mt-4
`;

export const Description: TwComponent<'p'> = tw.p`
  text-gray-600 mt-2
`;

export const Button: TwComponent<'button'> = tw.button`
  mt-6 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition ease-in duration-300
`;