import React from 'react';
import { BiTachometer } from 'react-icons/bi';
import CircularProgression from './CircularProgression';



const ProgressBarSection = () => {

    const serviceTab = [
        {
            value: 75,
            title: "PRODUCTION"
        }
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between space-x-4 mb-8">
            <div className="flex items-center space-x-16 flex-1">
                {/* <div className="relative w-24 h-24">
                    <svg viewBox="0 0 36 36" className="circular-chart green w-full h-full">
                        <path className="circle-bg" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path className="circle" strokeDasharray="75, 100" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-green-500 font-semibold text-xl">75%</div>
                </div> */}

                <div>
                    {serviceTab.map((x, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div>
                                    <CircularProgression
                                        serviceTab={serviceTab}
                                        index={index}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div>
                    <div className='flex items-center gap-2 mb-2'>
                        <span ><BiTachometer size='24px' color='#4caf50' /></span>
                        <h2 className="text-xl font-semibold">Measure Run</h2>
                    </div>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">RUNNING</span>
                    <div className="mt-6 flex justify-between gap-9 ">
                        <p className="text-sm "><span className="font-semibold">FOUP ID:</span> <br /> XYZ112</p>
                        <p className="text-sm "><span className="font-semibold">Start Time:</span> <br /> Apr 3, 2024 1:34pm</p>
                        <p className="text-sm "><span className="font-semibold">Run Time:</span> <br /> 00:01:03</p>
                    </div>
                </div>
            </div>
            <div className="text-left pl-16 w-96">
                <button className="text-red-700 text-sm px-2 py-1 border-2 border-opacity-40 border-red-700 rounded-md hover:text-white hover:bg-red-700 transition duration-300 mb-5">Abort Run</button>
                <p className="text-xs text-gray-500 mt-2">
                    Immediately stop the current measurement run. Aborting will halt all ongoing processes and any data collected during this run may not be saved or may be incomplete.
                </p>
            </div>
        </div>
    );
};

export default ProgressBarSection;
