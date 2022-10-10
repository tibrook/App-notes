import React from "react";
import "./Note.css";
import delIcon from "./remove.svg";
import edit from "./edit.svg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Note = (props) => {
  const dispatch = useDispatch();

  const deleteNote = () => {
    dispatch({
      type: "DELETENOTE",
      payload: props.id,
    });
  };

  const modifyNote = () => {
    dispatch({
      type: "VISUALIZENOTE",
      payload: props,
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
        <Link to="/edit">
          <button onClick={modifyNote}>
            <img src={edit} alt="" />
          </button>
        </Link>
      </div>
    </li>
  );
};

export default Note;
