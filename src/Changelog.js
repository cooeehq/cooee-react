import React from "react";

const Changelog = ({ entries }) => {
  return (
    <div className="changelog">
      {entries.map((entry, index) => (
        <div key={index} className="changelog-entry">
          <h2>{entry.title}</h2>
          <p>{entry.description}</p>
          <span>{entry.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default Changelog;
