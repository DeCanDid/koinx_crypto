import React from 'react';
import './Background.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Background = () => {
    const [displayChart, setdisplayChart] = useState([]);
    let endPoint = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true';
     
    axios.get(endPoint).then((res) =>{
        console.log(res.data);
    });

    useEffect(() => {
    // setdisplayChart()
   
    }, [])
    
    
  return (
    <>

        <main>
            <section className='bigCol'>
                <div>
                    <p>Cryptocurrencies <b>Bitcoin</b></p>
                </div>

                <div>
                    {
                        displayChart.map((dat) =>(
                            <>
                                <p>{dat.inr}</p>
                                <p>{dat.inr_24h_change}</p>
                                <p>{dat.usd}</p>
                                <p>{dat.inr_24h_change}</p>
                            </>
                        ))
                    }
                </div>
            </section>
        </main>
    </>
  )
}

export default Background