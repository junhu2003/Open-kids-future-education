import React, { Fragment } from 'react';
import { Header, Segment, Item, Divider } from 'semantic-ui-react';

import MenuBar from "./MenuBar";

class OurTeam extends React.Component {    

    render() {            
        const SegmentStyle = {
            backgroundImage: `url('./Images/online_education_14.png')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            width: "100%",
            minHeight: '600px'
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
                                    Graduated from Dalian University of Technology, with a Master's degree in computer science 
                                    With six years of University teaching experience in China. 
                                    Has 25 years total of IT industry experience with 17 years of IT experience in Canada. 
                                    Worked for Industrial and Commercial Bank of China (ICBC), 
                                    Core data Ltd, Masterworks Software Ltd, ITS of City of Calgary, ResMor trust company, Ciber (US),
                                    Atco, Shaw Communication, Bow Valley College, etc, and has been involved in some critical enterprise level
                                    projects such as the City of Calgary Helpdesk portal project, the City of Calgary Property Tax project, etc.
                                </Item.Description>
                                <Item.Description style={{ textAlign:'justify', fontSize: 16 }}>
                                    毕业于大连理工大学，获得计算机科学硕士学位。
                                    拥有六年中国大学教学经验。总共 25 年的 IT 从业经验，其中 17 年在加拿大从事计算机软件开发工作。
                                    曾就职于中国工商银行（ICBC）IT 部，
                                    Core data Ltd、Masterworks Software Ltd、卡尔加里市政府IT部、ResMor 信托公司、Ciber（美国）、
                                    Atco、Shaw Communication、Bow Valley College等，曾参与开发一些重要的企业级软件项目，其中包括
                                    卡尔加里市政府 Helpdesk 项目、卡尔加里地税项目等。
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
