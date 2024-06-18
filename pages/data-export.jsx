import React from 'react'
import EveryPageLayout from '../components/EveryPagesLayout'
import DataExportComponent from '../components/DataExport'

const DataExport = () => {
    return (
        <div>
            <EveryPageLayout title='Data Export'>
                <DataExportComponent />
            </EveryPageLayout>
        </div>
    )
}

export default DataExport