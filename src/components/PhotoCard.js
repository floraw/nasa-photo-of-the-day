import React from "react";

const PhotoCard = props => {
    return (
        <div>
            <h1> Starship Log: {props.date} </h1>
            <img src={props.url} />
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
    </div>
    );
};

export default PhotoCard;