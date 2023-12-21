import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='flex flex-col sm:flex-row mt-4 mb-10 sm:space-x-0 gap-1'>
            
            <div className='flex flex-col sm:flex-row'>
                <Link href={'/createtechnology'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                    font-bold py-2 px-2 rounded
                                    focus:bg-blue-950
                                    active:bg-blue-950
                                    ">
                   Create Technology
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <Link href={'/servicescreator'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
                    Services Creator
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <Link href={'/createtemplated'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
                    Creator Templated
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <Link href={'/createblog'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
                    Creator Blog
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <Link href={'/updatesecurity'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
                    Update Security
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <Link href={'/createnotice'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
                    Create Notice
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <Link href={'/createorder'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
                    Create Order
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row'>
                <Link href={'/paymentpage'} className="bg-blue-500 
                                hover:bg-blue-700 text-white 
                                font-bold py-2 px-2 rounded focus:bg-blue-950">
                    Payment Page
                </Link>
            </div>
            
        </div>
    )
}

export default Header
