import { Fragment } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { IMobileMenuProps } from "../../interfaces/Header/IMobileMenuProps";
import Logo from "../../common/Logo";

export default function MobileMenu(props: IMobileMenuProps) {
  const { show, setMobileMenuOpen, isAuthenticated, handleLogout } = props;

  const brands = [
    {
      id: 1,
      name: "Stanley/Stella",
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
      name: "Roly",
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
      name: "Stamina",
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

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setMobileMenuOpen}>
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          <Logo className="h-6 w-6" />
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6 ">
                        <div className="flex items-center justify-between">
                          <Logo className="h-10 w-10" />
                          <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="mt-6 flow-root">
                          <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                              <a
                                href="/"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                Home
                              </a>
                              <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                Tienda
                              </a>
                              <Disclosure as="div" className="-mx-3">
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900">
                                      Marcas
                                      <ChevronDownIcon
                                        className={classNames(
                                          open ? "rotate-180" : "",
                                          "h-5 w-5 flex-none"
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="mt-2 space-y-2">
                                      {brands.map((item) => (
                                        <Disclosure.Button
                                          key={item.name}
                                          as="a"
                                          href={item.href}
                                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                          {item.name}
                                        </Disclosure.Button>
                                      ))}
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            </div>
                            <div className="py-6 space-y-4">
                              {isAuthenticated ? (
                                <>
                                  <a
                                    href="/orders"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    View Orders
                                  </a>
                                  <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleLogout()}
                                  >
                                    Logout
                                  </a>
                                </>
                              ) : (
                                <>
                                  <a
                                    href="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    Log in
                                  </a>
                                  <a
                                    href="/signup"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    Sign up
                                  </a>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}