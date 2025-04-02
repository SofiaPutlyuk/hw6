import events from './json/upcoming-events.json'
import './App.css';
import Events from './components/Events';
import styled from 'styled-components';
import Footer from './components/Footer'
import BoardEvents from './components/BoardEvent';
const Conatainer = styled.div`
width:100%;
height:100%;
/*background-color: #CBC3E3;
border:0.2cm solid blueviolet;*/
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:20px;
padding:20px;

`

const ContainerGap = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:20px;
flex-direction:column;
`
const ContainerText = styled.div`
width:1200px;
height:100px;
background-color:#CBC3E3;
border:0.1cm solid blueviolet;

`
const MainText = styled.p`
    font-size:20px;
    text-align:center;
`
function App() {
  return (
    <div className="App">
       <ContainerGap>
       <ContainerText>
<MainText>24th  Core Worlds Coalition Conference</MainText>
  </ContainerText>
       <Conatainer>
{events.map((elem, index) => (
  <Events key={index} event={elem} />
))}
  <BoardEvents />
  </Conatainer>
  </ContainerGap>
  <Footer />
    </div>
  );
}

export default App;
