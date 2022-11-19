import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardFront from './components/cardfront/CardFront';
import CardBack from './components/cardback/CardBack';
import Form from "./Forms/index.js";

function App() {
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
      <Form/>
    </div>
  </div>
    </>
  );
}

export default App;
