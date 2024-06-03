import {
  CheckIcon,
  AdjustmentsHorizontalIcon,
  MegaphoneIcon,
  DocumentIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";

const steps = [
  {
    name: "Make your event Public",
    description:
      "Provide the essentials to get you event off the ground and booked into your venues pipeline.",
    href: "#",
    status: "current",
  },
  {
    name: "Tickets",
    description: "Provide information about how your event is ticketed.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Publish",
    description: "Provide the final tocuhes to your event and make it live.",
    href: "#",
    status: "upcoming",
  },
];

const eventnavigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  {
    name: "Management",
    href: "#",
    icon: AdjustmentsHorizontalIcon,
    current: false,
  },
  { name: "Promotion", href: "#", icon: MegaphoneIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentIcon, current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const EventLayout = ({ children }) => {
  return (
    <div className="flex gap-8">
      <aside className="flex-[2] bg-gray-100 min-h-screen">
        <div className="p-5">
          <h2 className="text-purple-700 font-bold text-2xl">
            Xenna Presents: A Tribite To Taylor Swift
          </h2>
          <p className="mt-3">Saturday 2nd July 2024 at 7pm</p>
          <nav aria-label="Progress" className="mt-5">
            <ol role="list" className="overflow-hidden">
              {steps.map((step, stepIdx) => (
                <li
                  key={step.name}
                  className={classNames(
                    stepIdx !== steps.length - 1 ? "pb-10" : "",
                    "relative"
                  )}
                >
                  {step.status === "complete" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className="group relative flex items-start"
                      >
                        <span className="flex h-9 items-center">
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                            <CheckIcon
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium">
                            {step.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  ) : step.status === "current" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className="group relative flex items-start"
                        aria-current="step"
                      >
                        <span
                          className="flex h-9 items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium text-indigo-600">
                            {step.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a
                        href={step.href}
                        className="group relative flex items-start"
                      >
                        <span
                          className="flex h-9 items-center"
                          aria-hidden="true"
                        >
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                            <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium text-gray-500">
                            {step.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <nav className="mt-5 flex flex-1 flex-col" aria-label="Sidebar">
            <ul role="list" className="-mx-2 space-y-1">
              {eventnavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-indigo-600"
                          : "text-gray-400 group-hover:text-indigo-600",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex-[8] p-4 rounded min-h-[300px]">
        <div className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default EventLayout;
