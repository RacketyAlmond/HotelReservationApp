"use client";

import React, { useState } from 'react'
import { updateGuest } from '../_lib/actions';
import { useFormStatus } from 'react-dom';



export default function UpdateProfileForm({guest, children}) {
  const [count, setCount] = useState();
  const {fullName, email, nationality, nationalID, countryFlag} = guest;
  

  return (
    <div>
        <form action={updateGuest} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Name and Surname</label>
          <input
            disabled
            defaultValue={fullName}
            name="fullName"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>E-mail</label>
          <input
            disabled
            defaultValue={email}
            name="email"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src={countryFlag}
              alt="Country flag"
              name="nationality"

              className="h-5 rounded-sm"
            />
          </div>

          {children}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">Pasport number</label>
          <input
            name="nationalID"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <Button />
        </div>
      </form>

    </div>
  )
}

function Button() {
  const {pending} = useFormStatus();
  return (
    <button disabled={pending} className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
      {pending ? `Updating ...` : `Update profile`}
    </button>
  );
}
