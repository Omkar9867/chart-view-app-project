import React from 'react'

const EmptyData = () => {
    return (
        <>
            <div className='rounded-sm h-3/4 bg-white shadow-sm'>
                <div className='flex flex-col justify-center h-3/4 text-center items-center gap-1 '>
                    <h3 className='font-bold'>No Data Available</h3>
                    <p className='text-gray-500'>New run measures will be available to download here</p>
                </div>
            </div>
        </>
    )
}

const DataExport = () => {
    return (
        <div className='h-screen'>
            <EmptyData />
        </div>
    )
}

export default DataExport