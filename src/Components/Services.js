import React from 'react'
import Card from 'react-bootstrap/Card';
import './Services.css';
// import Fade from 'react-reveal/Fade';


const Services = () => {
  return (
    <div className='Services' >
      <div className='service-h3'>
        <h3>My Services</h3>
      </div>

        <div className='row'>
          {/* <Fade left> */}
            <div className='col-lg-4 col-md-12 col-sm-12 cards'>
                <Card style={{ width: '100%', marginBottom:'15px' }}>
                <Card.Img variant="top" src="https://www.kindpng.com/picc/m/144-1444122_graphic-designing-services-graphic-designer-clipart-png-transparent.png" width='100%' />
                <Card.Body>
                    <Card.Title style={{ color:' #395b64' }}>Graphics Design</Card.Title>
                    <Card.Text>
                      <p className='card-p'>Create Graphics work of different varieties, with nice and satisfying looks.</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
          {/* </Fade> */}

          {/* <Fade left> */}
            <div className='col-lg-4 col-md-12 col-sm-12 cards'>
                <Card style={{ width: '100%', marginBottom:'15px' }}>
                <Card.Img variant="top" src="https://www.kindpng.com/picc/m/310-3109950_web-development-png-transparent-png.png" width='100%' />
                <Card.Body>
                    <Card.Title style={{ color:' #395b64' }}>Web Development</Card.Title>
                    <Card.Text>
                      <p className='card-p'>Create websites of different views, functions and user friendly.</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
          {/* </Fade> */}

          {/* <Fade left> */}
            <div className='col-lg-4 col-md-12 col-sm-12 cards'>
                <Card style={{ width: '100%', marginBottom:'15px' }}>
                <Card.Img variant="top" src="https://p.kindpng.com/picc/s/4-41409_developer-png-png-download-developer-png-no-background.png"  width='100%' />
                <Card.Body>
                    <Card.Title style={{ color:' #395b64' }}>About Me</Card.Title>
                    <Card.Text>
                      <p className='card-p'>Developer specialised in frontend and backend development.</p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
          {/* </Fade> */}
        </div>
    </div>
  )
}

export default Services
