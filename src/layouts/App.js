import React, { useState, useRef, useEffect } from 'react';
import Spinner from '../components/Spinner';
import '../assets/styles/App.css';
import importAllImages from '../modules/importAllImages';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      Promise.all(loadImages())
        .then((values) => {
          // values.forEach((module) => {
          //   const img = <img src={module.default}></img>;
          // });
          console.log(values);
          setLoaded(true);
        })
        .catch((err) => console.log(err));
    }
    isFirstRender.current = false;
  }, []);

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

  if (!loaded) {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="App">
        {images.map((image) => (
          <img src={image.src} />
        ))}
      </div>
    );
  }
};

export default App;
