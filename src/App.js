import { useState } from "react";
import "./App.css";
import CreateNode from "./components/CreateNode";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Node from "./components/Node";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNode = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <div className="App">
      <Header />
      <CreateNode passNote={addNode} />
      {addItem.map((val, index) => {
        return (
          <Node
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
