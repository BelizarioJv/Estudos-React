import WelcomeMessage from "./components/Title/message.jsx";
import ListTasks from "./components/Title/ListTasks.jsx";
import Img from "./components/Title/Body.jsx";
import styles from "./styles/App.module.css";

export default function App() {
  const status = true;
  return (
    <div className={styles.container}>
      <Img />
      <WelcomeMessage />
      <ListTasks />
      {status ? <p>O status é verdadeiro</p> : <p>O status é falso</p>}
    </div>
  );
}
