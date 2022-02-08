
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
                            <image src={project.image} />
                            <a href={project.deployedUrl} target="_blank">{project.title} Deployed Site</a><br/>
                            <a href={project.github} target="_blank">GitHub</a>
                          </div>
                        </Col>
                        );
                      break;
                    case "video":
                      return (
                        <Col span={12}>
                          <h3>{project.title}</h3>
                          <div className='vimeo'>
                            <iframe src={project.url} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen ></iframe>
                          </div>
                        </Col>
                        );
                      break;
                  }

                })
            }
        </Row>

    </div>
  );
}



export default Projects;