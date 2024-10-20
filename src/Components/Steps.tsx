import { useState } from "react";

const steps = [
  { id: 1, name: "Profile Info", href: "#", status: "complete" },
  { id: 2, name: "Personal Info", href: "#", status: "current" },
  { id: 3, name: "Address Info", href: "#", status: "upcoming" },
];

const Steps = () => {
  const [step, setStep] = useState(0);
  return (
    <nav aria-label="Progress" className="py-4">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === "complete" ? (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : step.status === "current" ? (
              <a
                href={step.href}
                aria-current="step"
                className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Steps;
