import './App.css';
import Header from './components/Header'; 
import Details from './components/Details';
import Product from './components/Product';

function App() {
  return (
    <section>
      <div className='container'>
        <Header />
        <div className='content-container'>
          <Details />
          <Product />
        </div>
      </div>
    </section>
  );
}

export default App;
