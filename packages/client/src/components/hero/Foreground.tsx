import { IForegroundHero } from "../../interfaces/Hero/IForegroundHero";

const Foreground = (props: IForegroundHero) => {

    const { upperText, lowerText, handleButton } = props;

  return (
    <div className="z-10 absolute px-6 sm:px-8 w-full h-full flex justify-start items-center">
        <div className="flex flex-col justify-center items-center mb-20">
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-medium leading-snug">
            <span className="inline-block mt-2 sm:mt-10">
              {upperText}
              <br />
              {lowerText}
            </span>
          </h1>
          <button className="rounded-full px-8 py-3 mt-10 text-sm sm:text-base lg:mt-16 sm:px-8 sm:py-4 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hover:bg-primary-600 hover:text-gray-200 focus:outline-none focus:shadow-outline" onClick={handleButton}>
            Ver mas
          </button>
        </div>
      </div>
  )
}

export default Foreground