import About from "../components/About";
import Benefit from "../components/Benefit";
import Features from "../components/Features";
import Header from "../components/Header";
import Offers from "../components/Offers";
import Subscribed from "../components/Subscribed";


export default function Home() {
  return (

    <>
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
     <Features/>
      </div>
       <div> 
        <Subscribed/>

       </div>
       
    </>
  )
}