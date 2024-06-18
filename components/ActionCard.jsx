import React from 'react'
import Button from './Button';

const ActionCard = ({ title, description, isActive, icon, onRunNow }) => {
    return (
        <div className={`p-4 bg-white border rounded-lg ${isActive ? 'border-green-500' : 'border-gray-300'} hover:border-gray-500 transition duration-300`}>
            <div>{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-3 pb-3 text-sm text-gray-600">{description}</p>
            <Button onClick={() => onRunNow(title, description)} label='Run Now' />
        </div>
    );
};

export default ActionCard