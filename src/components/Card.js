import React from "react";
import vector from "../assets/vector.png";
const Card = () => {
  return (
    <div className="cardContainer" style={{padding:'0 30px', height:'500px'}}> 
      <div
        className="first"
        style={{
          height: "156px",
          borderRadius:'24px',
          width: "384px",
          backgroundColor: "#7C5CFC",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <div>
          <div style={{ color: "white", marginTop: "40px" }}>Total Sales </div>
          <div>
            <h2
              style={{
                fontSize: "34px",
                fontWeight: "400",
                color: "white",
                fontWeight: "500",
                maginTop: "-10px",
              }}
            >
              $ 104K
            </h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <img src={vector} />
        </div>
      </div>
     
    </div>
  );
};

export default Card;
