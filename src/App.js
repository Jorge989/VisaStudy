import logo from './assets/card.svg';
import credit from './assets/21.svg';
import './App.css';
import {Container, Header,Section}from './styles';
function App() {
  return (
    <Container>

  <Header>
        <div className="headerdiv">

      
        <img src={logo} className="App-logo" alt="logo" />
        <div className="nav-link">
        <p>Features</p>
        <p>Pricing</p>
        <p>About</p>
        <button className="btn-signup">
          Sign up
        </button>
        </div>
        </div>
        </Header>
        <Section>

<div className="bluecircle">
  <div className="rosedivblue">

  </div>
  <div className="grrendivblue">

</div>
 <img src={credit} color="visa"></img> 
</div>

</Section>
<div className="Money-text">
<h1 className="moneyh1">Money<br/> really does<br/> grow on <br/>trees.<br/> Really!</h1>
</div>
<div className="btns-aplication">
<button className="singup">
Sign up 
</button>
<button  className="explore">
Explore
</button>
<div className="purplediv">

</div>
<div className="rosediv">

</div>
</div>
    </Container>
  );
}

export default App;
