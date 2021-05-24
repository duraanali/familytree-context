import React, { useContext } from "react";

import Parents from "./Parents";
import Children from "./Children";

export default function FamilyTree(props) {
  return (
    <section className="FamilyTree">
      <h1>{props.family.familyName}</h1>
      <h2>Parents</h2>

      {/* Pass data down as a prop */}
      <Parents family={props.family} />

      <div className="spacer" />
      <h2>Children</h2>

      {/* Siblings will consume data from Context using render props */}
      <Children family={props.family} />
    </section>
  );
}
