import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

const events = [
  {
    title: 'Sidewinder The Band',
    date: 'Saturday, June 12st 2024',
    imageUrl:
      'https://scala-files.ams3.digitaloceanspaces.com/537eba9df88cf42415faeda5f408f5ab.png',
  },
  {
    title: 'Rush Tribute - Moving Pictures',
    date: 'Saturday, June 8th 2024',
    imageUrl:
      'https://scala-files.ams3.digitaloceanspaces.com/364d2950c7b7c355236e60c0b153f091.png',
  },
  {
    title: 'DayFever - Support The Scala',
    date: 'Saturday, June 12st 2024',
    imageUrl:
      'https://scala-files.ams3.digitaloceanspaces.com/54073571ffe532fb76c5efded4caf6c7.png',
  },
  {
    title: 'The Scala Comedy Club',
    date: 'Friday, June 21st 2024',
    imageUrl:
      'https://scala-files.ams3.digitaloceanspaces.com/6de657bb3b896488f58f5e2b7e226f5c.png',
  },
  {
    title: 'Young Elton - Tribute to Elton John',
    date: 'Frday, July 5th 2024',
    imageUrl:
      'https://scala-files.ams3.digitaloceanspaces.com/c5873fdb44feb85d7f1302529279dba1.png',
  }
  // More people...
]


const EventList = () => {
  return (
    <div className='py-6'>
    <ul role="list" className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {events.map((event) => (
        <li
          key={event.email}
          className="col-span-1 flex flex-col divide-y divide-gray-40 rounded-lg bg-white shadow-md hover:shadow-lg group"
        >
          <div className="flex flex-1 flex-col p-4">
            <img className="mx-auto flex-shrink-0 mb-3 " src={event.imageUrl} alt="" />
            <h3 className="text-l text-purple-800 font-bold">{event.title}</h3>
            <span className='text-md'>{event.date}</span>
          </div>
          
        </li>
      ))}
    </ul>
    </div>
  )
}

export default EventList
