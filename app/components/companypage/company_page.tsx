import { Editor } from 'primereact/editor'
import React from 'react'
import { FaEdit, FaRegFilePdf } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

function Company_page() {
    return (
        <div className='bg-gray-50'>
            <div className='w-10/12 m-auto '>
                <div className='text-center text-2xl font-bold mt-4'>
                    <h1>Company page</h1>
                </div>
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="ml-3 text-xl"></span>
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 text-2xl font-bold hover:text-gray-900">Non Profits</a>
                        </nav>
                        <div className='flex ml-0 mt-1'>
                            <FaEdit className="bg-green-500 text-white rounded-md px-2 py-2" size={40} style={{ marginLeft: '8px' }} />
                            <MdDelete className="bg-red-500 text-white rounded-md px-2 py-2" size={40} style={{ marginLeft: '8px' }} />
                            <FaRegFilePdf className="bg-slate-300 text-white rounded-md px-2 py-2" size={40} style={{ marginLeft: '8px' }} />
                        </div>
                    </div>
                </header>
                <div className='flex flex-col md:flex-row items-center'>
                    <input type="text" className="border text-red-600 text-xl font-bold border-blue-950 py-2 px-1 w-48 rounded-md" />
                    <button className=' bg-orange-900 px-3 py-3 rounded-md text-white font-bold '>ADD</button>
                </div>
                <div className='container mx-auto flex md:flex-row items-center'>
                    <div className='flex w-96'>

                        <div>
                            <div className="bg-gray-100 text-gray-800 w-48 py-2 mt-6 rounded">
                                <ul>
                                    <li className="flex items-center px-2 py-4 hover:bg-gray-300 hover:text-black">
                                        No Profits
                                    </li>

                                    <li className="flex items-center px-2 py-4 hover:bg-gray-300 hover:text-black">
                                        Doners
                                    </li>

                                    <li className="flex items-center px-2 py-4 hover:bg-gray-300 hover:text-black">
                                        Companies
                                    </li>

                                    <li className="flex items-center px-2 py-4 hover:bg-gray-300 hover:text-black">
                                        Out Impact
                                    </li>

                                    <li className="flex items-center px-2 py-4 hover:bg-gray-300 hover:text-black">
                                        Donate
                                    </li>

                                    <li className="flex items-center px-2 py-4 hover:bg-gray-300 hover:text-black">
                                        Donate Today
                                    </li>
                                    <li className="flex items-center px-2 py-4 hover:bg-gray-300 hover:text-black">
                                        Votunteer
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=' flex-col sm:flex-row ml-10 pb-10 mt-5'>
                        <div className=" items-center space-x-4 w-full sm:w-1/2">
                            <label className=" text-black px-4 py-2 rounded">Enter Title</label>
                            <input type="text" className="border border-blue-950 py-2 px-2 w-full rounded-md" />
                        </div>
                        <div className='py-4'>
                            <Editor style={{ height: '320px', width: '800px' }} className='w-full' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Company_page
