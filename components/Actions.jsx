import React, { useState } from 'react';
import ActionCard from './ActionCard';
import ProgressBarSection from './ProgressionSection';
import { BiTachometer } from 'react-icons/bi';
import { CiWavePulse1 } from 'react-icons/ci';
import { CiCircleCheck } from 'react-icons/ci';
import { PiSlidersHorizontalThin } from 'react-icons/pi';
import { MdAir } from 'react-icons/md';
import Modal from './Modal';

const Actions = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('')

    const openModal = (title, description) => {
        setModalTitle(title);
        setModalDescription(description)
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="ml-20">
            <div className='px-6'>
                <ProgressBarSection />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-6">
                <ActionCard onRunNow={openModal} icon={<BiTachometer size='30px' color='gray' />} title="Measure" description="Quantify the concentration of target compounds with precision" />
                <ActionCard onRunNow={openModal} icon={<PiSlidersHorizontalThin size='30px' color='gray' />} title="Background Correction" description="Adjust for ambient interference to ensure accurate readings." />
                <ActionCard onRunNow={openModal} icon={<CiWavePulse1 size='30px' color='gray' />} title="Ambient" description="Monitor the environmental conditions for real-time air quality" />
                <ActionCard onRunNow={openModal} icon={<CiCircleCheck size='30px' color='gray' />} title="Inline Validation" description="Confirm reliability of measurements in real-time during the process" isActive />
                <ActionCard onRunNow={openModal} icon={<MdAir size='30px' color='gray' />} title="TD-GC" description="Analyze volatile compounds with thermal desorption and gas chromatography" />
            </div>
            <Modal isVisible={isModalVisible} title={modalTitle} description={modalDescription} onClose={closeModal} />
        </div>
    );
};

export default Actions;
