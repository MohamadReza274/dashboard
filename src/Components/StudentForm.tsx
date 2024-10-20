import { PhotoIcon, PlusIcon } from "@heroicons/react/16/solid";
import { HTMLInputTypeAttribute } from "react";
import { privances } from "../data";

interface FormFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const FormField = ({ name, label, type = "text" }: FormFieldProps) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
      >
        {label ? label : name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <div className="mt-2 sm:col-span-2 sm:mt-0">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete="email"
          className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:max-w-md sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

const StudentForm = () => {
  return (
    <form className="px-6">
      <div className="space-y-12 sm:space-y-16">
        <div>
          <div className="mx-auto flex h-12 mb-6 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
            <PlusIcon aria-hidden="true" className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add Student
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Photo
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            Fill all field, all of them should not be empty.
          </p>

          <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <FormField name="fastName" />

            <FormField name="lastName" />

            {/* FatherName */}
            <FormField name="fatherName" />

            {/* email address */}
            <FormField type="email" name="email" />

            {/* Phone */}
            <FormField name="phone" type="number" />

            {/* Privances */}
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="privances"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                State / Province
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  id="privances"
                  name="privances"
                  autoComplete="country-name"
                  className="block w-full px-2 py-2 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {privances.map((privance) => (
                    <option className="" key={privance.objectId}>
                      {privance.Province_Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Age */}
            <FormField name="age" type="number" />
          </div>
        </div>

        <div>
          <div className="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <fieldset>
              <legend className="sr-only">Fields</legend>
              <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
                <div
                  aria-hidden="true"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Field
                </div>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg">
                    <p className="text-sm leading-6 text-gray-600">
                      Select which field are you.
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="web-development"
                          name="field"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="web-development"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Web Development
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="e-commerce"
                          name="field"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="e-commerce"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          E-Commerce
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="graphic-design"
                          name="field"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="graphic-design"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Graphic Design
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
