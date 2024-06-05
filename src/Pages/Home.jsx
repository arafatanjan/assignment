import React from 'react';
import Banner from '../Components/home/Banner';
import Products from '../Components/home/Products';
import Accordian from '../Components/home/Accordian';
import { useLoaderData } from "react-router-dom";
import CardComponent from '../Components/home/CardComponent';


const Home = () => {
    const data = useLoaderData();
   
    return (
        <div>
            <Banner/>
            <Products data={data} />
            <Accordian/>
            <CardComponent/>
            
        </div>
    );
};

export default Home;