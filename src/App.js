import "./App.css";
import CreateNode from "./components/CreateNode";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNode = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };

  
  return (
    <div className="App">
      <Header />
      <CreateNode passNote={addNode} />
      <div className="notes-container">
        {currentNotes
          .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)) // Pin notes at the top
          .map((val, index) => {
            return (
              <Node
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
                pinItem={onPin}
                isPinned={val.pinned}
              />
            );
          })}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <CreateNode />
      <Footer />
    </div>
  );
}

export default App;
