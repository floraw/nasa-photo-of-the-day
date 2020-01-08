import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList() {
    const [nasaPhoto, setNASA] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=5E22GZSUCCPHcx2Eq7OmgFEcRrkhkLRURhpc8uL5')
        .then(response => {
            //console.log(response)
            setNASA(response.data)
        })
        .catch(error => {
            console.log("Data not returned", error);
        });

    }, []);

    console.log(nasaPhoto);

    return null;

}
