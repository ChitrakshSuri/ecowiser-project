import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function Node(props) {
  const deleteNode = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className="Node">
      <h1>{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <button className="btn" onClick={deleteNode}>
        <DeleteOutlineIcon className="deleteIcon"></DeleteOutlineIcon>
      </button>
    </div>
  );
}

export default Node;
