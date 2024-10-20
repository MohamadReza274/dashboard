import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { HTMLInputTypeAttribute } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  error: FieldError | undefined;
  type?: HTMLInputTypeAttribute;
}

const Input = ({ name, label, placeholder, error, type = "text" }: Props) => {
  return (
    <div className="sm:grid md:flex md:flex-col sm:grid-cols-3 sm:items-start sm:gap-4 md:gap-x-4 md:gap-y-0 sm:py-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        {label ? label : name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <div className="relative mt-2 md:mt-0 sm:col-span-2 sm:mt-0 rounded-md shadow-sm">
        <input
          defaultValue=""
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby={`${name}-error`}
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-red-500"
            />
          </div>
        )}
      </div>
      {error && (
        <p id="email-error" className="mt-2 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
