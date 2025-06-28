import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery'; // ✅ add this line
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <Home />
        <Gallery /> {/* ✅ Add this here */}
      </div>

      <Footer />
    </>
  );
}

export default App;
