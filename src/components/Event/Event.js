import React, {Component} from 'react';
import EventDetails from '../EventDetails/EventDetails';

class Event extends Component {
    state = {
        detailsButton: 'show'
    }

    handleDetailsButtonClick() {
        this.state.detailsButton === 'show'
        ? this.setState({detailsButton: 'hide'})
        : this.setState({detailsButton: 'show'});
    }

    showEventDetails() {
        return this.state.detailsButton === 'show'
        ? null
        : <EventDetails event={this.props.event}/>
    }

    render() {
        const {event} = this.props;
        const {detailsButton} = this.state;
        return (
            <div className="Event-container">
                <div className="Event-details-container">
                    <h1 className="Event-title">{event.summary}</h1>
                    <p className="Event-time">{new Date(event.start.dateTime).toString()}</p>
                    <p className="Event-location">{`@${event.summary} | ${event.location}`}</p>
                    {this.showEventDetails()}
                </div>
                <button className="details-button" onClick={() => this.handleDetailsButtonClick()}>{`${detailsButton} details`}</button>
            </div>
        );
    }
}
export default Event