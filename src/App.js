import './App.css';
import Gallery from './components/Gallery';

function App() {
  const images = [
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/10/27/03/37/road-6745746_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/03/16/13/road-5710320_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/08/16/57/road-5724397_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/10/27/03/37/road-6745746_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/03/16/13/road-5710320_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/08/16/57/road-5724397_1280.jpg"
  ]
  return (
    <div className="App">
      <h1 className="title">Masonry Gallery</h1>
      <p className="subtitle">Highly flexible React component for galleries made with Swiper</p>
      <Gallery images={images} navigation={true} />
    </div>
  );
}

export default App;
