import React, { Fragment } from 'react';
import { Header, Image, Grid, Segment, Button, Form, Message, Icon } from 'semantic-ui-react';
import emailjs from '@emailjs/browser';

import MenuBar from "./MenuBar";

class ContactUs extends React.Component {   
    state = {
        name: '',
        phone: '',
        email: '',        
        message: '',
        hiddenMsg: true,
    };      

    handleSubmit(e) {
        e.preventDefault();

        emailjs.init({
            publicKey: '7MQgRTdKAR8bn4Z8X',
            // Do not allow headless browsers
            blockHeadless: false,
            blockList: {
              // Block the suspended emails
              list: [],
              // The variable contains the email address
              watchVariable: 'userEmail',
            },
            limitRate: {
              // Set the limit rate for the application
              id: 'app',
              // Allow 1 request per 10s
              throttle: 10000,
            },
          });

        const { name, phone, email, message } = this.state;
        
        let templateParams = {
          from_name: name,
          to_name: 'Future Education Owner',
          phone: phone,
          email: email,
          message: message,
        };

        emailjs.send('service_mdq5pqp', 'template_pn1cspc', templateParams).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              this.setState({ hiddenMsg: false });
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );        

        this.resetForm();
    };

    resetForm() {
        this.setState({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
    };

    handleChange = (param, e) => {
        this.setState({ 
            [param]: e.target.value,
            hiddenMsg: true,
         })
    }

    render() {
        const SegmentStyle = {
            backgroundImage: `url('./Images/online_education_11.png')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
            width: "100%",
            minHeight: '600px',
            color: 'blue',            
          };

        return (
            <Fragment>
                <MenuBar name='ContactUs' />                
                <Header as="h1" textAlign="center" color='purple'>
                    Contact Us
                </Header>
                <Segment style={ SegmentStyle }>
                    <Header as="h2" textAlign="center" color='orange'>
                        Get in touch with us today!
                    </Header>
                    <Grid centered columns={2}>
                        <Grid.Column width={5}>
                            <Message
                                icon='inbox'
                                header='Email:'
                                content='junhu2003 @hotmail.com'
                            />
                            <Message
                                icon='phone'
                                header='Telephone:'
                                content='236-509-8678'
                            />
                            <Message icon>
                                <Icon name='chat' />
                                <Message.Content>
                                    <Message.Header>WeChat QR Code:</Message.Header>                                    
                                </Message.Content>                                
                            </Message>
                            <Image rounded
                                size="small"       
                                src="Images/RogerHu_WeChat.JPG"
                            />
                        </Grid.Column>
                        <Grid.Column width={11}>                            
                            <Segment>
                                <Form size="large" onSubmit={ this.handleSubmit.bind(this) }>
                                    <Form.Input                                        
                                        name='name'
                                        label='Name'
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={this.handleChange.bind(this, 'name')}
                                        required
                                    />
                                    <Form.Input                                        
                                        name='phone'
                                        label='Telephone'
                                        icon="phone"
                                        iconPosition="left"
                                        placeholder="Telephone number"
                                        value={this.state.phone}
                                        onChange={this.handleChange.bind(this, 'phone')}
                                        required
                                    />
                                    <Form.Input                                        
                                        name='email'
                                        label='Email'
                                        icon="mail"
                                        iconPosition="left"
                                        placeholder="Email address"
                                        value={this.state.email}
                                        onChange={this.handleChange.bind(this, 'email')}
                                        required
                                    />
                                    <Form.TextArea                                        
                                        name='message'
                                        label='Message'
                                        placeholder="Message"
                                        value={this.state.message}
                                        onChange={this.handleChange.bind(this, 'message')}
                                    />
                                    <Button color="blue" fluid size="large">
                                        Contact Us
                                    </Button>
                                </Form>
                            </Segment>
                            <Message
                                icon='thumbs up'
                                header='Thank you very much!'
                                content='Your message has been received. We will contact you shortly.'
                                hidden={ this.state.hiddenMsg }
                            />                            
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Fragment>            
        )        
    }
}
export default ContactUs;
