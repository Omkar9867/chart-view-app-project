import React from 'react';
import NavBar from '../components/NavBar';
import Actions from '../components/Actions';
import EveryPagesLayout from '../components/EveryPagesLayout';

const ActionsPage = () => {
    return (
        <div>
            <EveryPagesLayout title='Actions' subTitle='Running'>
                <Actions />
            </EveryPagesLayout>
        </div>
    );
}

export default ActionsPage