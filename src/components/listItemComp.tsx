/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import ListItem from '../models/interfaces/listItem';
import { loadMarkdownData } from '../workers/dataWorker';
import Pill from './pill';
import Spinner from './spinner';
import Markdown from 'react-markdown';
import ExpandableContent from './expandableContent';

/*=========================================================
        Interfaces
=========================================================*/

export interface ListItemCompState {
    LoadedMarkdown?: string;
    IsLoading: boolean;
}

export interface ListItemCompProps {
    item: ListItem;
}

/*=========================================================
        Component
=========================================================*/

export default class ListItemComp extends React.Component<ListItemCompProps, ListItemCompState> {

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: ListItemCompProps) {
        super(pProps);
        this.state = {
            IsLoading: true
        };
    }

    /*=========================================================
            Hooks
    =========================================================*/

    componentDidMount(): void {
        this.loadMarkdown();
    }

    componentDidUpdate(pPrevProps: Readonly<ListItemCompProps>, pPrevState: Readonly<ListItemCompState>, pSnapshot?: any): void {
        if(pPrevProps.item.MarkdownDataPath != this.props.item.MarkdownDataPath) {
            this.loadMarkdown();
        }
    }

    /*=========================================================
            Helper Methods
    =========================================================*/

    loadMarkdown(): Promise<void> {
        let targetMarkdown = this.props.item.MarkdownDataPath;
        return loadMarkdownData(targetMarkdown).then(
            (pMarkdownData) => {
                //Check that we still want to load this specific markdown to prevent race conditions, otherwise just ignore it
                if(targetMarkdown == this.props.item.MarkdownDataPath) {
                    this.setState({LoadedMarkdown: pMarkdownData, IsLoading: false});
                }
            }
        )
    }

    /*=========================================================
            Render
    =========================================================*/

    render(): React.ReactNode {
        return (
            <div className="w-100 d-flex flex-column gap-1">
                <div className="w-100 d-flex justify-content-between align-items-md-center flex-md-row flex-column">
                    <h2 className="mb-0 text-wrap">{this.props.item.Label}</h2>
                    <span className="text-secondary text-nowrap">{this.props.item.Date}</span>
                </div>
                <div className="d-flex flex-wrap gap-1">
                    {
                        this.props.item.Tags.map(
                            pTag => (
                                <Pill tag={pTag}></Pill>
                            )
                        )
                    }
                </div>
                <div className="w-100 position-relative">
                    {
                        undefined == this.state.IsLoading ? (
                            <div className="w-fit-content py-2 mx-auto">
                                <Spinner assistiveText="Loading Markdown"/>
                            </div>
                        ) : (
                            <ExpandableContent content={this.state.LoadedMarkdown!}/>
                        )
                    }
                </div>
            </div>
        )
    }

}