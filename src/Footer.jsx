import styled from 'styled-components';
import Headphones from '../image/headphones.png'
const Container = styled.footer`
width:100%;
height:100%;
background-color:#FFB27F;
`
const FooterText = styled.div`
font-size:43px;
font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
 text-align:left;
padding-top:20px;
 margin-left:20px;
 font-weight:bold;
`
const Image = styled.img`
width:400px;
height:200px;
`
const Footer = () => {
return(
   <Container>
<FooterText>FIND YOUR MUSIC</FooterText>
<Image src={Headphones} alt="headphones"/>
   </Container>
)
}
export default Footer;