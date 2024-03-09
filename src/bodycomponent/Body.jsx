import React from 'react'
import './Body.css'
import Crypto from '../cryptocomponent/Crypto'
import startImg from './Frame.png'
import male from './male.png'
import male1 from './male1.png'
import female from './female.png'

const Body = () => {
  return (
    <section>
        <div className='crypto'>
            <p>Cryptocurrencies</p>
            <i class="fa-solid fa-angles-right"></i>
            <h3>Bitcoin</h3>
        </div>
        <div className='body'>
        <div>
        <div>
        <Crypto/>
        </div>
        <div className='bodynav'>
            <a href="#">OverView</a>
            <a href="#">Fundamental</a>
            <a href="#">News Insights</a>
            <a href="#">Sentiments</a>
            <a href="#">Team</a>
            <a href="#">Tokenomics</a>
        </div>
        <div className='team'>
            <h3>Team</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores sint, doloremque voluptas molestias impedit quibusdam laborum unde dolorum maiores? Obcaecati, sunt nulla? Asperiores saepe consequatur voluptatum dolorem.</p>
            <div className='teamdiv'>
                <div>
                <img src={male} alt="" />
                <p>John smith</p>
                <p>Designator here</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere sunt beatae, neque laborum nobis soluta. Impedit, praesentium quasi totam quaerat repudiandae itaque delectus, soluta numquam illum, tempora ipsum quam.</p>
            </div>
            <div className='teamdiv'>
                <div>
            <img src={female} alt="" />
            <p>Elina williams</p>
            <p>Designator here</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere sunt beatae, neque laborum nobis soluta. Impedit, praesentium quasi totam quaerat repudiandae itaque delectus, soluta numquam illum, tempora ipsum quam.</p>
            </div>
            <div className='teamdiv'>
                <div>
            <img src={male1} alt="" />
            <p>John smith</p>
            <p>Designator here</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere sunt beatae, neque laborum nobis soluta. Impedit, praesentium quasi totam quaerat repudiandae itaque delectus, soluta numquam illum, tempora ipsum quam.</p>
            </div>
        </div>
        </div>
        <div className='started'>
            <h2>Get Started with koinX for FREE</h2>
            <p>With our range of features that you can equip for free, KoinX allow you to be more educated and aware of your tax reports</p>
            <img src={startImg} alt="" />
            <button>
                Get started for FREE <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
        </div>
    </section>
  )
}

export default Body