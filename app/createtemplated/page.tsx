import Link from 'next/link'
import React from 'react'

function CreateTemplated() {
  return (
    <>
    <div className='w-full'>
      <h1 className='text-center text-2xl font-bold'>Create Template Page</h1>
    </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb05 px-5">
        <div className="flex flex-col sm:flex-row w-full sm:w-1/2 my-0" style={{ marginTop: '0' }}>
          <div className="mb-4 sm:mb-0">
            <label className="block mb-2 text-sm font-medium text-gray-900">Select Template List</label>
            <select id="cities" className="md:w-72 sm:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Template list</option>
              <option value="Web Development">E-commerce website</option>
              <option value="Android Development">portfolio</option>
              <option value="iOS Development">School managment</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Template image</button>
          <input type="file" id="fileInput" className="hidden" />
          <button className='bg-blue-900 py-2 px-3 rounded-2xl text-white'>Uploaded</button>
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-0  px-5">
        <div className='flex flex-col sm:flex-row w-full sm:w-1/2 my-0" '></div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Template Titel</button>
          <input type="text" className="border border-blue-950 py-2 px-1 w-72 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-0  px-5">
        <div className='flex flex-col sm:flex-row w-full sm:w-1/2 my-0" '></div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Template Price</button>
          <input type="text" className="border border-blue-950 py-2 px-1 w-72 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-0  px-5">
        <div className='flex flex-col sm:flex-row w-full sm:w-1/2 my-0" '></div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Template Url</button>
          <input type="text" className="border border-blue-950 py-2 px-1 w-72 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-0  px-5">
        <div className='flex flex-col sm:flex-row w-full sm:w-1/2 my-0" '></div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Template Tag</button>
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

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-0  px-5">
        <div className='flex flex-col sm:flex-row w-full sm:w-1/2 my-0" '></div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2"></div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2 pb-10">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded ml-0 ">ADD</button>
        </div>
      </div>
      
    </>
  )
}

export default CreateTemplated
