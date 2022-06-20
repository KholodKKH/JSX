import logo from './logo.svg';
import './App.css';
import "./style.css";
import mageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
 <div style={{ border: "solid 1px black", maxWidth : "100vw" }}>
<h1 className ="title red">MALDIVES</h1>
<br/>
<img src={mageInSrc} />
<br/>
<img src="/imageInPublic.jpg" />
</div>
<br/>
<iframe width="683" height="384" src="https://www.youtube.com/embed/cnXUkKP5IUc" title="Review of PATINA MALDIVES Fari Islands by ADORE Maldives [4K]" frameborder="0" allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    );
}

export default App;
