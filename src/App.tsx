import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.tsx";
import CoreConcepts from "./components/CoreConcepts.tsx";
import TabButton from "./components/TabButton.tsx";

function App() {
  let tabContent = "Please click a button";
  const handleSelect = (selectedButton: string) => (): void => {
    console.log("Selected button: ", selectedButton);
    tabContent = selectedButton;
    console.log(tabContent);
  };
  console.log("APP COMPONENT");
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={true} onClick={handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isActive={false} onClick={handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton isActive={false} onClick={handleSelect("props")}>
              Props
            </TabButton>
            <TabButton isActive={false} onClick={handleSelect("state")}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
