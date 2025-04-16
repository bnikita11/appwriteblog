import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
         <div className="pl-4 mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                < p className="text-sm text-gray-600">
                                &copy; {new Date().getFullYear()} Nikita Baniya. All rights reserved.
                                </p>
                            </div>
        

            
        </section>
  )
}

export default Footer