import React, {Component} from 'react';

export default class EventDetails extends Component {
    render() {
        const {event} = this.props;
        return (
            <div className="details-container">
                <h2 className="details-title">About event:</h2>
                <a className="details-link" href={event.htmlLink}>See details on Google Calendar</a>
                <p className="details-description">{event.description}</p>
            </div>
        );
    }
}