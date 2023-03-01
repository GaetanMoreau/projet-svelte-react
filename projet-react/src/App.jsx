import Header from "./lib/Header";
import Item from "./lib/Item";
import "./App.css";
import games from "./data/games.json"

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="game__header">Buy your games cheaper here !</section>
        <section className="games__container">
          <div className="container">
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
