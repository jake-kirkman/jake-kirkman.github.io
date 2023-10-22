/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import PageFrame from '../components/pageFrame';
import ListItem from '../models/interfaces/listItem';
import ListItemComp from '../components/listItemComp';
import ListItemFilters from '../components/listItemFilters';

/*=========================================================
        Interfaces
=========================================================*/

export interface ListPageState {

}

export interface ListPageProps {
    PageTitle?: string;
    PageDescription?: string;
    Items: ListItem[];
}

/*=========================================================
        Component
=========================================================*/

export default class ListPage extends React.Component<ListPageProps, ListPageState> {

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: ListPageProps) {
        super(pProps);
    }

    /*=========================================================
            Hooks
    =========================================================*/

    /*=========================================================
            Render
    =========================================================*/

    ifNotNull(pText: string | undefined, pBuilder: () => React.JSX.Element): React.JSX.Element {
        return undefined != pText ? pBuilder() : <></>;
    }

    render(): React.ReactNode {
        return (
            <PageFrame>
                <React.Fragment>
                    {
                        // Page Title
                        this.ifNotNull(this.props.PageTitle, () => (
                            <h2>
                                {this.props.PageTitle}
                            </h2>
                        ))
                    }
                    {
                        // Page Description
                        this.ifNotNull(this.props.PageDescription, () => (
                            <div className="w-100 pb-2">
                                {this.props.PageDescription}
                            </div>
                        ))
                    }
                    {/* <hr/> */}
                    {/* <ListItemFilters onFilterChange={() => {}}/> */}
                    {
                        this.props.Items.map(
                            pItem => (
                                <React.Fragment key={pItem.Label}>
                                    <hr/>
                                    <ListItemComp item={pItem}/>
                                </React.Fragment>
                            )
                        )
                    }
                </React.Fragment>
            </PageFrame>
        )
    }

}