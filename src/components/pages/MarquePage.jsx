import React from 'react'
import stars from "../Multimedia/images/star.svg";


const MarquePage = () => {
  return (
    <div>
        <div className="marquee-container">
        <div className="marquee">
          <marquee behavior="" direction="">
            <img src={stars} alt="" />{" "}
          </marquee>
        </div>
      </div>
    </div>
  )
}

export default MarquePage