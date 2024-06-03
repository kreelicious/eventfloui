"use client";

import React, { Fragment, useState } from "react";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  PlusIcon,
  PhotoIcon,
} from "@heroicons/react/20/solid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const people = [
    {
      name: 'AC/DC UK',
      role: 'Tribute Band',
      imageUrl:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/12/11/ACDC.jpg',
    },
    {
      name: 'Brass Bambee',
      role: 'Original Prog Punk',
      imageUrl:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/12/11/ACDC.jpg',
    },
    {
      name: 'Creedance Clearwater Review',
      role: 'Tribute Band',
      imageUrl:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/12/11/ACDC.jpg',
    },
  ]

const generateTimeOptions = () => {
  const times = [];
  const start = 0; // Start at 00:00
  const end = 24 * 60; // End at 24:00 (1440 minutes)
  const interval = 30; // 30-minute intervals

  for (let minutes = start; minutes < end; minutes += interval) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const time = new Date(0, 0, 0, hours, mins).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    times.push(time);
  }

  return times;
};

const page = () => {
  const [startDate, setStartDate] = useState(new Date());
  const timeOptions = generateTimeOptions();
  const [modalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <div>
      <div className="border-b pb-5  border-gray-200 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Setup Your Event
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>

      <div className="mt-5">
        <form>
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-purple-700">
                  1. Imagery
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Provide a high quality image for your event.
                </p>
              </div>
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
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
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-purple-700">
                  2. Summarise your event
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Sum up your event. Provide the information we need to make
                  your event amazing.
                </p>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-full">
                  <label
                    htmlFor="summary"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Please write a summary of your event
                  </label>
                  <span className="text-sm">
                    It's important to explain as much about the event as
                    possible. You can copy or paste any related information such
                    as artist bio's etc. <strong>*</strong> This information
                    will be used by AI to devleop event descriptions and media.{" "}
                    <strong>*</strong>
                  </span>
                  <div className="mt-2">
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Select artists / performers / speakers for this event.
                  </label>
                  <div className="mt-2">
                    <button
                      type="button" onClick={openModal}
                      className="relative inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-2" />
                      <span className="sr-only">Add artist member</span>
                      <PlusIcon className="h-10 w-10" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-purple-700">
                  3. The Details
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600"></p>
              </div>

              <div className="max-w-2xl space-y-10 md:col-span-2">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Event Options and notes
                  </legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          name="over18"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          Over 18's
                        </label>
                        <p className="text-gray-500">
                          This event is strickly for adults over the age of 18.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-900"
                        >
                          Seated Event
                        </label>
                        <p className="text-gray-500">
                          This Event is a seated event.
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </fieldset>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="summary"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Important Notes{" "}
                  </label>
                  <span className="text-sm"></span>
                  <div className="mt-2">
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
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
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>{" "}
        </form>
      </div>
<Transition appear show={modalOpen} as={Fragment}>
  <Dialog as="div" className="relative z-10" onClose={closeModal}>
    <TransitionChild
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    </TransitionChild>

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div className="mx-auto max-w-lg">
              <div>
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900">
                    Add artist / performers
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    You haven’t added any artists/ talent / performers to your event yet. 
                  </p>
                </div>
                <form action="#" className="mt-6 flex">
                  <label htmlFor="email" className="sr-only">
                    Artist/Perfomrer
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Name of artist/ performer"
                  />
                  <button
                    type="submit"
                    className="ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create
                  </button>
                </form>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-500">Artist / perfoemrs similar to the one your creating</h3>
                <ul role="list" className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                  {people.map((person, personIdx) => (
                    <li key={personIdx} className="flex items-center justify-between space-x-3 py-4">
                      <div className="flex min-w-0 flex-1 items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">{person.name}</p>
                          <p className="truncate text-sm font-medium text-gray-500">{person.role}</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900"
                        >
                          <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          Add <span className="sr-only">{person.name}</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                onClick={closeModal}
              >
                Save
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                onClick={closeModal}
                data-autofocus
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</Transition>
    </div>
  );
};

export default page;
