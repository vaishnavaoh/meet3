import Alert from "../Alert/Alert";

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'Orange';
    }
}
export {WarningAlert};