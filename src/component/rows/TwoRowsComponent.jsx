import { Row, Col } from 'react-bootstrap';

import { navbar_title } from '../../../configs.js';

const TwoRowsComponent = () => {
  return (
    <>
        <Row className="pt-5">
              <Col className="text-center mt-4 animate__animated animate__fadeIn">
                  <h1 className="fw-bold text-danger">TikTok video download without watermark</h1>
                  <p className="color-gray">
                      <b>{navbar_title}</b> is an online tool helping you download videos from TikTok without a watermark. <b>{navbar_title}</b> is one of the most popular Tiktok video downloaders that can help you save videos from TikTok with highest quality, in an MP4 file format with HD resolution.
                  </p>
            </Col>
        </Row>
    </>
  );
};

export default TwoRowsComponent;