import React, { Fragment } from 'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Header, Image } from 'semantic-ui-react';
import { Redirect } from "react-router-dom";

import MenuBar from "./MenuBar";

class Home extends React.Component {
    state = {
        redireect: false,
        data: []
    };

    redirect = payload => {
        this.setState({
            redirect: true,
            data: payload
        });
    };    

    render() {    
        const { redirect, data } = this.state;
        let elements  = [
            {
                render:()=>{
                    return (
                        <Image
                            src="./Images/online_education_04.png"
                        />
                    )
                }
            },
            {
                render:()=>{
                    return (
                        <Image
                            src="images/online_education_17.png"
                        />
                    )
                }
            },
            {
                render:()=>{
                    return (
                        <Image
                            src="images/online_education_03.png"
                        />
                    )
                }
            },
            {
                render:()=>{
                    return (
                        <Image
                            src="images/online_education_01.png"
                        />
                    )
                }
            },
            {
                render:()=>{
                    return (
                        <Image
                            src="images/online_education_05.png"
                        />
                    )
                }
            }
        ];

        if (redirect) {
            return (
                <Redirect to={{
                    pathname: "/home",
                    state: { data }
                }} />
            );
        }

        return (
            <Fragment>    
                <MenuBar name='Home' />
                <Header as="h1" textAlign="center" color='purple'>
                    Open Kids Future Education
                </Header>                
                <Carousel
                    elements  =  { elements }
                    duration  ={3000}
                    animation  ='slide right'
                    showNextPrev  =  {false}
                    showIndicators  ={false}
                />
            </Fragment>
        );
      };
}
export default Home;
