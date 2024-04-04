import About from "../components/About";
import Benefit from "../components/Benefit";
import Features from "../components/Features";
import Header from "../components/Header";
import Offers from "../components/Offers";
import Subscribed from "../components/Subscribed";
import { useFontSize } from '../Context/FontSizeContext';

export default function Home() {
  const { textSize, lineSpacing, wordSpacing, grayscale, highContrast, whiteContrast, negativeContrast } = useFontSize();

  return (


    <>
      <div className={`${grayscale ? "grayscale" : ""} ${highContrast ? "high-contrast" : ""} ${whiteContrast ? "white-contrast" : ""} ${negativeContrast ? "negative-contrast" : ""}   my-6 overflow-hidden bg-white `} style={{
        fontSize: `${textSize}px`, lineHeight: lineSpacing, wordSpacing: wordSpacing,
      }}>
        <div className=" my-6 ">
          <Header />
        </div>
        <div className="padding-x  padding-y 2xl:max-w-[1800px] 2xl:m-auto">
          <About />
          <Offers />
        </div>
        <div>
          <Benefit />
        </div>
        <div className="padding-x  padding-y 2xl:max-w-[1800px] 2xl:m-auto">
          <Features />
        </div>
        <div>
          <Subscribed />

        </div>

      </div>
    </>
  )
}