import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Header from './Header';
import Navbar from './Navbar';

const All = () => {
    const allData = useLoaderData();
    const [allCard, setAllCard] = useState([]);
   
    


    
    return (
        <div>
           <Header></Header>
           <h2 className="text-gray-500 text-center my-4">
            Find Your Perfect Guide
          </h2>
          <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allData.map((card) => <Card card={card} key={card.id}></Card>)
                }
            </div>
        </div>
    );
};

export default All;