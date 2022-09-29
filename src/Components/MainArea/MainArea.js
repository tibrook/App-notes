import React from "react";
import { useState, useEffect, useRef } from "react";
const MainArea = () => {
  return (
    <div className="container-content">
      <h2>Ecrire une note</h2>
      <form>
        <label htmlFor="title">Le titre</label>
        <input type="text" id="title" />

        <label htmlFor="subtitle">Sous-titre</label>
        <input type="text" id="subtitle" />

        <label htmlFor="txtbody">Votre Texte</label>
        <textarea id="txtbody" placeholder="Votre texte ... "></textarea>
      </form>
    </div>
  );
};

export default MainArea;
