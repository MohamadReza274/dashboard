import { ExclamationCircleIcon } from "@heroicons/react/16/solid";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
}

const Input = ({ name, label, placeholder }: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          defaultValue=""
          id={name}
          name={name}
          type="email"
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby={`${name}-error`}
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon
            aria-hidden="true"
            className="h-5 w-5 text-red-500"
          />
        </div>
      </div>
      <p id="email-error" className="mt-2 text-sm text-red-600">
        Not a valid email address.
      </p>
    </div>
  );
};

export default Input;
