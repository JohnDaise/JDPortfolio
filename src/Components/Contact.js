import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import '../App.css';


function Contact() {
  return (
    <div className="contact">
        <h2>CONTACT</h2>


        <Row justify="space-around">
            <Col span={6}>   
                <a href="https://www.linkedin.com/in/john-daise-1327819/" target="_blank">
                    <LinkedinOutlined />
                </a>
            </Col>
            <Col span={6}>
                <a href="https://github.com/JohnDaise" target="_blank">
                <GithubOutlined />
                </a>
            </Col>
            <Col span={6}>
                <a href="mailto:jdaise@gmail.com">
                <MailOutlined /> 
                </a>
            </Col>
            <Col span={6}>
                <a href="tel:3015371799">
                <PhoneOutlined />
                </a>
            </Col>
        </Row> <br/>

        {/* <Row justify="space-around">
            <Col span={12}>   
                <a href="https://www.linkedin.com/in/john-daise-1327819/" target="_blank">
                    <LinkedinOutlined />
                </a>
            </Col>
            <Col span={12}>
                <a href="https://github.com/JohnDaise" target="_blank">
                <GithubOutlined />
                </a>
            </Col>
        </Row>
        <Row justify="center">
            <Col span={18}>
                <a href="mailto:jdaise@gmail.com">
                <MailOutlined /> Email 
                </a>
            </Col>
        </Row>
        <Row justify="center">
            <Col span={12}>
                <a href="tel:3015371799">
                <PhoneOutlined /> Call
                </a>
            </Col>
        </Row> */}
    </div>
  );
}

export default Contact;