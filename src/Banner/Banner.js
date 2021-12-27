import React from 'react'
import "./Banner.css";
import { Button } from '@material-ui/core';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner_info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Explore yourself along with the World, travel to new places Be a TRAVELLER.</h5>
                <Button
                variant='outlined'>Destination Near Me</Button>
            </div>

        </div>
    )
}

export default Banner
