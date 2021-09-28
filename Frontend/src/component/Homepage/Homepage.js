import React from 'react'
import Startpage from './component1/Startpage'
import Features from './component2/Features'
import { Citylist } from './component3/CityList'
const Homepage = () => {
    return (
        <div>
            <Startpage/>
            <Features/>
            <Citylist/>
        </div>
    )
}

export default Homepage
