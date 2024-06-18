"use client";
import React from "react";

const Modal = ({ isVisible, onClose, title, description }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                    {description}
                </p>
                <div className="flex flex-col space-y-2 mb-4">
                    <label className="text-sm font-semibold" htmlFor="runtime">
                        Run Time
                    </label>
                    <input
                        id="runtime"
                        type="text"
                        className="border rounded-md px-2 py-1"
                        placeholder="00:00"
                    />
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            // handle start run logic
                            onClose();
                        }}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Start Run
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;