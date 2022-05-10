import './styles/App.scss';
import MainSection from './components/MainSection';
import Projects from './components/Projects';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <Projects />
    </div>
  );
}

export default App;
