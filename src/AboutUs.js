import React, { Fragment } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';

import MenuBar from "./MenuBar";

class AboutUs extends React.Component {    

    render() {            
        const SegmentStyle = {
            backgroundImage: `url('./Images/online_education_02.png')`,
            backgroundPosition: 'center',
            width: "100%",
            height: "600px",
            color: 'blue',
            fontSize: 16
          };

        return (            
            <Fragment>
                <MenuBar name='AboutUs' />                
                <Header as="h1" textAlign="center" color='purple'>
                    About Us
                </Header>
                <Segment style={ SegmentStyle }>
                <Grid columns={2}>
                    <Grid.Column width={7}>
                        <p style={{ textAlign:'justify' }}>
                            Open kids future education provides online computer programming courses. 
                            The courses are mainly for middle school students in grades 6-9, 
                            aiming to cultivate students' interest in computer programming. 
                            At this stage, students have strong curiosity and comprehension ability, 
                            relatively loose school education, and ample extracurricular time. 
                            What we provide is not just a simple computer language course, but more emphasis on students' 
                            programming practice and debugging ability. 
                            The lectures and the exercises in the class are divided into half, 
                            and the full-time teacher guides and answers students' questions online.
                        </p>
                        <p style={{ textAlign:'justify' }}>
                            开启孩子未来教育提供在线计算机编程课程。课程主要面向6-9年级中学学生，
                            旨在培养学生对计算机编程的兴趣。这一阶段学生好奇心和领悟能力较强，学校教育相对宽松，
                            课外时间较为宽裕。我们所提供不是简单的计算机语言课程，更注重学生的编程实践和调试的动手能力。
                            授课和课上练习各占一半，专职老师手把手指导，在线解答学生的疑问。
                        </p>
                    </Grid.Column>
                    <Grid.Column width={9}>                        
                    </Grid.Column>
                </Grid>                    
                </Segment>              
            </Fragment>
            
        )        
    }
}
export default AboutUs;
