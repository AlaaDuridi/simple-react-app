import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.tsx";
import CoreConcepts from "./components/CoreConcepts.tsx";
import TabButton from "./components/TabButton.tsx";

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

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton isActive={true} onClick={() => console.log("hi")}>
              Components
            </TabButton>
            <TabButton isActive={false} onClick={() => console.log("hi")}>
              JSX
            </TabButton>
            <TabButton isActive={false} onClick={() => console.log("hi")}>
              Props
            </TabButton>
            <TabButton isActive={false} onClick={() => console.log("hi")}>
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
