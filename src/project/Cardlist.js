
import {Card,Button,DropdownButton,Dropdown} from 'react-bootstrap'



function Cardlist({el}) {

    return(
        <div className="cart">
   <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title> name : {el.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">username : {el.username}</Card.Subtitle>
    <Card.Text>
     email : {el.email}
    </Card.Text>
    <div className="drop"> 
    <DropdownButton id="dropdown-basic-button" title="Adress">
   <Dropdown.Item href="#/action-1">{el.address.street}</Dropdown.Item> 
  <Dropdown.Item href="#/action-1">{el.address.suite}</Dropdown.Item>
  <Dropdown.Item href="#/action-1">{el.address.zipcode}</Dropdown.Item>
</DropdownButton>

<DropdownButton id="dropdown-basic-button" title="info">
   <Dropdown.Item href="#/action-1">{el.phone}</Dropdown.Item> 
  <Dropdown.Item href="#/action-1">{el.website}</Dropdown.Item>
</DropdownButton>
<DropdownButton id="dropdown-basic-button" title="company">
   <Dropdown.Item href="#/action-1">{el.company.name}</Dropdown.Item> 
  <Dropdown.Item href="#/action-1">{el.company.bs}</Dropdown.Item>
</DropdownButton> 
    </div>
    

  </Card.Body>
</Card>
        </div>
    )
    
}
export default Cardlist