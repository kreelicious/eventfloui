import React from "react";
import EventList from "../components/Events/EventList";
import Link from "next/link";

import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";


const Events = () => {
  return (
    <div className="py-10">
      <div className="px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h2 className=" font-semibold leading-6 text-gray-900 text-2xl grow ">
          Events
        </h2>
        <div className="mt-3 sm:ml-4 sm:mt-0 basis-64">
          <div>
            <select
              id="location"
              name="location"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="Published"
            >
              <option>Published</option>
              <option>Past Events</option>
              <option>Draft</option>
            </select>
          </div>
        </div>
        <div className="sm:ml-4 sm:mt0 group">
          <Link href="/events/calendar">
          <button className="p-2 border-gray-700 rounded-lg bg-white shadow-md group-hover:shadow-l"><CalendarDaysIcon  className="h-5 w-5 text-gray-500 group-hover:text-purple-700" /></button>
          </Link>
          
        </div>
      </div>
      <div><EventList></EventList></div>
    </div>
    </div>
  );
};

export default Events;
