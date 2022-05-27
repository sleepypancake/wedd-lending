
import { InfoBlock } from './components/InfoBlock/InfoBlock';
import { Slider } from './components/Slider/Slider';
import styles from './App.module.scss'
import { useState } from 'react';
import { debounce } from './utils/helpers/useDebounce';

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const setActiveSlideCard = (id) => {
    // debounce(() => {
      console.log(id)
      setActiveSlide(id)
    // }, 10)
  }

  return (
    <div className={styles.content}>
      <Slider activeId={activeSlide}/>
      <InfoBlock setActiveSlideCard={setActiveSlideCard}/>
    </div>
  );
}

export default App;
