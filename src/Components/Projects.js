
import { Row, Col } from 'antd';
import '../App.css';
import projects from './../Assets/data';


function Projects() {
  return (
    <div className="projects">
        <h2>PROJECTS</h2>
        <Row gutter={[16, 16]}> 
              {
                projects.map((project) =>{
                
                  switch(project.type){
                    case "app":
                      return (
                        <Col span={12}>
                          <h3>{project.title}</h3>
                          <div>
                            <img src={require(`./../Assets/images/${project.imageUrl}`)} /><br/>
                            <a href={project.deployedUrl} target="_blank" rel="noreferrer" >Deployed Site</a><br/>
                            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                          </div>
                        </Col>
                        );
                    case "video":
                      return (
                        <Col span={12}>
                          <h3>{project.title}</h3>
                          <div className='vimeo'>
                            <iframe src={project.url} title={project.title} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
                          </div>
                        </Col>
                        );
                    default:
                      return null;
                  }

                })
            }
        </Row>

    </div>
  );
}



export default Projects;