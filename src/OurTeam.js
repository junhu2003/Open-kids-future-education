import React, { Fragment } from 'react';
import { Header, Segment, Item, Divider } from 'semantic-ui-react';

import MenuBar from "./MenuBar";

class OurTeam extends React.Component {    

    render() {            
        const SegmentStyle = {
            backgroundImage: `url('./Images/online_education_14.png')`,
            backgroundPosition: 'center',
            width: "100%",
            height: "600px"
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
                                <Item.Description style={{ textAlign:'justify', fontSize: 16 }}>                                  
                                    Graduated from Dalian University of Technology, Master's degree in computer science. 
                                    Six years of University teaching experience in China. 25 years of IT industry experience. 
                                    Including Industrial and Commercial Bank of China (ICBC), 
                                    Core data Ltd, Masterworks Software Ltd, City of Calgary, ResMor trust company, Ciber (US),
                                    Atco, Shaw Communication, Bow Valley College, etc.                                       
                                </Item.Description>
                                <Item.Description style={{ textAlign:'justify', fontSize: 16 }}>
                                    毕业于大连理工大学，计算机科学硕士学位。
                                    六年中国大学教学经验。 25 年 IT 行业经验。
                                    曾就职于中国工商银行（ICBC），
                                    Core data Ltd、Masterworks Software Ltd、卡尔加里市市政府IT部、ResMor 信托公司、Ciber（美国）、
                                    Atco、Shaw Communication、Bow Valley College 等。
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
