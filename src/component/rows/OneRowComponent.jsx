import { PiTiktokLogoFill } from 'react-icons/pi';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'sonner';

const OneRowComponent = ({ setUrl }) => {
    const handleButton = () => {
        const input = document.querySelector('input').value;
        if (!input) {
            toast.error('Please Input url tiktok...');
        } else if (!/https?:\/\/(.+)?tiktok\.com\/(@.+|.+)/i.test(input)) {
            toast.error('Invalid URL, Please input a valid TikTok URL...');
            document.querySelector('input').value = '';
            return;
        } else {
            setUrl(input);
            document.querySelector('input').value = '';
            return;
        }
    }

    const handleKeypress = (event) => {
        if (event.key === 'Enter') {
            document.querySelector('button').click();
            document.querySelector('input').value = '';
        }
    }
    return (
        <>
            <Row className="mt-5 animate__animated animate__fadeIn">
                <Col className="justify-content-center align-items-center px-3 rounded-3">
                    <PiTiktokLogoFill size={200} />
                    <input type="url" onKeyPress={handleKeypress} placeholder="tiktok url..." />
                    <button type="button" onClick={handleButton}>submit</button>
                    <p className="fw-bold pt-4">
                        Download TikTok Videos Online. No Watermark
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default OneRowComponent;