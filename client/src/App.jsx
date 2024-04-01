import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AccessTool from './components/AccessTool';
import { FontSizeProvider } from './Context/FontSizeContext';
import About from './components/About';
import Blog from './Pages/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <FontSizeProvider>
      <div className="">
        <AccessTool />
        <Router>
          <Navbar /> 
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/blog">
              <Blog/>
            </Route>
           
          </Switch>

          <div className='padding-x  padding-y 2xl:max-w-[1800px] 2xl:m-auto'>
          <Footer/>
          </div>
        </Router>
      </div>
    </FontSizeProvider>
  );
}

export default App;