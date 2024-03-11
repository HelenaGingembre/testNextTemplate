"use client";
import styles from "../../styles/FilterListButton.module.css";
import { ArrButtons } from "../../../types";
import { useEffect, useState } from "react";

// const buttons: ArrButtons[] = [
const buttons = ["All", "JS, React, Next", "LandingPage", "Wordpress", "YII2"];

const FilterListButton = () => {
  const [buttons, setButtons] = useState<ArrButtons[]>([]);
  //   useEffect(() => {}, []);
  // <div className="toggles center">
  //   <button id="showall">Show All</button>
  //   <button id="webwordpress">Wordpress</button>
  //   <button id="webdev">Yii2 Framework</button>
  //   [<button id="graphd">Landing Page</button>
  // </div>
  return (
    <ul className={styles.filter_list}>
      {buttons.map((item, idx) => {
        return (
          <li key={Date.now()} className="p-4">
            <button className="btn-green flex gap-2" type="button" id="showall">
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterListButton;
