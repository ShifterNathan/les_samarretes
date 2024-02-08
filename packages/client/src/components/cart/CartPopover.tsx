import { Popover, Transition } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import { ICartPopoverProps } from "../../interfaces/Cart/ICartPopoverProps";
import { useNavigate } from "react-router-dom";

const CartPopover = (props: ICartPopoverProps) => {
  const { products } = props;
  const navigate = useNavigate();

  return (
    <Popover className="ml-2 flow-root text-sm lg:relative lg:ml-4 z-20">
      <Popover.Button className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 group-hover:text-primary-500 align-middle"
          aria-hidden="true"
        />
        <span className="ml-2 mt-1 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {products.length > 5 ? "5+ items" : products.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
          <h2 className="sr-only">Shopping Cart</h2>

          <form className="mx-auto max-w-2xl px-4">
            <ul role="list" className="divide-y divide-gray-200">
              {products.slice(0, 5).map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between py-6"
                >
                  <div className="flex items-center">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-16 w-16 flex-none rounded-md border border-gray-200"
                    />
                    <div className="ml-4 flex-auto">
                      <h3 className="font-medium text-gray-900">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="text-gray-500">{product.color}</p>
                    </div>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-gray-900 font-medium">
                      Qty: {product.quantity}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>

            <p className="mt-6 text-center">
              <button
                onClick={() => navigate("/cart")}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View Shopping Bag
              </button>
            </p>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default CartPopover;
