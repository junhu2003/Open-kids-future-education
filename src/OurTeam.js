import React, { Fragment } from 'react';
import { Header, Segment, Item, Divider } from 'semantic-ui-react';

import MenuBar from "./MenuBar";

class OurTeam extends React.Component {    

    render() {            
        const SegmentStyle = {
            backgroundImage: `url('./Images/online_education_14.png')`,
            backgroundPosition: 'center',
            width: "100%",
            height: "600px",
            color: 'blue',
            
          };

        return (
            <Fragment>
                <MenuBar name='OurTeam' />                
                <Header as="h1" textAlign="center" color='purple'>
                    Our Team
                </Header>
                <Segment style={ SegmentStyle }>
                    <Item.Group>
                        <Item>
                            <Item.Image size='small' src='Images/Jun_hu_portrait_small.jpg' />

                            <Item.Content>
                                <Item.Header as='a'>Roger Hu</Item.Header>
                                <Item.Meta>CEO &amp; Tutor</Item.Meta>
                                <Divider />
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>                                  
                                    Graduated from Dalian University of Technology, Master's degree in computer science. 
                                    Six years of University teaching experience in China. 25 years of IT industry experience. 
                                    Including Industrial and Commercial Bank of China (ICBC), 
                                    Core data Ltd, Masterworks Software Ltd, City of Calgary, ResMor trust company, Ciber (US),
                                    Atco, Shaw Communication, Bow Valley College, etc.                                  
                                </Item.Description>                                
                            </Item.Content>
                        </Item>    
                    </Item.Group>
                </Segment>
            </Fragment>            
        )        
    }
}
export default OurTeam;
