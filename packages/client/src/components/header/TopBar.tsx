import { HomeIcon } from "@heroicons/react/20/solid";
import { ITopBarProps } from "../../interfaces/Header/ITopBarProps";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PopOverHeader from "./PopOverHeader";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

export default function TopBar(props: ITopBarProps) {
  const { pages } = props;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const popoverContent = (
    <form
      className="bg-white overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.email && (
            <p className="text-red-600">
              {errors.email.message as React.ReactNode}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one number",
              },
            })}
            type="password"
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.password && (
            <p className="text-red-600">
              {errors.password.message as React.ReactNode}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Log in to your account
        </button>
        <div className="mt-4 text-center">
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Not a member? Create an account
          </a>
        </div>
      </div>
    </form>
  );


  return (
    <>
      <nav
        className="flex justify-between items-center border-b border-gray-200 w-full pb-2 pt-2"
        aria-label="Breadcrumb"
      >
        <ol role="list" className="flex items-center space-x-4 ml-10">
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

        <PopOverHeader
          show={isPopoverOpen}
          toggleSlideover={togglePopover}
          products={products}
        />
      </nav>
    </>
  );
}
