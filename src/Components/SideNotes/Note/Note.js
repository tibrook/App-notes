import React from "react";
import "./Note.css";
import delIcon from "./remove.svg";
import edit from "./edit.svg";
import { useDispatch } from "react-redux";
const Note = (props) => {
  const dispatch = useDispatch();

  const deleteNote = (id) => {
    dispatch({
      type: "DELETENOTE",
      payload: props.id,
    });
  };
  return (
    <li className="txt-note-prev">
      <div className="bloc-note-left">
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </div>
      <div className="bloc-note-right">
        <button onClick={deleteNote}>
          <img src={delIcon} alt="delete icon" />
        </button>
        <button>
          <img src={edit} alt="" />
        </button>
      </div>
    </li>
  );
};

export default Note;
