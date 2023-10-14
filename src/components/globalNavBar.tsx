/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import PAGE_DEFINITIONS from './../constants/pageConstants';
import './globalNavBar.css';
import { Link, Location } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import Page from '../models/interfaces/page';

/*=========================================================
        Interfaces
=========================================================*/

export interface GlobalNavBarState {

}

export interface GlobalNavBarProps {
    Location: Location;
}

/*=========================================================
        Component
=========================================================*/

class GlobalNavBar extends React.Component<GlobalNavBarProps, GlobalNavBarState> {

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: GlobalNavBarProps) {
        super(pProps);
    }

    /*=========================================================
            Hooks
    =========================================================*/

    /*=========================================================
            Helpers
    =========================================================*/

    generateStyleClasses(pPage: Page): string {
        let classes: string[] = [
            "text-decoration-none"
        ];
        if(pPage.Path == this.props.Location.pathname) {
            classes.push("fw-bold");
        } else {
            classes.push("fw-medium");
        }
        return classes.join(' ');
    }

    /*=========================================================
            Render
    =========================================================*/

    render(): React.ReactNode {
        return (
            <nav className="globalNavBar-nav d-flex flex-column">
                {
                    PAGE_DEFINITIONS.map(
                        pPage => (
                            <div className="w-100 py-1 ps-1">
                                <Link to={pPage.Path} className={this.generateStyleClasses(pPage)}>{pPage.Name}</Link>
                            </div>
                        )
                    )
                }
            </nav>
        )
    }

}

export default withRouter<GlobalNavBarProps>(GlobalNavBar);