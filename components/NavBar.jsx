import React from 'react';
import NavBarItem from './NavBarItem';;
import { useRouter } from 'next/router';
import { FiHome } from 'react-icons/fi';
import { BsListCheck } from 'react-icons/bs';
import { TbDownload } from 'react-icons/tb';


const NavBar = () => {
    const router = useRouter();

    return (
        <nav className="flex flex-col items-center bg-gray-900 p-4 h-full w-36 fixed">
            <div className="mb-4" >
                <a href="/">  <img src="Picarro-logopicaaro.png" alt="Logo" className="w-12 h-12" /></a>
            </div>
            <ul className="w-full">
                <NavBarItem to="/home" icon={<FiHome size='22px' color='gray' />} label="Home" active={router.pathname === "/home"} />
                <NavBarItem to="/actions" icon={<BsListCheck size='22px' color='gray' />} label="Actions" active={router.pathname === "/actions"} />
                <NavBarItem to="/data-export" icon={<TbDownload size='22px' color='gray' />} label="Data Export" active={router.pathname === "/data-export"} />
            </ul>
        </nav>
    );
};

export default NavBar;
