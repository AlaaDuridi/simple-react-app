import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescription = ["Fundamentals", "Core", "Crucial"];

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}
const description = reactDescription[getRandomInt(2)];

interface CoreConceptsProps {
  image: string;
  title: string;
  description: string;
}
function CoreConcepts({ image, title, description }: CoreConceptsProps) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
export function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts {...concept} />
            ))}
            ;
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
