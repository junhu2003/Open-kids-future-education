import React, { Fragment } from 'react';
import { Header, Segment, List, Divider, Item } from 'semantic-ui-react';

import MenuBar from "./MenuBar";

class Programs extends React.Component {    

    render() {
        const SegmentStyle = {
            backgroundImage: `url('./Images/online_education_13.png')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            width: "100%",
            minHeight: '600px',
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
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    该课程面向 7 - 9 年级的初中和高中学生。
                                    它旨在鼓励初学者对计算机编程和编码的兴趣。
                                    一节课是两个小时，时间会根据学生的情况而改变。
                                    第一个小时将用于教授 Python 语法，第二个小时是课堂练习。无需编程经验。
                                </Item.Description>
                                <Item.Extra>What's included:</Item.Extra>
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    <List bulleted>
                                        <List.Item>Setup Python development environment. 搭建Python编程环境</List.Item>
                                        <List.Item>
                                            Teaching Python language syntax and programming debug skills. 
                                            讲解Python语法及编程技巧
                                        </List.Item>
                                        <List.Item>
                                            Hands on programming practice. 
                                            课堂编程及调试实践
                                        </List.Item>
                                    </List>
                                </Item.Description>
                                <Item.Extra>Term and Tuition:</Item.Extra>
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    About 24 weeks; Class once a week; $30 per class (2 hours)
                                </Item.Description>
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    约为 24 周; 每周一次课; $30 每节课 (2 小时)
                                </Item.Description>
                            </Item.Content>
                        </Item>
                        <br />
                        <Item>                        
                            <Item.Content>
                                <Item.Header>Javascript Programming Level 1</Item.Header>
                                <Divider />
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    It will come soon.
                                </Item.Description>
                                <Item.Description style={{ textAlign:'justify', color: 'blue', fontSize: 16 }}>
                                    未来计划开设.
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
