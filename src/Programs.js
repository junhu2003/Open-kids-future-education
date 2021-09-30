import React, { Fragment } from 'react';
import { Header, Segment, List, Divider, Item } from 'semantic-ui-react';

import MenuBar from "./MenuBar";

class Programs extends React.Component {    

    render() {
        const SegmentStyle = {
            backgroundImage: `url('./Images/online_education_13.png')`,
            backgroundPosition: 'center',
            width: "100%",
            height: "600px",
            color: 'blue',            
          };

        return (
            <Fragment>
                <MenuBar name='Programs' />                
                <Header as="h1" textAlign="center" color='purple'>
                    Programs
                </Header>
                <Segment style={ SegmentStyle }>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header>Python Programming Level 1</Item.Header>
                                <Divider />
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    This program is intended for grades 7 - 9, middle and high school students. 
                                    It is designed to encourage beginners' interest in computer programming and coding. 
                                    One lesson is two hours, and times will be changed based on students availability. 
                                    The first hour will be used to teach Python syntax, and the second hour is in-class practice, 
                                    and exersices. No programming experence required.
                                </Item.Description>
                                <Item.Extra>What's included:</Item.Extra>
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    <List bulleted>
                                        <List.Item>Setup Python development environment</List.Item>
                                        <List.Item>Teaching Python language syntax and programming debug skills</List.Item>
                                        <List.Item>Hands on programming practice</List.Item>
                                    </List>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                        <br />
                        <Item>                        
                            <Item.Content>
                                <Item.Header>React Programming Level 1</Item.Header>
                                <Divider />
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    It will come soon.
                                </Item.Description>                                
                            </Item.Content>
                        </Item>
                    </Item.Group>                    
                </Segment>
            </Fragment>            
        )        
    }
}
export default Programs;
