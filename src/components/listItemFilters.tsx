/*=========================================================
        Imports
=========================================================*/

import React from 'react';
import Tag from '../models/enums/tag';
import SortDirection from '../models/enums/sortDirection';
import ListItem from '../models/interfaces/listItem';
import ICN_ARROW_UP from '../assets/icons/icn_arrow_up.svg';
import ICN_ARROW_DOWN from '../assets/icons/icn_arrow_down.svg';
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
    onComboboxChange = (pEvent: React.ChangeEvent<HTMLSelectElement>) => {this.handleComboboxChange(pEvent);}
    onSortClick = (pEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {this.handleSortButtonClick(pEvent);}

    /*=========================================================
            Setup
    =========================================================*/

    constructor(pProps: ListItemFiltersProps) {
        super(pProps);
        this.state = {
            Filters: {
                SelectedTags: Object.values(Tag),
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

    updateFilters(pFilters: Partial<Filters>) {
        this.setState({
            Filters: Object.assign(this.state.Filters, pFilters)
        }, this.fireFilterChangeEvent);
    }

    /*=========================================================
            Handlers
    =========================================================*/

    handleSearchChange(pEvent: React.ChangeEvent<HTMLInputElement>) {
        this.updateFilters({
            SearchTerm: pEvent.target.value
        })
    }

    handleComboboxChange(pEvent: React.ChangeEvent<HTMLSelectElement>) {
        this.updateFilters({
            SortField: pEvent.target.value as keyof ListItem
        });
    }

    handleSortButtonClick(pEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        this.updateFilters({
            SortDirection: this.state.Filters.SortDirection == SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending
        });
    }

    /*=========================================================
            Render
    =========================================================*/

    render(): React.ReactNode {
        return (
            <div className="w-100 d-flex flex-column gap-2">
                {/* <h1>Filters</h1> */}
                <div>
                    <input
                        type="search"
                        className="form-control"
                        id="searchInput"
                        placeholder="Search for projects..."
                        value={this.state.Filters.SearchTerm}
                        onChange={this.onSearchChange}
                    />
                </div>
                <div className="d-flex flex-row gap-2 align-items-end">
                    <div className="w-100">
                        <label htmlFor="orderByInput" className="form-label">Order By</label>
                        <select 
                            className="form-select" 
                            id="orderByInput"
                            value={this.state.Filters.SortField}
                            onChange={this.onComboboxChange}
                        >
                            <option value="Date">Date</option>
                            <option value="Label">Title</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-primary h-fit-content" style={{aspectRatio: "1/1"}} onClick={this.onSortClick}>
                        <img width={20} src={this.state.Filters.SortDirection == SortDirection.Ascending ? ICN_ARROW_UP : ICN_ARROW_DOWN}/>
                    </button>
                </div>
                <div className="w-100">
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