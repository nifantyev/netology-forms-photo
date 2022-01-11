import './App.css';
import PhotoSelector from './components/PhotoSelector';

function App() {
  const handleSelected = (dataUrls) => {
    console.log(dataUrls);
  };
  return <PhotoSelector onSelected={handleSelected} />;
}

export default App;
