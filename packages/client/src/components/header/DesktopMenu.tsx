import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IDesktopMenuProps } from "../../interfaces/Header/IDesktopMenuProps";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../context/userContext";
import CartSlideOver from "./slideOver/CartSlideOver";
import SlideOver from "./slideOver/SlideOver";

const DesktopMenu = (props: IDesktopMenuProps) => {
  type SlideoverType = "cart" | "wishlist";

  const [isSlideoverOpen, setIsSlideoverOpen] = useState({
    cart: false,
    wishlist: false,
  });

  const { products, brands } = props;

  const toggleSlideover = (type: SlideoverType) => {
    setIsSlideoverOpen({ ...isSlideoverOpen, [type]: !isSlideoverOpen[type] });
  };
  return (
    <>
      <Popover.Group className="hidden lg:flex lg:gap-x-12 ml-4">
        <a href="/" className="text-md font-semibold leading-6 text-gray-900 hover:text-primary-500">
          Home
        </a>
        <a
          href="/shop"
          className="text-md font-semibold leading-6 text-gray-900 hover:text-primary-500"
        >
          Shop
        </a>

        <Popover>
          <Popover.Button className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900 hover:text-primary-500">
            Marcas
            <ChevronDownIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
              {brands.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover.Group>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
        <button onClick={() => toggleSlideover("cart")}>
          <ShoppingCartIcon
            className="h-8 w-8 text-gray-700"
            aria-hidden="true"
          />
        </button>
        <button onClick={() => toggleSlideover("wishlist")}>
          <HeartIcon className="h-8 w-8 text-gray-700" aria-hidden="true" />
        </button>
        <button>
          <MagnifyingGlassIcon
            className="h-8 w-8 text-gray-700"
            aria-hidden="true"
          />
        </button>
      </div>
      <CartSlideOver
        toggleSlideover={toggleSlideover}
        show={isSlideoverOpen.cart}
        products={products}
      />
      <SlideOver
        toggleSlideover={toggleSlideover}
        show={isSlideoverOpen.wishlist}
        products={products}
      />
    </>
  );
};

export default DesktopMenu;
