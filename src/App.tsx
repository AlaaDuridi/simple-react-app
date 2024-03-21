import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.tsx";
import CoreConcepts from "./components/CoreConcepts.tsx";

function App() {
  return (
    <>
      <header>
        <h1>Heelo World</h1>
      </header>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts {...concept} key={index} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
