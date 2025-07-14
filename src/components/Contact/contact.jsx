import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'

const Contact = () => {
  return (
    <section id="contactPage">
        <div className="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, hic ullam eius accusamus facilis eligendi quam nemo ratione ab!</p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                {/* <img src={Facebook} alt="" className="clientImg" />  */}
            </div>
        </div>
        <div className="contact">

        </div>
    </section>
  )
}

export default Contact;