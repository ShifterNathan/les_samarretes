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

  const { products, callsToAction, company } = props;

  const toggleSlideover = (type: SlideoverType) => {
    setIsSlideoverOpen({ ...isSlideoverOpen, [type]: !isSlideoverOpen[type] });
  };
  return (
    <>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
          Home
        </a>
        <a
          href="/shop"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Shop
        </a>

        <Popover>
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
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
              {company.map((item) => (
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
