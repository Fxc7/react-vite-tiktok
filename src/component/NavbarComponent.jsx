import { Navbar, Container } from 'react-bootstrap';

import { navbar_title } from '../../configs.js';

const NavbarComponent = () => {
    return (
        <Navbar>
            <Container className="animate__animated animate__fadeIn">
                <Navbar.Brand className="fw-bold font-mirror">{navbar_title.split(' ')[0]}</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="fw-bold font-mirror">
                        {navbar_title.split(' ')[1]}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavbarComponent