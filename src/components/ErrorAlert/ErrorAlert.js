import Alert from "../Alert/Alert";

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }

    getStyle = () => {
        return {
            color: this.color,
            fontWeight: 'bold',
            fontSize: '0.7rem'
        };
    }
}
export {ErrorAlert};