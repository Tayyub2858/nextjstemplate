import React from 'react'
import { FaEdit, FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function CreateNotice() {
  return (
    <>
      <div className='w-full mb-10'>
        <h1 className='text-center text-2xl font-bold'>Notice Board Page</h1>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className='flex flex-col sm:flex-row text-center'>
          <div className="min-w-96">
            <table className="bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b border-l bg-blue-400 text-white text-left">NO </th>
                  <th className="py-3 px-4 border-b border-l bg-blue-400 text-white text-left">Title</th>
                  <th className="py-3 px-4 border-b border-l bg-blue-400 text-white text-left">Date</th>
                  <th className="py-3 px-4 border-b border-l bg-blue-400 text-white text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-l bg-gray-300"></td>
                  <td className="py-2 px-4 border-b border-l bg-gray-300"></td>
                  <td className="py-2 px-4 border-b border-l bg-gray-300"></td>
                  <td className="py-2 px-4 border-b border-l bg-gray-300">
                    <button className='flex bg-orange-400 px-3 py-2 rounded-md text-white font-bold'>
                      File Upload<FaRegArrowAltCircleUp className="text-white-500" size={25} style={{ marginLeft: '8px' }} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-l border-r">25</td>
                  <td className="py-3 px-4 border-b border-l border-r">Jane Doe</td>
                  <td className="py-3 px-4 border-b border-l border-r">25-15-2023</td>
                  <td className="py-3 px-4 border-b border-l border-r">View</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='ml-2'>
            <button className=' bg-orange-900 px-3 py-2 rounded-md text-white font-bold mt-14'>ADD</button>
            <div className='flex ml-0 mt-1'>
              <FaEdit className="bg-green-500 text-white rounded-md px-2 py-2" size={35} style={{ marginLeft: '8px' }} />
              <MdDelete className="bg-red-500 text-white rounded-md px-2 py-2" size={35} style={{ marginLeft: '8px' }} />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default CreateNotice
