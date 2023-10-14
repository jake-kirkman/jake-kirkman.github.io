/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import './spinner.css';

/*=========================================================
        Interfaces
=========================================================*/

export interface SpinnerState {

}

export interface SpinnerProps {
    className?: string;
    assistiveText: string;
}

/*=========================================================
        Component
=========================================================*/

export default class Spinner extends React.Component<SpinnerProps, SpinnerState> {

    /*=========================================================
            Getters
    =========================================================*/

    get spinnerClassName() {
        let classes = [
            "spinner"
        ];
        if(this.props.className) classes.push(this.props.className);
        return classes.join(' ');
    }

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: SpinnerProps) {
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
            <svg className={this.spinnerClassName} viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
        )
    }

}