/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import PageFrame from '../components/pageFrame';
import Markdown from 'react-markdown';
import Spinner from '../components/spinner';
import ListItem from '../models/interfaces/listItem';
import { loadMarkdownData } from '../workers/dataWorker';
import Pill from '../components/pill';
import ListItemFilters from '../components/listItemFilters';

/*=========================================================
        Classes
=========================================================*/

class ListItemProcessor {

    Component: ListPage;
    ListItem: ListItem;
    LoadedMarkdown?: string;

    constructor(pComp: ListPage, pListItem: ListItem) {
        this.Component = pComp;
        this.ListItem = pListItem;
    }

    load(): Promise<any> {
        return loadMarkdownData(this.ListItem.MarkdownDataPath).then(
            (pMarkdownData) => {
                this.LoadedMarkdown = pMarkdownData;
            }
        )
    }

}

/*=========================================================
        Interfaces
=========================================================*/

export interface ListPageState {
    ItemProcessors: ListItemProcessor[];
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
        this.state = {
            ItemProcessors: []
        }
    }

    /*=========================================================
            Hooks
    =========================================================*/

    componentDidMount(): void {
        this.processItems();
    }

    componentDidUpdate(prevProps: Readonly<ListPageProps>, prevState: Readonly<ListPageState>, snapshot?: any): void {
        if(prevProps.Items != this.props.Items) {
            this.processItems();
        }
    }

    /*=========================================================
            Helpers
    =========================================================*/

    processItems() {
        this.setState({
            ItemProcessors: this.props.Items.map(
                pItem => {
                    let listItemProcessor = new ListItemProcessor(this, pItem);
                    listItemProcessor.load().then(() => {this.setState({});}); //Load markdown, then rerender
                    return listItemProcessor;
                }
            )
        });
    }

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
                    {/* <ListItemFilters onFilterChange={() => {}}/> */}
                    {
                        //Item List
                        this.state.ItemProcessors.map(
                            pProcessor => (
                                <React.Fragment>
                                    <hr/>
                                    <div className="w-100 d-flex flex-column gap-1">
                                        <h2>{pProcessor.ListItem.Label}</h2>
                                        <div className="d-flex flex-wrap gap-1">
                                            {
                                                pProcessor.ListItem.Tags.map(
                                                    pTag => (
                                                        <Pill tag={pTag}></Pill>
                                                    )
                                                )
                                            }
                                        </div>
                                        <div className="w-100">
                                            {
                                                undefined == pProcessor.LoadedMarkdown ? (
                                                    <div className="w-fit-content py-2 mx-auto">
                                                        <Spinner assistiveText="Loading Markdown"/>
                                                    </div>
                                                ) : (
                                                    <Markdown>{pProcessor.LoadedMarkdown}</Markdown>
                                                )
                                            }
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        )
                    }
                </React.Fragment>
            </PageFrame>
        )
    }

}