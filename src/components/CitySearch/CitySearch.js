import React, { Component } from 'react';
import { InfoAlert } from '../Alert/Alert';

export default class CitySearch extends Component {
    state = {
        query: '',
        infoText: 'testing',
        suggestions: [],
        showSuggestions: false
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        console.log(event);
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        console.log(suggestions);
        if (this.state.query === '') {
            this.setState({
                query: value,
                suggestions,
                infoText: 'We can not find the city you are looking for. Please try another city',
            });
        } else {
            this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }
    }

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false,
            infoText: ''
        });

        this.props.updateEvents(suggestion);
    }

    render() {
        const {infoText, query, suggestions, showSuggestions} = this.state;
        return (
            <div className="CitySearch">
                <InfoAlert text={infoText} />
                <div className="SearchContainer">
                <label>Cities:
                <input
          type="text"
          className="city"
          value={query}
          onChange={this.handleInputChanged}
        />
                </label>

                <ul className="suggestions" style={showSuggestions ? {}: {display: 'none'}}>
                    {suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                    <li key='all' onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}