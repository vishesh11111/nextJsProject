'use client'
import api_wrapper from '@/app/wrapper/wrapper'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const PublicNavbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4 ">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link className='text-white' href="/">
                                Your Logo
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <Link className='text-white' href="/">
                                Home
                            </Link>
                            <Link className='text-white' href="/about">
                                About
                            </Link>
                            <Link className='text-white' href="/pages/login">
                                Login
                            </Link>
                            {/* Add more navigation links as needed */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default PublicNavbar
