import React from 'react';
import { Link } from "react-router-dom";
import { Image, Menu, Icon } from 'semantic-ui-react';

class MenuBar extends React.Component {
  state = {}

  componentDidMount() {
    this.setState({ activeItem: this.props.name })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state    

    return (
      <Menu pointing secondary color='blue'>
        <Menu.Item 
          as={ Link } 
          to="/Home" 
          name="Home"          
        >
          <Image
            size="small"       
            src="open_kids_future_logo.png"
          />
        </Menu.Item>
    
        <Menu.Menu position="right">
          <Menu.Item 
            as={ Link } 
            to="/Home" 
            name="Home"           
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            <div style={{ textAlign: 'center' }}>
              <div>
                <Image
                  src="./Images/menu_home.png"
                />
              </div>
              <div>
                <Icon name={'home'}/>
                Home 
              </div>
            </div>            
          </Menu.Item>
    
          <Menu.Item 
            as={ Link } 
            to="/AboutUs" 
            name="AboutUs"                 
            active={activeItem === 'AboutUs'}
            onClick={this.handleItemClick}
          >
            <div style={{ textAlign: 'center' }}>
              <div>
                <Image
                  src="./Images/menu_AboutUs.png"
                />
              </div>
              <div>
                <Icon name={'globe'}/>
                About Us
              </div>
            </div>            
          </Menu.Item>
    
          <Menu.Item 
            as={ Link } 
            to="/OurTeam" 
            name="OurTeam"           
            active={activeItem === 'OurTeam'}
            onClick={this.handleItemClick}
          >
            <div style={{ textAlign: 'center' }}>
              <div>
                <Image
                  src="./Images/menu_OurTeam.png"
                />
              </div>
              <div>
                <Icon name={'chess'}/>
                Our Team
              </div>
            </div>
          </Menu.Item>
    
          <Menu.Item 
            as={ Link } 
            to="/Programs" 
            name="Programs"           
            active={activeItem === 'Programs'}
            onClick={this.handleItemClick}
          >
            <div style={{ textAlign: 'center' }}>
              <div>
                <Image
                  src="./Images/menu_Programs.png"
                />
              </div>
              <div>
                <Icon name={'chain'}/>
                Programs
              </div>
            </div>            
          </Menu.Item>
    
          <Menu.Item 
            as={ Link } 
            to="/ContactUs" 
            name="ContactUs"           
            active={activeItem === 'ContactUs'}
            onClick={this.handleItemClick}
          >
            <div style={{ textAlign: 'center' }}>
              <div>
                <Image
                  src="./Images/menu_ContactUs.png"
                />
              </div>
              <div>
                <Icon name={'phone volume'}/>
                Contact Us
              </div>
            </div>            
          </Menu.Item>
        </Menu.Menu>    
      </Menu> 
    )
  }    
}

export default MenuBar;
