import "./seasons.css"
import React from "react"
import ReactDOM from "react-dom";


const seasonconfig = {

    summer : {

        text : "It's time for the beach",
        iconName : "snowflake"
    },

    winter : {
        text : "Burr It's chilly",
        iconName : "sun"
    }


};

const seasonalDisplay = (lat, month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat < 0 ? "winter" : "summer";
    }


}

const Seasons = (props) => {

    const sea = seasonalDisplay(props.lat, new Date().getDate());

    const {text , iconName} = seasonconfig[sea];
    return (


        <div className= {`season-display ${sea}`}>


            <i className={`icon-left massive  ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={ `icon-right massive ${iconName} icon`} />
        </div>
    );
};


export default Seasons;