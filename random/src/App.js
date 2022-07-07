import React, { useRef, useState } from "react";
import Wrapper from "./UserInterface/Wrapper/Wrapper";
import Image from "./Components/Image/Image";
import Button from "./Components/Button/Button";
import Card from "./UserInterface/Card/Card";
import Text from "./Components/Text/Text";
import List from "./Components/List/List";
import ListItem from "./Components/ListItem/ListItem";
import Center from "./Components/Center/Center";
import classes from "./UserInterface/Global.module.css";
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
      <Center className={classes.container}>
        
    <Card className={classes.card}>
    <Text className={classes.text}>Find User</Text>
    <br></br>
   <Button className={classes.button} onClick={randomUser}>click me</Button>
    </Card>  
    <List className={classes.list}>
      {
        user.gender && <ListItem className={classes.listItem}>
          <Text className={classes.text_gender}>gender: {user.gender}</Text>
          <br></br>
          <Text className={classes.text_cell}> cell: {user.cell} </Text>
          <br></br>
          <Text className={classes.text_email}> email: {user.email} </Text>
          <br></br>
          <Text className={classes.text_name}> name: {user.name} </Text>
          <br></br>
          <Image width="200px" height="200px" className={classes.image} src={user.picture}/>
          <br></br> 
        </ListItem>
      }
    </List>
   
    </Center>
    </Wrapper>
  );
}

export default App;
