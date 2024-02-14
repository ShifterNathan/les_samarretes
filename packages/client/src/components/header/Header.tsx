import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useAuth } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../common/Logo";
import CartPopover from "../cart/CartPopover";
import MobileMenu from "./MobileMenu";

const brands = [
  {
    id: 1,
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    color: "Salmon",
    quantity: 2,
  },
  {
    id: 2,
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    color: "Blue",
    quantity: 1,
  },
  {
    id: 3,
    name: "Security",
    description: "Your customers data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    color: "Blue",
    quantity: 1,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, toggleAuth } = useAuth();
  const navigate = useNavigate();

  const userNavigation = [
    { name: "View Orders", href: "#" },
    // Add more user navigation items here
  ];

  const handleLogout = () => {
    toggleAuth();
    navigate("/");
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b border-gray-200"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-5">
            <Logo className="h-8 w-auto mb-1" />
            <span className="font-bold text-xl">Les Samarretes</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="lg:flex items-center jusitify-center sm:hidden md:hidden gap-10 mr-10">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-gray-900 hover:text-primary-500"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-6 text-gray-900 hover:text-primary-500"
          >
            Tienda
          </a>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900 hover:text-primary-500">
                Product
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
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {brands.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
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
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          {isAuthenticated ? (
            <>
              <Popover className="relative inline-flex">
                <Popover.Button className="text-gray-900 hover:text-primary-500">
                  <UserCircleIcon className="h-8 w-8" />
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
                  <Popover.Panel className="absolute right-0 z-20 mt-10 w-48 translate-x-1/2 transform">
                    <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="bg-white py-1">
                        {userNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        ))}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLogout();
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <CartPopover products={brands} />
            </>
          ) : (
            <>
              <a
                href="/login"
                className="text-gray-900 hover:text-primary-500 font-semibold"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="text-base font-semibold leading-6 rounded bg-primary-500 px-8 py-3 text-gray-100"
              >
                Sign Up <span aria-hidden="true"></span>
              </a>
            </>
          )}
        </div>
      </nav>
      <MobileMenu show={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
    </header>
  );
}

export default Header;
