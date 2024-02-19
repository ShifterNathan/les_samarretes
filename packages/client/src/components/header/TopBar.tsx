import { HomeIcon } from "@heroicons/react/20/solid";
import { ITopBarProps } from "../../interfaces/Header/ITopBarProps";
import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import Logo from "../../common/Logo";

export default function TopBar(props: ITopBarProps) {
  const { pages } = props;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const popoverContent = isPopoverOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full relative">
        <div className="mt-3 px-2 w-screen max-w-md sm:px-0">
          <div className="flex justify-between">
            <button
              onClick={togglePopover}
              className="absolute top-0 right-0 m-4"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <Logo className="mx-auto h-10 w-auto" />
          </div>
          <form
            className="bg-white rounded-lg shadow-lg overflow-hidden"
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
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
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
        </div>
      </div>
    </div>
  ) : null;

  const customStyles = `
    .transition-transform {
      transition: opacity 0.5s ease, transform 0.5s ease;
      opacity: 0;
      transform: translateY(-50%);
    }
    .transition-transform.active {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
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

        {isPopoverOpen && (
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75"
            aria-hidden="true"
            onClick={togglePopover}
          />
        )}
        {createPortal(
          <div
            className={`${isPopoverOpen ? "active" : ""} transition-transform`}
          >
            {popoverContent}
          </div>,
          document.body
        )}
      </nav>
    </>
  );
}
