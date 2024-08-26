import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <p>
        <em>{props.meaning.example}</em>
      </p>
      <Synonyms synonyms={synonym} />
    </div>
  );
}
