import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Note from "./Note/Note";
import "./SideNotes.css";
const SideNotes = () => {
  const { notes } = useSelector((state) => state.notesReducer);
  const [notesList, setNotesList] = useState();

  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  const preventForm = (e) => e.preventDefault();
  const handleFilter = (e) => {
    const stateCopy = [...notes];
    const filteredArr = stateCopy.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setNotesList(filteredArr);
  };
  return (
    <div className="notes-display">
      <h2>Mes notes </h2>
      <form onSubmit={preventForm}>
        <input
          type="text"
          onChange={handleFilter}
          id="search-notes"
          placeholder="Rechercher"
        />
      </form>
      <ul className="notes-list">
        {notesList &&
          notesList.map((item) => (
            <Note
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              body={item.body}
            />
          ))}
      </ul>
    </div>
  );
};

export default SideNotes;
