import { Container } from 'react-bootstrap';

import { author } from '../../configs.js';

const FooterComponent = () => {
  return (
    <footer>
        <Container>
            <p className="fw-bold animate__animated animate__fadeIn">
                &copy; {new Date().getFullYear()} {author}, Inc. All rights reserved.
            </p>
        </Container>
    </footer>
  );
};

export default FooterComponent;