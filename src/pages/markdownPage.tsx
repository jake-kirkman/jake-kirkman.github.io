/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import PageFrame from '../components/pageFrame';
import Markdown from 'react-markdown';
import Spinner from '../components/spinner';
import { loadMarkdownData } from '../workers/dataWorker';

/*=========================================================
        Interfaces
=========================================================*/

export interface MarkdownPageState {
    IsLoading: boolean;
    MarkdownData?: string;
}

export interface MarkdownPageProps {
    MarkdownFilePath: string;
}

/*=========================================================
        Component
=========================================================*/

export default class MarkdownPage extends React.Component<MarkdownPageProps, MarkdownPageState> {

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: MarkdownPageProps) {
        super(pProps);
        this.state = {
            IsLoading: true
        }
    }

    /*=========================================================
            Hooks
    =========================================================*/

    componentDidMount(): void {
        this.loadMarkdown();
    }

    componentDidUpdate(prevProps: Readonly<MarkdownPageProps>, prevState: Readonly<MarkdownPageState>, snapshot?: any): void {
        if(this.props.MarkdownFilePath != prevProps.MarkdownFilePath) {
            this.setState({IsLoading: true}, this.loadMarkdown.bind(this));
        }
    }

    /*=========================================================
            Helpers
    =========================================================*/

    loadMarkdown() {
        if(undefined != this.props.MarkdownFilePath) {
            let targetFile = this.props.MarkdownFilePath;
            loadMarkdownData(targetFile).then(
                (pLoadedMarkdown) => this.props.MarkdownFilePath == targetFile && this.setState({
                    IsLoading: false,
                    MarkdownData: pLoadedMarkdown
                })
            ).catch(
                (pEx) => {
                    console.error(pEx);
                    //If the current page we want to load hasn't changed, then update
                    //the state to show the error message
                    if(this.props.MarkdownFilePath == targetFile) {
                        this.setState({
                            IsLoading: false,
                            MarkdownData: `Error obtaining page data: ${pEx.message || 'Unknown Error'}`
                        });
                    }
                }
            );
        } else {
            //Undefined markdown file path, set page to error text
            this.setState({
                IsLoading: false,
                MarkdownData: `Error obtaining page data: undefined markdown file path`
            });
        }
    }


    /*=========================================================
            Render
    =========================================================*/

    render(): React.ReactNode {
        return (
            <PageFrame>
                {
                    this.state.IsLoading ? (
                        <div className="d-flex justify-content-center pt-2">
                            <Spinner assistiveText="Loading"/>
                        </div>
                    ) : (
                        <Markdown>
                            {this.state.MarkdownData!}
                        </Markdown>
                    )
                }
            </PageFrame>
        )
    }

}