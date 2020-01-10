import React from "react";

export const getDate = () => {
    let today = new Date();
    today = today.toDateString();
    let dateArray = today.split(" ");

    switch(dateArray[1]) {
        case "Jan":
            dateArray[1] = "01";
            break;
        case "Feb":
            dateArray[1] = "02";
            break;
        case "Mar":
            dateArray[1] = "03";
            break;
        case "Apr":
            dateArray[1] = "04";
            break;
        case "May":
            dateArray[1] = "05";
            break;
        case "Jun":
            dateArray[1] = "06";
            break;
        case "Jul":
            dateArray[1] = "07";
            break;
        case "Aug":
            dateArray[1] = "08";
            break;
        case "Sep":
            dateArray[1] = "09";
            break;
        case "Oct":
            dateArray[1] = "10";
            break;
        case "Nov":
            dateArray[1] = "11";
            break;
        case "Dec":
            dateArray[1] = "12";
            break;
    }

    let date = dateArray[3] + "-" + dateArray[1] + "-" + dateArray[2];

    return date;

};