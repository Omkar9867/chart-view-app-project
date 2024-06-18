import React from 'react';
import Button from './Button';
import { RxCounterClockwiseClock } from 'react-icons/rx';

const Header = (props) => {
    return (
        <div className='m-0 p-0 shadow-md bg-white'>
            <header className="flex justify-between items-center mb-8 p-5 ">
                <div className="flex gap-2">
                    <h1 className="text-2xl font-bold">{props.title}</h1>
                    {props.subTitle && <span className="px-2 py-1 text-xs bg-green-500 text-white rounded mr-2 mt-2">{props.subTitle}</span>}
                </div>

                {props.label && <Button icon={<RxCounterClockwiseClock />} label={props.label} />}
            </header>
        </div>
    )
}

export default Header