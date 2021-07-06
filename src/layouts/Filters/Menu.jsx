import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Divider,
  Input,
  Menu,
  //Segment,
  Card,
  Button,
  Icon,
  Transition,
 // Grid,
 //Image,
} from "semantic-ui-react";

export default function MenuFilter() {

    const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']
    const colorsB = ['1', '2', '3', '4', '5', '6']

//    let state = { activeA: colorsA[0], activeB: colorsB[0] }
   const [activeA, setActiveA] = useState(colorsA[0]);
   const [activeB, setActiveB] = useState(colorsB[0]);
   const handleAClick = (e, { name }) => { setActiveA(name) }
   const handleBClick = (e, { name }) => { setActiveB(name) }
  
  const [isVisiblate, setIsVisiblate] = useState(false);

  function toggleVisiblate() {
    setIsVisiblate(!isVisiblate);
  }

  const [active, setActive] = useState("");

  const handleItemClick = (e, { active }) => {
    setActive(active.active);
  };

  return (
    <div>
        
            
         <Menu
        className="ui left fixed vertical menu" //vertical kaldırınca efsoo oluyor
        style={{ marginTop: "66px", backgroundColor: "black", }}
      >
           <Button
          content={isVisiblate ? 'Menü' : 'Göster'} color="purple"
          onClick={toggleVisiblate} style={{ backgroundColor: "" }}
        ></Button>
        <Divider hidden />
        {isVisiblate?(<Transition visible={isVisiblate} animation='scale' duration={2000}>
           
        {/* <Menu.Item>
         
        </Menu.Item> */}
       
        <Card>
        {/* {colorsA.map((c) => (
            <Menu.Item
              key={c}
              name={c}
              active={activeA === c} 
              color={c}
              onClick={handleAClick}
            />))} */}
        <Menu.Item
          as={NavLink}
          to="/"
          name="JobAdverts"
          active={active === "JobAdverts"}
          onClick={handleItemClick}
        >
          Menüler
        </Menu.Item>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
          
          <Menu.Header>Home</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name='search'
              active={active === 'search'}
              onClick={handleItemClick}
            >
              Search
            </Menu.Item>
            <Menu.Item
              name='add'
              active={active === 'add'}
              onClick={handleItemClick}
            >
              Add
            </Menu.Item>
            <Menu.Item
              name='about'
              active={active === 'about'}
              onClick={handleItemClick}
            >
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        
        <Menu.Item
          name='messages'
          active={active === 'messages'}
          onClick={handleItemClick}
        >
          Messages
        </Menu.Item>

       </Card>
      
        </Transition>

        ):(
null
        )}
      </Menu>
    </div>
  );
}
