import React from 'react';
import Link from 'next/link';

const NavBarItem = ({ to, icon, label, active }) => {
    return (
        <li className={`mb-2 ${active ? 'bg-gray-700 rounded-md' : ''} rounded hover:bg-gray-700 transition duration-300 text-sm`}>
            <Link href={to} className="flex items-center justify-center py-2 px-1 text-white mr-4">
                <i className={`mr-3 ${icon}`} />
                <div className='flex flex-col items-center'>
                    {icon}
                    {label}
                </div>
            </Link>
        </li>
    );
};


export default NavBarItem;
