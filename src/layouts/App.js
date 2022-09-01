import React, { useState, useRef, useEffect } from 'react';
import Header from '../sections/Header';
import Game from '../sections/Game';
import Spinner from '../components/Spinner';
import '../assets/styles/App.css';
import importAllImages from '../modules/importAllImages';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      Promise.all(loadImages())
        .then(() => {
          setLoaded(true);
        })
        .catch((err) => console.log(err));
    }
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    const createInitialData = () => {
      const initialData = [];
      images.forEach((image) => {
        const imageSource = image.src;
        const nameRaw = imageSource.split('media/').pop().split('.')[0];
        const nameSplit = nameRaw.split('-');
        const nameUpperCase = nameSplit.map(
          (word) => word.charAt(0).toUpperCase() + word.substring(1)
        );
        const name = nameUpperCase.join(' ');
        initialData.push({ name, image, clicked: false });
      });
      return initialData;
    };
    if (loaded) {
      setData(createInitialData());
    }
  }, [loaded, images]);

  const loadImages = () => {
    const importedImages = importAllImages();
    return importedImages.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setImages((oldArray) => [...oldArray, img]);
          resolve(image);
        };
        img.src = image;
      });
    });
  };

  const shuffleData = (data) => {
    let oldData = data;
    let newData = [];
    for (let i = data.length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      newData.push(oldData[randomIndex]);
      oldData.splice(randomIndex, 1);
    }
    return newData;
  };

  const handleCardClick = (event) => {
    const name = event.target.textContent;
    let newData = data.map((item) => {
      return { ...item };
    });
    const index = newData.findIndex((x) => x.name.localeCompare(name) === 0);
    console.log(index);
    if (index >= 0 && !newData[index].clicked) {
      console.log('yo');
      newData[index].clicked = true;
      setScore(score + 1);
    } else if (index >= 0 && newData[index].clicked) {
      console.log('yo2');
      newData = newData.map((item) => {
        return { ...item, clicked: false };
      });
      if (topScore < score) {
        setTopScore(score);
      }
      setScore(0);
    }
    setData(shuffleData(newData));
  };

  if (!loaded) {
    return (
      <div className="App loading">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header score={score} topScore={topScore} />
        <Game handleCardClick={handleCardClick} data={data} />
      </div>
    );
  }
};

export default App;
