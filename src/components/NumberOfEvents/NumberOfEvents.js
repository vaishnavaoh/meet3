import React, {Component} from 'react';
import { ErrorAlert } from '../Alert/Alert';

export default class NumberOfEvents extends Component {
    state = {
        resultNumber: 32,
        errorText: ''
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        switch(true) {
            case value < 1:
                this.setState({
                    resultNumber: 1,
                    errorText: 'Select number from 1 to 32'
                });

                this.props.updateNumberOfEvents(1);
                break;
            case value > 32:
                this.setState({
                    resultNumber: 32,
                    errorText: 'Select number from 1 to 32'
                });

                this.props.updateNumberOfEvents(32);
                break;
            default:
                this.setState({
                    resultNumber: value,
                    errorText: ''
                });

                this.props.updateNumberOfEvents(event.target.value);
                break;
        }
    }

    render() {
        const {resultNumber} = this.state;
        return (
            <div className="NumberOfEvents">
                <label># of events:
                <input type="number"
                className="number-events"
                value={resultNumber}
                onChange={this.handleInputChange}
                min="1"
                max="32"
                />
                </label>
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
}