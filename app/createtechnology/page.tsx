import React from 'react'

function CreateTechnology() {
  return (
    <>
      <div className='w-full mb-10'>
        <h1 className='text-center text-2xl font-bold'>Create Technology page</h1>
      </div>

      <div className='w-full mb-10'>
      <h1 className=' text-smfont-bold text-red-500'>Create Technology page already tomorrow</h1>

      </div>
      
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-0   px-10">

        <div className="w-full sm:w-1/2 mb-6">
          <label className="block mb-2 text-sm font-medium
   text-gray-900">Select a country</label>
          <select id="cities" className="md:w-96 sm:w-full bg-gray-50 border border-gray-300 
 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a city</option>
            <option value="NY">New York</option>
            <option value="LA">Los Angeles</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2 my-0" style={{marginTop:'0'}}>
          <label className="block mb-2 text-sm font-medium text-gray-900">Select a city</label>
          <select id="cities" className="md:w-96 sm:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a city</option>
            <option value="NY">New York</option>
            <option value="LA">Los Angeles</option>
            <option value="Paris">Paris</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col space-y-4 sm:flex-row sm:space-x-4 px-10'>
        <div className='w-full sm:w-1/2'>
          <form>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black sm:w-">Select a number:</label>
            <input type="text" className="bg-gray-50 border 
    border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block md:w-96 sm:w-full p-2.5 dark:bg-gray-700 
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </form>
        </div>
        <div className='w-full sm:w-1/2' style={{ marginTop: '0' }}>
          <form>
            <label className='block mb-2 text-black font-medium text-sm'>Enter your name</label>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block md:w-96 sm:w-96 p-2.5 dark:bg-gray-700 
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </form>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row px-10 py-5'>
        <button className="bg-blue-500 
hover:bg-blue-700 text-white 
font-bold py-2 px-4 rounded">
          Click me
        </button>
      </div>
    </>
  )
}

export default CreateTechnology
