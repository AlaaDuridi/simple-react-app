import reactImg from "../../assets/react-core-concepts.png";
const reactDescription = ["Fundamentals", "Core", "Crucial"];
import "./Header.css";
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}
const description = reactDescription[getRandomInt(2)];
export default function Header() {
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
