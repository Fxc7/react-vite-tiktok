import { Row, Col } from 'react-bootstrap';
import { features, navbar_title } from '../../../configs.js';

const ThreeRowComponent = () => {
  return (
    <div className="description-site py-3 my-5 animate__animated animate__fadeIn">
        <h1 className="fw-bold text-danger">TikTok video download without watermark</h1>
        <p className="color-gray">
          <b>{navbar_title}</b> is an online tool helping you download videos from TikTok without a watermark. <b>{navbar_title}</b> is one of the most popular Tiktok video downloaders that can help you save videos from TikTok with highest quality, in an MP4 file format with HD resolution.
        </p>
      <hr />
      <Row lg={3} sm={1} className="justify-content-center">
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
    </div>
  );
};

export default ThreeRowComponent;