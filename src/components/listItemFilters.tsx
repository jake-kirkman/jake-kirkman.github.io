/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import Tag from '../models/enums/tag';
import SortDirection from '../models/enums/sortDirection';
import ListItem from '../models/interfaces/listItem';
import ICN_FILTERS from '../assets/icons/icn_filters.svg';
import Pill from './pill';

/*=========================================================
        Interfaces
=========================================================*/

export interface ListItemChangeEvent {
    Filters: Filters;
}

export interface Filters {
    SearchTerm?: string;
    SelectedTags: Tag[];
    SortDirection: SortDirection;
    SortField: keyof ListItem;
}

export interface ListItemFiltersState {
    Filters: Filters;
}

export interface ListItemFiltersProps {
    onFilterChange: (pEvent: ListItemChangeEvent) => void;
}

/*=========================================================
        Component
=========================================================*/

export default class ListItemFilters extends React.Component<ListItemFiltersProps, ListItemFiltersState> {

    /*=========================================================
            Events
    =========================================================*/

    onSearchChange = (pEvent: React.ChangeEvent<HTMLInputElement>) => {this.handleSearchChange(pEvent);}

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: ListItemFiltersProps) {
        super(pProps);
        this.state = {
            Filters: {
                SelectedTags: [],
                SortDirection: SortDirection.Descending,
                SortField: 'Date'
            }
        };
    }

    /*=========================================================
            Hooks
    =========================================================*/

    /*=========================================================
            Helpers
    =========================================================*/

    fireFilterChangeEvent() {
        if(undefined != this.props.onFilterChange) {
            this.props.onFilterChange({
                Filters: Object.assign({}, this.state.Filters)
            });
        }
    }

    /*=========================================================
            Handlers
    =========================================================*/

    handleSearchChange(pEvent: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            Filters: Object.assign(this.state.Filters, {
                SearchTerm: pEvent.target.value
            })
        }, this.fireFilterChangeEvent);
    }

    /*=========================================================
            Render
    =========================================================*/

    render(): React.ReactNode {
        return (
            <div className="w-100 d-flex flex-column gap-2">
                <div className="d-flex w-100 flex-row gap-2">
                    <div>
                        <input
                            type="search"
                            className="form-control"
                            id="searchInput"
                            placeholder="Search..."
                            onChange={this.onSearchChange}
                        />
                    </div>
                    <div>
                        <select className="form-select">
                            <option value="Date">Date</option>
                            <option value="Label">Title</option>
                        </select>
                    </div>
                </div>
                <div className="w-100">
                    <h3>Filters</h3>
                    <div className="w-100 d-flex flex-wrap flex-row">
                        {
                            Object.values(Tag).map(
                                pTag => (
                                    <Pill tag={pTag}/>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

}