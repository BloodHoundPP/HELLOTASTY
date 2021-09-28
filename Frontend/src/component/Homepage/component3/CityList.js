import React from 'react';
import classes from "./CityList.module.css";
import { Icon } from '@iconify/react';

const cities = [{
    id: 1,
    name: "Mumbai"
},
{
    id: 2,
    name: "Delhi"
},
{
    id: 3,
    name: "Kolkatta"
},
{
    id: 4,
    name: "Bengluru"
},
{
    id: 5,
    name: "Hydrabad"
},
{
    id: 6,
    name: "Jaypur"
},
{
    id: 7,
    name: "Raipur"
}, {
    id: 8,
    name: "Chandigarh"
},
{
    id: 8,
    name: "Pune",
},
{
    id: 9,
    name: "Jaipur",
},

{
    id: 2,
    name: "Delhi"
},
{
    id: 3,
    name: "Kolkatta"
},
{
    id: 4,
    name: "Bengluru"
},
{
    id: 5,
    name: "Hydrabad"
},
{
    id: 6,
    name: "Jaypur"
},
{
    id: 7,
    name: "Raipur"
}, {
    id: 8,
    name: "Chandigarh"
},
{
    id: 8,
    name: "Pune",
},
{
    id: 9,
    name: "Jaipur",
},
{
    id: 10,
    name: 'Jalna'
}

];



const listItems = cities.map((city) =>
    <div className={classes.link}><a className={classes.ancher} href="#">{city.name}</a></div>
);


export const Citylist = () => {

    return (
        <div>
            <div className={classes.container}>
                <h2 className={classes.title}>Cities we deliever to</h2>
                <div className={classes.column}>
                    <div className={classes.city_row}>{listItems}</div>
                </div>
                <Icon className={classes.icon} icon="fluent:food-pizza-20-regular" color="#f4f4f4" width="200" height="200" />
            </div>
        </div>
    )
}
