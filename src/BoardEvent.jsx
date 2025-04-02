import React from 'react';
import styled from 'styled-components'
const Container = styled.div`
width:400px;
height:600px;
background-color:#FFB27F;
`
function ColorText(){
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random()*256);
const b = Math.floor(Math.random()*256);
return `rgb(${r},${g},${b})`;
}
const Text = styled.p`
 font-size:24px;
 color: ${ColorText()};
`
const Img = styled.img`
   width:150px;
   height:150px;
`
class BoardEvents extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         name:"",
         location:"",
         img:"",
        start:""
      }

   }
   componentDidMount(){
      this.setState({
         name:"Concert 1: The Greatest Show",
         location: "Kyiv, Ukraine",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HfwMeOUkJ1IRa4Eb2hp201oFG4v-dowi9A&s",
         start: "2025-06-10 21:00"
      })

   }
   render(){
      const {name,location,img,start} = this.state
      return(
        <Container>
      <Text>Name:{name}</Text>
      <Text>Location:{location}</Text>
      <Img src={img} alt={name} />
      <Text>Start:{start}</Text>
      
        </Container>
      )
   }
}
export default BoardEvents;