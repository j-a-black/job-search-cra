import React from "react";

const Card = () => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Cute Dog</div>
        <div className="meta">2 days ago</div>
        <div className="description">
          <p>
            Cute dogs come in a variety of shapes and sizes. Some cute dogs are
            cute for their adorable faces, others for their tiny stature, and
            even others for their massive size.
          </p>
          <p>
            Many people also have their own barometers for what makes a cute
            dog.
          </p>
        </div>
      </div>
      <div className="extra content">
        <i className="check icon"></i>
        121 Votes
      </div>
    </div>
  );
};

export default Card;
