import { Editor } from 'primereact/editor'
import React from 'react'

function UpdateSecurity() {
  return (
    <>
    <div className='w-full mb-10 '>
      <h1 className='text-center text-2xl font-bold'>Create Security Page</h1>
    </div>

    <div className='flex flex-col sm:flex-row px-10 py-5'>
        <button className="bg-blue-500 
                            hover:bg-blue-700 text-white 
                          font-bold py-2 px-4 rounded">
        Update  Security
        </button>
      </div>
      <div className='flex flex-col sm:flex-row ml-10 pb-10'>
        <Editor style={{ height: '320px' }} className='w-full' />
      </div>
    </>
  )
}

export default UpdateSecurity
