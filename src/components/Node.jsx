import "./Node.css";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PinIcon from "@mui/icons-material/PushPin";

function Node(props) {
  const deleteNode = () => {
    props.deleteItem(props.id);
  };

  const pinNode = () => {
    props.pinItem(props.id);
  };

  return (
    <div className="Node">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="btn-container">
        <button className="btn pin-btn" onClick={pinNode}>
          <PinIcon className={`pinIcon ${props.isPinned ? "pinned" : ""}`} />
        </button>
        <button className="btn" onClick={deleteNode}>
          <DeleteOutlineIcon className="deleteIcon" />
        </button>
      </div>
    </div>
  );
}

export default Node;
