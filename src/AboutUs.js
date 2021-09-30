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
            fontSize: 22
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
                            Open Kids Future Education offers online computer programming courses to middle and high school students.
                            We teach coding at all levels: from beginner (8yrs and above) to advanced coding. 
                            We focus on concepts and customize our courses to meet the needs of our students. 
                            We provide our student hands-on programming experience and code debug skills.
                            We use a graduated approach and offer multiple stages after-school, weekends and holiday code camps.                            
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
