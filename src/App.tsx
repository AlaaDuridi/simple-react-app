import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  return (
    <>
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
