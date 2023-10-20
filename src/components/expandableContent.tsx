/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import Markdown from 'react-markdown';

import './expandableContent.css';

/*=========================================================
        Constants
=========================================================*/

const DEFAULT_COLLAPSED_HEIGHT = 200;

/*=========================================================
        Interfaces
=========================================================*/

export interface ExpandableContentState {
    IsCollapsed: boolean;
}

export interface ExpandableContentProps {
    content: string;
    collapsedHeight?: number;
}

/*=========================================================
        Component
=========================================================*/

export default class ExpandableContent extends React.Component<ExpandableContentProps, ExpandableContentState> {

    /*=========================================================
            Vars
    =========================================================*/

    ParentDivRef: React.Ref<HTMLDivElement>;

    /*=========================================================
            Events
    =========================================================*/

    onExpand = () => {this.setState({IsCollapsed: false})}
    onCollapse = () => {this.setState({IsCollapsed: true}); this.ParentDivRef?.current.scrollIntoView({behavior: 'smooth', block: 'end'})}

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: ExpandableContentProps) {
        super(pProps);
        this.ParentDivRef = React.createRef();
        this.state = {
            IsCollapsed: true,
        }
    }

    /*=========================================================
            Hooks
    =========================================================*/

    /*=========================================================
            Render
    =========================================================*/

    render(): React.ReactNode {
        return (
            <div 
                style={{
                    maxHeight: this.state.IsCollapsed ? `${this.props.collapsedHeight || DEFAULT_COLLAPSED_HEIGHT}px` : undefined
                }} 
                className="position-relative overflow-hidden"
                ref={this.ParentDivRef}
            >
                {
                    this.state.IsCollapsed ? (
                        <div className="expandablecontent-preview-screen position-absolute w-100 h-100 d-flex justify-content-center align-items-end">
                            <button className="btn btn-outline-primary expandablecontent-readmore" onClick={this.onExpand}>
                                Read More
                            </button>
                        </div>
                    ) : (<></>)
                }
                <Markdown>{this.props.content}</Markdown>
                {
                    !this.state.IsCollapsed ? (
                        <div className="w-100 d-flex justify-content-center">
                            <button className="btn btn-outline-primary" onClick={this.onCollapse}>
                                Collapse
                            </button>
                        </div>
                    ) : (<></>)
                }
            </div>
        )
    }

}