import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <h1>Grammer checker</h1>
        <div className="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <button>Convert Past Tense</button>
        <button>Spell Checker</button>
      </div>
    </div>
  );
}

export default App;
