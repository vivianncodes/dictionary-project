import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h4>[{props.results.phonetic}]</h4>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
              <Synonyms />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
