import Alert from "../Alert/Alert";

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }

  getStyle = () => {
    return {
      color: this.color,
      fontWeight: "bold",
      fontSize: "0.7rem",
    };
  };
}

export { InfoAlert };
