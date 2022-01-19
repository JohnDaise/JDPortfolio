import '../App.css';
import { Menu } from 'antd';
import React, { useState } from 'react';

import { BookOutlined } from '@ant-design/icons';

const Header = () => {
    const [current,setCurrent] = useState('about'); 

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
    <div className="App-header">
        <Menu 
            theme={'dark'}
            onClick={handleClick} 
            selectedKeys={current} 
            mode="horizontal">
                <Menu.Item key="about" icon={<BookOutlined />}>
                    About
                </Menu.Item>
                <Menu.Item key="projects">
                    Projects
                </Menu.Item>
                <Menu.Item key="contact">
                    Contact
                </Menu.Item>
                <Menu.Item key="resume">
                    Resume
                </Menu.Item>
        </Menu>
    </div> 
    );
    
}

export default Header;
