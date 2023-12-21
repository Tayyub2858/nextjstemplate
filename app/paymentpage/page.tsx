import Link from 'next/link'
import React from 'react'

function PaymentPage() {
  return (
    <>
      <div className='flex flex-col sm:flex-row mt-4 mb-5 sm:space-x-0 gap-1 justify-center'>
        <div className='flex flex-col sm:flex-row text-center'>
          <Link href={'/'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                    font-bold py-2 px-2 rounded
                                    focus:bg-blue-950
                                    active:bg-blue-950
                                    ">
            Create Live Cat
          </Link>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <Link href={''} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
            Sub Admin
          </Link>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <Link href={''} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
            Payment Amount
          </Link>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <Link href={''} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
            Admin Password Change
          </Link>
        </div>
      </div>

      <div className='w-full mb-5'>
        <h1 className='text-center text-2xl font-bold'>Payment Account Page</h1>
      </div>

      <div className='flex flex-col sm:flex-row mt-4 mb-5 sm:space-x-0 gap-1 justify-center'>
        <div className='flex flex-col sm:flex-row text-center'>
          <Link href={'/'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                    font-bold py-2 px-2 rounded
                                    focus:bg-blue-950
                                    active:bg-blue-950
                                    ">
            Offline
          </Link>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <Link href={''} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
            Online
          </Link>
        </div>
      </div>

      <div className='w-full' >
        <h1 className='text-right text-sm mr-8' >Add Offline Payment check code </h1>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb05 px-5">
        <div className="flex flex-col sm:flex-row w-full sm:w-1/2 my-0" style={{ marginTop: '0' }}>
          <div className="mb-4 sm:mb-0">
            <label className="block mb-2 text-sm font-medium text-gray-900">Select Truck code</label>
            <select id="cities" className="md:w-72 sm:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Active truck code</option>
              <option value="Web Development">adagagdade</option>
              <option value="Android Development">adgageda</option>
              <option value="iOS Development">agdaga adsagd</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:w-1/2 my-0" style={{ marginTop: '0' }}>
          <div className="mb-4 sm:mb-0">
            <label className="block mb-2 text-sm font-medium text-gray-900">Complete truck code</label>
            <select id="cities" className="md:w-72 sm:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>complete truck code</option>
              <option value="Web Development">SGESDBD23ERG34</option>
              <option value="Android Development">2232G34G34</option>
              <option value="iOS Development">V2334RE4</option>
            </select>
          </div>
        </div>


        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-2 py-2 rounded">create truck code</button>
          <input type="text" className="border border-blue-950 py-2 px-1 rounded-md" />
        </div>
      </div>

      <div className="flex items-center space-x-4 w-full sm:w-full mr-10 justify-end">
        <button id="fileButton" className="mr-5 bg-orange-900 text-white px-2 py-2 rounded">ADD</button>
      </div>


    </>
  )
}

export default PaymentPage
