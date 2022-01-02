import React from 'react'
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <Banner/>

            <div className='home_section'>
                <Card
                   src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                   title="Online Experience"
                   description="Unique activities we can do together,led by a world of hosts."
                />
                <Card
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12513/production/_102872057_2e288c82-4448-4083-808f-a71f1c1f37f5.jpg"
                    title="Online Experience"
                    description="Unique activities we can do together,led by a world of hosts."
                />
                <Card
                    src="https://misstourist.com/wp-content/uploads/2021/03/0_Best-rentals-in-Ocean-City-Maryland.jpg"
                    title="Online Experience"
                    description="Unique activities we can do together,led by a world of hosts."
                />
            </div>

        </div>
    )
}

export default Home
