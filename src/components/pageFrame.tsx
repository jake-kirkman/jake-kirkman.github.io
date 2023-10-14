/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import Sidebar from './sidebar';
import GlobalNavBar from './globalNavBar';

/*=========================================================
        Interfaces
=========================================================*/

export interface PageFrameState {

}

export interface PageFrameProps {
    children: React.JSX.Element | React.JSX.Element[] | string | undefined;
}

/*=========================================================
        Component
=========================================================*/

export default class PageFrame extends React.Component<PageFrameProps, PageFrameState> {

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: PageFrameProps) {
        super(pProps);
    }

    /*=========================================================
            Hooks
    =========================================================*/

    /*=========================================================
            Render
    =========================================================*/

    render(): React.ReactNode {
        return (
            <div className="d-flex flex-md-row flex-column justify-content-between align-items-stretch w-md-75 w-xxl-50 w-100 min-vh-100 mx-auto pt-md-3 px-2 px-md-0 bg-light">
                <div className="w-100 w-md-auto">
                    <Sidebar/>
                </div>
                <div className="w-100 w-md-50 pt-3 px-2 ps-md-5 flex-fill">
                    <GlobalNavBar/>
                    {this.props.children}
                </div>
            </div>
        )
    }

}