import React from "react";
import "./CreateNode.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CreateNode() {
  return (
    <>
      <div className="main_node">
        <form action="">
          <input type="text" placeholder="Title" autoComplete="off" />
          <textarea
            name=""
            id=""
            rows=""
            column=""
            placeholder="Write a note..."
          ></textarea>
          <Button>
            <AddIcon className="plus-sign" />
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateNode;
