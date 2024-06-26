import React from 'react'
import NavBar from './NavBar'
import Header from './Header'

const EveryPagesLayout = (props) => {
    return (
        <div>
            <NavBar />
            <div className="ml-20 bg-neutral-100">
                <div className="ml-20">
                    <Header label={props.label} title={props.title} subTitle={props.subTitle} />
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default EveryPagesLayout

// EverPagesLayout max 3 props ( label, title, subTitle )