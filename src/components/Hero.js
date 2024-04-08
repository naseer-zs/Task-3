import React from 'react';
import '../css/style.css';
import group from "../assets/combined.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";

const Hero = () => {
  return (
    <div className='mainContent' style={{minHeight:'700px'}}>
      <div className='heading' style={{ fontSize:'52px'}}>
        <h2 style={{textAlign:'center', fontWeight:'500',}}>
          All your business <br/> expenses in one place. 
        </h2>
        <p className='subHeading' style={{textAlign:'center', fontSize:'28px', marginTop:'-30px', color:'#90A3BF', lineHeight:'32px', wordSpacing:'-6px'}}>
          Your one-stop finance empower platform. <br/>
          Manage all your business expenses with our Producto app.
        </p>
      </div>
    
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'20px' }}>
        <button className='btn' onClick={()=>alert("Sell Iniated")}>Create Sell</button>
      </div>
    </div>
  )
}

export default Hero;
