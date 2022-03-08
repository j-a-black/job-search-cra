import React from "react";

const Card = ({ item }) => {
  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="header">
          {item.MatchedObjectDescriptor.PositionTitle}
        </div>
        <div className="meta">
          Posted: {item.MatchedObjectDescriptor.PublicationStartDate}
        </div>
        <span className="block">
          {item.MatchedObjectDescriptor.PositionLocation[0].LocationName}
        </span>
        <span>{item.MatchedObjectDescriptor.PositionLocation[0].Latitude}</span>
        <span>
          {item.MatchedObjectDescriptor.PositionLocation[0].Longitude}
        </span>
        <div className="description">
          {item.MatchedObjectDescriptor.UserArea.Details.JobSummary}
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
