
import { Row, Col } from 'antd';
import '../App.css';


function Projects() {
  return (
    <div className="projects">
        <h2>PROJECTS</h2>
        <Row gutter={[16, 16]}>
            <Col span={12} >Project 1</Col>
            <Col span={12} >Project 2</Col>
        </Row>
        <Row>
            <Col span={12} >Project 3</Col>
            <Col span={12} >Project 4</Col>
        </Row><br/>
    </div>
  );
}

export default Projects;