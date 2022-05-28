
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Slider } from './components/Slider/Slider';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.content}>
      <Slider />
      <InfoBlock />
    </div>
  );
}

export default App;
