import React from 'react';
import ActionCard from './ActionCard';
import Header from './Header';
import ProgressBarSection from './ProgressionSection';
import { BiTachometer } from 'react-icons/bi';
import { CiWavePulse1 } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';
import { PiSlidersHorizontalThin } from 'react-icons/pi';
import { MdAir } from 'react-icons/md';

const Actions = () => {
    return (
        <div className="ml-20">
            <div className='px-6'>
                <ProgressBarSection />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-6">
                <ActionCard icon={<BiTachometer size='30px' color='gray' />} title="Measure" description="Quantify the concentration of target compounds with precision" />
                <ActionCard icon={<PiSlidersHorizontalThin size='30px' color='gray' />} title="Background Correction" description="Adjust for ambient interference to ensure accurate readings." />
                <ActionCard icon={<CiWavePulse1 size='30px' color='gray' />} title="Ambient" description="Monitor the environmental conditions for real-time air quality" />
                <ActionCard icon={<CiCircleCheck size='30px' color='gray' />} title="Inline Validation" description="Confirm reliability of measurements in real-time during the process" isActive />
                <ActionCard icon={<MdAir size='30px' color='gray' />} title="TD-GC" description="Analyze volatile compounds with thermal desorption and gas chromatography" />
            </div>
        </div>
    );
};

export default Actions;
