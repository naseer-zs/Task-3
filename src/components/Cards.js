import React from "react";
import "../css/main.css";
import vector from "../assets/vector.png";
import secound from "../assets/secound.png";
import third from "../assets/third.png";
const Cards = () => {
  return (
    <div>
      <div className="cards-container" style={{height:'200px', marginBottom:'20px'}}>
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#7C5CFC",
            color: "white",
            height: "110px"
          }}
        >
          <div>
            <div style={{marginTop:'-5px', fontSize:'18px',fontWeight:'600',color:'#E5EEF'}}> 
              {" "}
              <p>Total Sales</p>
            </div>
            <div style={{fontWeight:'600',marginTop:'-12px', fontSize:'600', fontSize:'26px'}}>
              <h2 style={{marginTop:'-4px', letterSpacing:'-3px'}}>$104 K</h2>
            </div>
          </div>
          <div>
            <img
              src={vector}
              style={{
                backgroundColor: "",
                paddingTop: "30px",
                width: "80px",
                paddingBottom: "30px",
                paddingLeft: "0px",
                paddingRight: "0px",
                height:'62px',
                width:'62px'
              }}
              alt="vector"
            />
          </div>
        </div>
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#191E2A",
            color: "white",
            height: "110px"
          }}
        >
          <div>
            <div style={{marginTop:'-5px', fontSize:'18px',fontWeight:'600',color:'white'}}> 
              {" "}
              <p>Total Products</p>
            </div>
            <div style={{fontWeight:'600',marginTop:'-12px', fontSize:'600', fontSize:'26px'}}>
              <h2 style={{marginTop:'-4px'}}>500 <span style={{fontSize:'30px',fontWeight:'600', marginLeft:'-10px'}}>+</span></h2>
            </div>
          </div>
          <div>
            <img
              src={secound}
              style={{
                backgroundColor: "",
                paddingTop: "30px",
                width: "80px",
                paddingBottom: "30px",
                paddingLeft: "0px",
                paddingRight: "0px",
                height:'62px',
                width:'62px'
              }}
              alt="vector"
            />
          </div>
        </div>
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#7C5CFC",
            color: "white",
            height: "110px"
          }}
        >
          <div>
            <div style={{marginTop:'-5px', fontSize:'18px',fontWeight:'600',color:'#E5EEF'}}> 
              {" "}
              <p>Total Categories</p>
            </div>
            <div style={{fontWeight:'600',marginTop:'-12px', fontSize:'600', fontSize:'26px'}}>
              <h2 style={{marginTop:'-4px'}}>20+</h2>
            </div>
          </div>
          <div>
            <img
              src={third}
              style={{
                backgroundColor: "",
                paddingTop: "30px",
                width: "80px",
                paddingBottom: "30px",
                paddingLeft: "0px",
                paddingRight: "0px",
                height:'62px',
                width:'62px'
              }}
              alt="vector"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
