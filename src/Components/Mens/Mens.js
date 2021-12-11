import "./Mens.css";
import ReactPlayer from "react-player";
import Item from "../Item/Item";
import { useState } from "react";

const Mens = ({videoURL, products}) => {
  const [ended, setEnded] = useState(false);

  return (
    <div className="mens-container">
      <div className="mens-banner">
        <ReactPlayer
          url={videoURL}
          playing={true}
          width={"1440px"}
          height={"700px"}
          onEnded={() => setEnded(true)}
          muted={true}
        />

        {ended && (
          <div className="banner-div">
            <h1 className="banner-heading">EFFENDI</h1>
            <h1 className="banner-subheading">INTO THE NIGHT</h1>
          </div>
        )}
      </div>
      <div className="items-container">
        {products.map((el, index) => {
          return <Item name={el.name} image={el.image} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Mens;
