import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import { getDate } from "./getDate"

export default function PhotoList() {
    const [nasaPhoto, setNASA] = useState([]);
    const [photoDate, setDate] = useState(getDate());


    useEffect(() => {

        const photoDate = getDate();

        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=5E22GZSUCCPHcx2Eq7OmgFEcRrkhkLRURhpc8uL5&date=${photoDate}`)
        .then(response => {
            setNASA(response.data)
        })
        .catch(error => {
            console.log("Data not returned", error);
        })

    }, []);

    console.log(nasaPhoto);

    return (
    <PhotoCard
        date={nasaPhoto.date}
        url = {nasaPhoto.url}
        title = {nasaPhoto.title}
        explanation = {nasaPhoto.explanation}
    />
    );

}
