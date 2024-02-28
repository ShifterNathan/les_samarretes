import { ISidebarHero } from "../../interfaces/Hero/ISidebarHero";

const Sidebar = (props: ISidebarHero) => {
  const { backgroundImages, currentImageIndex, handleSidebarItemClick } = props;

  return (
    <div className="hidden md:absolute md:flex right-0 top-1/2 transform -translate-y-1/2 lg:z-50 md:z-40 flex-col items-center space-y-2">
      {backgroundImages.map((_, index) => (
        <button
          key={index}
          className={`text-lg font-bold p-2 ${index === currentImageIndex ? "text-primary-500" : "text-gray-500"}`}
          onClick={() => handleSidebarItemClick(index)}
        >
          {index < 9 ? `0${index + 1}` : index + 1}
          {index === currentImageIndex && (
            <div className="w-8 h-1 bg-primary-500 mt-1"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
