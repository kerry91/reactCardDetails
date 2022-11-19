import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardFront from './components/cardfront/CardFront';
import CardBack from './components/cardback/CardBack';
import Complete from './components/complete/Complete';
import Form from "./Forms/index.js";

function App() {

  const handleVisibility = event => {

    setIsVisible(current => !current);
  };
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <>
  <div class="row ">
    <div class="left-col col-lg-4 col-sm-12">
      <div class="col-lg-4 col-sm-12 offset-xl-6 offset-md-1">
      <CardFront/>
      </div>
      <div class="col-lg-4 col-sm-12 offset-xl-8 offset-md-2">
      <CardBack/>
      </div>
    </div>
    <div class="right-col col-xl-8 col-lg-8 col-sm-12 offset-xl-0">
      <div className='form-panel' style={{visibility: isVisible ? 'visible' : 'hidden'}}>
      <Form />
      
      </div>
      <div className='complete-panel' style={{visibility: isVisible ? 'hidden' : 'visible'}}>
      <Complete/>
      </div>
      {handleVisibility}
      {/*<button onClick={handleVisibility}>Toggle visibility</button>*/}
    </div>
  </div>
    </>
  );
}

export default App;
