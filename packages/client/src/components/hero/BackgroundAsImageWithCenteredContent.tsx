const BackgroundAsImageWithCenteredContent = () => {
  return (
    <div id="hero-container" className="relative bg-center bg-cover bg-no-repeat h-screen min-h-144 lg:bg-hero-pattern bg-hero-pattern-mobile sm:hero-pattern-mobile">
        <div className="z-20 relative px-6 sm:px-8 mx-auto h-full flex">
            <div className="px-4 flex flex-1 flex-col justify-center items-center">
                <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug sm:-mt-24 sm:mt-0">
                    <span className="inline-block mt-2 sm:mt-10">
                    Book Music & Comedy Events
                    <br />
                    anywhere in New York
                    </span>
                </h1>
                <button className="rounded-full px-8 py-3 mt-10 text-sm sm:text-base lg:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline">Search Events Near Me</button>
            </div>
        </div>
    </div>
  )
}

export default BackgroundAsImageWithCenteredContent;
