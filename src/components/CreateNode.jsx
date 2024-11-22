import React, { useState } from "react";
import "./CreateNode.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CreateNode(props) {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const addEvent = (event) => {
    event.preventDefault(); // Prevent default form submission
    props.passNote(note); // Pass the note to the parent component
    setNote({
      title: "",
      content: "",
    }); // Clear the inputs
  };
  const expandIt = () => {
    setExpand(true);
  };
  const backToNormal = () => {
    setExpand(false);
  };
  return (
    <div className="main_node" onDoubleClick={backToNormal}>
      <form>
        {expand ? (
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
        ) : null}
        <textarea
          name="content"
          rows="4"
          cols="30"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write a note..."
          onClick={expandIt}
        ></textarea>
        {expand ? (
          <Button onClick={addEvent}>
            <AddIcon className="plus-sign" />
          </Button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateNode;
