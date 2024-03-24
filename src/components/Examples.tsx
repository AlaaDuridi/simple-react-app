import TabButton from "./TabButton.tsx";
import { useState } from "react";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("PLease select a topic");
  function handleSelect(selectedButton: string): void {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please Slect a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>
          {/* type assertion */}
          {EXAMPLES[selectedTopic as keyof typeof EXAMPLES]?.title ||
            selectedTopic}
        </h3>
        <p>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES]?.description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES]?.code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isActive={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isActive={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isActive={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isActive={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
