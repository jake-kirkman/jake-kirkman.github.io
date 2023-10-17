/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import Tag from '../models/enums/tag';

/*=========================================================
        Interfaces
=========================================================*/

export interface PillState {

}

export interface PillProps {
    tag: Tag;
}

/*=========================================================
        Component
=========================================================*/

export default class Pill extends React.Component<PillProps, PillState> {

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: PillProps) {
        super(pProps);
    }

    /*=========================================================
            Hooks
    =========================================================*/

    /*=========================================================
            Render
    =========================================================*/

    render(): React.ReactNode {
        //Cursor Pointer needs to be enabled once filtering has been added
        return (
            <span className="/*cursor-pointer*/ rounded-pill border-2 border-primary border bg-primary-subtle fw-semibold px-2 py-1">
                {this.props.tag}
            </span>
        )
    }

}