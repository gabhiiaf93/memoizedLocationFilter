import React from "react";

function AlphabetList({ alphabets }) {
  const listItems = alphabets.map((alphabet) => (
    <div key={alphabet}>{alphabet}</div>
  ));
  return <ul>{listItems}</ul>;
}

export default AlphabetList;
