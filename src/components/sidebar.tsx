/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import ICN_ENVELOPE from './../assets/icons/icn_envelope.svg';
import ICN_GITHUB from './../assets/icons/icn_github.svg';
import ICN_LINKEDIN from './../assets/icons/icn_linkedin.svg';
import ICN_FILE from './../assets/icons/icn_file.svg';
import ICN_SALESFORCE from './../assets/icons/icn_salesforce.svg';
import JAKE_PICTURE from './../assets/images/jake.jpg';

/*=========================================================
        Constants
=========================================================*/

const BUTTONS: {Label: string, Icon: any, Link: string}[] = [
    {
        Label: 'jwkirkman@hotmail.com',
        Icon: ICN_ENVELOPE,
        Link: 'mailto:jwkirkman@hotmail.com'
    },
    {
        Label: 'CV',
        Icon: ICN_FILE,
        Link: '/assets/CV.pdf'
    },
    {
        Label: 'Github',
        Icon: ICN_GITHUB,
        Link: 'https://github.com/jake-kirkman'
    },
    {
        Label: 'LinkedIn',
        Icon: ICN_LINKEDIN,
        Link: 'https://uk.linkedin.com/in/jake-kirkman'
    },
    {
        Label: 'Trailhead',
        Icon: ICN_SALESFORCE,
        Link: 'https://www.salesforce.com/trailblazer/checko9'
    }
];

/*=========================================================
        Interfaces
=========================================================*/

export interface SidebarState {

}

export interface SidebarProps {

}

/*=========================================================
        Component
=========================================================*/

export default class Sidebar extends React.Component<SidebarProps, SidebarState> {

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: SidebarProps) {
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
            <div className="w-100 w-md-300 px-2 pt-2 position-md-sticky top-0">
                <h1 className="text-primary">
                    <a href="/" className="text-decoration-none">
                        <strong>
                            Jake Kirkman
                        </strong>
                    </a>
                </h1>
                <img
                    src={JAKE_PICTURE}
                    className="rounded w-100 my-2 max-vh-50"
                    style={{aspectRatio: '1/1'}}
                />
                <p className="pt-0 text-secondary">
                    Based in Essex, United Kingdom
                </p>
                <div className="d-flex flex-column gap-1 align-items-stretch w-md-100 w-75 mx-auto">
                    {
                        BUTTONS.map(
                            (pButton, pIndex) => (
                                <a key={pIndex} href={pButton.Link} className="w-100 text-decoration-none" target="_blank">
                                    <button className="w-100 d-flex flex-row gap-1 rounded">
                                        <img src={pButton.Icon} width={24} height={24}/>
                                        {pButton.Label}
                                    </button>
                                </a>
                            )
                        )
                    }
                </div>
            </div>
        )
    }

}