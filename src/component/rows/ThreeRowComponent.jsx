import { Row, Col } from 'react-bootstrap';
import { features } from '../../../configs.js';

const ThreeRowComponent = () => {
    return (
        <>
            <Row lg={3} sm={1} className="description-site py-5 my-5 animate__animated animate__fadeIn">
                {
                    features.map((element) => (
                        <Col data-aos={element.animate} className="px-3 py-3" key={element.id}>
                            <element.icon size={60} color="black" />
                            <h4 className="fw-bold color-gray pt-3">{element.title}</h4>
                            <p className="color-gray">{element.description}</p>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default ThreeRowComponent;