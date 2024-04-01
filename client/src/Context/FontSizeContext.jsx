import React, { createContext, useContext, useState } from 'react';

const FontSizeContext = createContext();
export const FontSizeProvider = ({ children }) => {
  const [textSize, setTextSize] = useState(16);
  const [lineSpacing, setLineSpacing] = useState('normal');
  const [wordSpacing, setWordSpacing] = useState('normal');
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [whiteContrast, setWhiteContrast] = useState(false);
  const [negativeContrast, setNegativeContrast] = useState(false);

  const increaseTextSize = () => setTextSize(prevSize => prevSize + 2);
  const increaseLineSpacing = () => setLineSpacing('1.5');
  const increaseWordSpacing = () => setWordSpacing('0.2em');
  const toggleGrayscale = () => setGrayscale(prevValue => !prevValue);
  const toggleHighContrast = () => setHighContrast(prevValue => !prevValue);
  const toggleWhiteContrast = () => setWhiteContrast(prevValue => !prevValue);
  const toggleNegativeContrast = () => setNegativeContrast(prevValue => !prevValue);
  const resetAll = () => {
    setTextSize(16);
    setLineSpacing('normal');
    setWordSpacing('normal');
    setGrayscale(false);
    setHighContrast(false);
    setWhiteContrast(false);
    setNegativeContrast(false);
  };

  return (
    <FontSizeContext.Provider
      value={{
        textSize,
        lineSpacing,
        wordSpacing,
        grayscale,
        highContrast,
        whiteContrast,
        negativeContrast,
        increaseTextSize,
        increaseLineSpacing,
        increaseWordSpacing,
        toggleGrayscale,
        toggleHighContrast,
        toggleWhiteContrast,
        toggleNegativeContrast,
        resetAll,
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
};
export const useFontSize = () => useContext(FontSizeContext);