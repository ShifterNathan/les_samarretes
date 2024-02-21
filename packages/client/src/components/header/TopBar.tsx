import { HomeIcon } from "@heroicons/react/20/solid";
import { ITopBarProps } from "../../interfaces/Header/ITopBarProps";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PopOverHeader from "./PopOverHeader";

export default function TopBar(props: ITopBarProps) {
  const { pages } = props;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <>
      <div
        className="flex justify-between items-center border-b border-gray-200 w-full pb-2 pt-2"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-4 ml-10">
          <li>
            <div>
              <a href="/" className="text-gray-500 hover:text-gray-500">
                <HomeIcon
                  className="h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {pages?.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <a
                  href={page.href}
                  className="ml-4 text-md font-medium text-gray-500 hover:text-gray-700"
                  aria-current={page?.current ? "page" : undefined}
                >
                  {page?.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
        <button
          onClick={togglePopover}
          className="flex items-center justify-center hover:text-primary-500 gap-2 mr-10"
          aria-label="Iniciar sesión / registrarse"
        >
          <UserCircleIcon className="h-8 w-8" />
          <span className="text-sm">Iniciar sesión / registrarse</span>
        </button>

        <PopOverHeader show={isPopoverOpen} togglePopover={togglePopover} />
      </div>
    </>
  );
}
