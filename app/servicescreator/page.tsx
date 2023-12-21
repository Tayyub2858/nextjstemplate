'use client'
import Link from 'next/link'
import React from 'react'
import { Editor } from "primereact/editor";

function ServicesCreate() {
  return (
    <>
    <div className='w-full mb-10'>
      <h1 className='text-center text-2xl font-bold'>Create Services Page</h1>
    </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-5 px-10">
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Choose File</button>
          <input type="file" id="fileInput" className="hidden" />
          <button className='bg-blue-900 py-2 px-3 rounded-2xl text-white'>Uploaded</button>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:w-1/2 my-0" style={{ marginTop: '0' }}>
          <div className="mb-4 sm:mb-0">
            <label className="block mb-2 text-sm font-medium text-gray-900">Select Services List</label>
            <select id="cities" className="md:w-72 sm:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a Services</option>
              <option value="Web Development">Web Development</option>
              <option value="Android Development">Android Development</option>
              <option value="iOS Development">iOS Development</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-5  px-10">
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Services Name</button>
          <input type="text" className="border border-blue-950 py-2 px-2 w-72 rounded-md" />
        </div>
      </div>
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0   px-10">
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className=" bg-blue-500 text-white px-6 py-2 rounded">Services tag</button>
          {/* <input type="text" className="border border-blue-950 py-2 px-2 w-72 rounded-md" /> */}
          <div className='p-4 w-72 h-48 bg-gray-300'>
            <p>Testing the HTML Editor</p>
            <ul className="list-disc ml-10">
              <li className="mb-2">Item 1</li>
              <li className="mb-2">Item 2</li>
              <li className="mb-2">Item 3</li>
            </ul>
            <p>and <Link href="" className='text-blue '>Add this...</Link></p>
            <p>Very Nice</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row px-10 py-5'>
        <button className="bg-blue-500 
                            hover:bg-blue-700 text-white 
                          font-bold py-2 px-4 rounded">
          Services description
        </button>
      </div>
      <div className='flex flex-col sm:flex-row ml-10 pb-10'>
        <Editor style={{ height: '320px' }} className='w-full' />
      </div>

    </>
  )
}

export default ServicesCreate
