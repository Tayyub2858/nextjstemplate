import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltUp, FaRegFilePdf, FaUpload } from 'react-icons/fa'

function CreateOrder() {
  return (
    <>
      <div className='w-full mb-10'>
        <h1 className='text-center text-2xl font-bold'>Order Frome Page</h1>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb05 px-5">
        <div className="flex flex-col sm:flex-row w-full sm:w-1/2 my-0" style={{ marginTop: '0' }}>
          <div className="mb-4 sm:mb-0">
            <label className="block mb-2 text-sm font-medium text-gray-900">Select Order List</label>
            <select id="cities" className="md:w-72 sm:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Order list</option>
              <option value="Web Development">web developer</option>
              <option value="Android Development">portfolio</option>
              <option value="iOS Development">School managment</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Order image</button>
          <input type="file" id="fileInput" className="hidden" />
          <button className='bg-blue-900 py-2 px-3 rounded-2xl text-white'>Uploaded</button>
        </div>
        <button id="fileButton" className="bg-orange-900 text-white px-4 py-2 rounded">ADD</button>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-0  px-5">
        <div className='flex flex-col sm:flex-row w-full sm:w-1/2 my-0" '></div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Order Title</button>
          <input type="text" className="border border-blue-950 py-2 px-1 w-72 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0 mb-0  px-5">
        <div className='flex flex-col sm:flex-row w-full sm:w-1/2 my-0" '></div>
        <div className="flex items-center space-x-4 w-full sm:w-1/2">
          <button id="fileButton" className="bg-blue-500 text-white px-4 py-2 rounded">Frome Title</button>
          {/* <input type="text" className="border border-blue-950 py-2 px-1 w-72 rounded-md" /> */}
          <FaRegFilePdf  className="bg-white-500 text-black rounded-md px-2 py-2" size={100} style={{ marginLeft: '8px' }} />
          <button id="fileButton" className="bg-orange-900 text-white px-1 text-xs py-2 rounded"><FaLongArrowAltUp size={20} style={{marginLeft:"10px"}} />uplaod</button>
        </div>
      </div>
      
    </>
  )
}

export default CreateOrder
