import React from "react";
import ReactDOM from "react-dom";
import Seasons from "./Seasons";
import Loader from "./Loader";



class App extends React.Component {

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => {

                this.setState({ errorMessage: err.message });
            }
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>  Error : {this.state.errorMessage} </div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <Seasons lat={this.state.lat} />;
        }

        else {
            return <Loader message="please grant location request" />;
        }
    }


    //render method is required 
    render() {

      return (
        <div>
            {this.renderContent()};
        </div>
      );
    };
};

ReactDOM.render(<App />, document.querySelector("#root"));
