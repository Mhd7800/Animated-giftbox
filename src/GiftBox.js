import React, { useState } from "react";
import "./GiftBox.css";

const GiftBox = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleBoxClick = () => {
    setIsOpened(true);
  };

  return (
    <div className="gift-container">
      <h3 className="text-center text-light my-5">
        
      </h3>
      <div className={`box ${isOpened ? "opened" : ""}`} onClick={handleBoxClick}>
        <div className="box-body">
          <div className="box-lid">
            <div className="box-bowtie"></div>
          </div>
        </div>
        {isOpened && (
          <div className="box-message">
            <span>Yeni işinde bol şans ve başarılar dilerim!</span>
          </div>
        )}
      </div>
      <strong>Open me!</strong>
    </div>
  );
};

export default GiftBox;
