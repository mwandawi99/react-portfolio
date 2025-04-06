import logo from './logo.svg';
import './App.scss';

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
