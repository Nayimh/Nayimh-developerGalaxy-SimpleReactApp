// import section
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div >
      {/* header component */}
      <Header></Header>
      {/* main cart component */}
      <Main></Main>
      {/* footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
