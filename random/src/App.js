import React, { useRef, useState } from "react";
import Wrapper from "./UserInterface/Wrapper/Wrapper";
import Image from "./Components/Image/Image";
import Button from "./Components/Button/Button";
import Card from "./UserInterface/Card/Card";
import Text from "./Components/Text/Text";
import List from "./Components/List/List";
import ListItem from "./Components/ListItem/ListItem";
function App() {


const [user, setUser] = useState({});


const randomUser = () => {
fetch("https://randomuser.me/api/")
.then(data => data.json())
.then(result => {
  console.log(result)
  setUser({
    gender: result.results[0].gender,
    cell: result.results[0].cell,
    email: result.results[0].email,
    name: result.results[0].name.first,
    picture: result.results[0].picture.large,
  });
})
}


  return (
    <Wrapper>
    <Card>
    <Text>Find User</Text>
    
   <Button onClick={randomUser}>click me</Button>
    </Card>  
    <List>
      {
        user.gender && <ListItem>
          <Text>gender: {user.gender}</Text>
          <br></br>
          <Text> cell: {user.cell} </Text>
          <br></br>
          <Text> email: {user.email} </Text>
          <br></br>
          <Text> name: {user.name} </Text>
          <br></br>
          <Image src={user.picture}/>
          <br></br> 
        </ListItem>
      }
    </List>
   
    </Wrapper>
  );
}

export default App;
