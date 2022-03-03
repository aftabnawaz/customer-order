import React from "react";
import "./label.scss";
export default function Label({ label, flag }) {
  const cssClass = `label ${label}`.toLowerCase();
  return (
    <div className={cssClass}>
      {label}
      {flag && 
        <div className="flag">
          <img className="icon" src="./icons/upsell.svg" alt="" />
        </div>
      }
    </div>
  );
}
