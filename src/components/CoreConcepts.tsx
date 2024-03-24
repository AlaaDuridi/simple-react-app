import CoreConcept from "./CoreConcept.tsx";
import { CORE_CONCEPTS } from "../data.ts";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept {...concept} key={index} />
        ))}
      </ul>
    </section>
  );
}
