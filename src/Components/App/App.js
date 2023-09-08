import './App.css';
import moon from '../../Images/moon.png'
import leftTrees from '../../Images/left-trees.png'
import rightTrees from '../../Images/right-trees.png'
import mountain1 from '../../Images/m1.png'
import mountain2 from '../../Images/m2.png'
import mountain3 from '../../Images/m3.png'
import mountain4 from '../../Images/m4.png'
import mountain5 from '../../Images/m5.png'

function App() {
  return (
    <div className="App">
        <div className='moon-container'>
          <img className="moon" src={moon} />
        </div>
        <img className='mountain1' src={mountain1} />
        <img className='mountain2' src={mountain2} />
        <img className='mountain3' src={mountain3} />
        <img className='mountain4' src={mountain4} />
        <img className='mountain5' src={mountain5} />
        <img className='left-trees' src={leftTrees} />
        <img className='right-trees' src={rightTrees} />
    </div>
  );
}

export default App;
