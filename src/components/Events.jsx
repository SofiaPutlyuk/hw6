import styled from 'styled-components';
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiCalendarEventLine } from "react-icons/ri";
import { TbClockFilled } from "react-icons/tb";
const Card = styled.div`
width:300px;
height:400px;
background-color:#FFDBBB;
padding:10px;
border-radius:20px;
display: flex;
flex-direction: column;
`
const NameText = styled.p`
text-align:left;

`

const Events = ({event}) => {
    const startDate = new Date(event.time.start);
    const endDate = new Date(event.time.end);
return(

  <Card>
<NameText> {event.name}</NameText>
<NameText> <FaLocationDot />{event.location}</NameText>
<NameText> <FaUser /> {event.speaker}</NameText>
<NameText> <RiCalendarEventLine /> {startDate.toLocaleDateString()}</NameText>
<NameText> <TbClockFilled /> {startDate.toLocaleTimeString()} - {endDate.toLocaleTimeString()}</NameText>
  </Card>

)
}
export default Events;