import './App.css';
import Header from './containers/Header';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; 
import ProductDetail  from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes> 
          <Route path='/' element={<ProductListing />} /> 
          <Route path='/product/:productId' element={<ProductDetail />} /> 
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

function NotFound() {
  return <div>404 Not Found</div>;
}

export default App;
