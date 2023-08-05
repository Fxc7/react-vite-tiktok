import React, { useEffect, useState } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { AiFillLike, AiFillEye, AiOutlineShareAlt } from 'react-icons/ai';
import { BiCommentDetail, BiUser } from 'react-icons/bi';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { PiTimerThin } from 'react-icons/pi'
import { HiSave } from 'react-icons/hi';
import { toast } from 'sonner';

import { api_url } from '../../configs.js';

const TiktokComponent = ({ url }) => {
    const [result, setResult] = useState(null);

    const tiktokFetched = async () => {
        const response = await fetch(`${api_url}${url}`).then(response => response.json());
        setResult(response);
    };

    useEffect(() => {
        if (url) {
            document.querySelector('div.loading-screen').style.display = 'flex';
            tiktokFetched();
        }
    }, [url]);

    useEffect(() => {
        if (result) {
            toast.success('Successfully...');
            document.querySelector('div.loading-screen').style.display = 'none';
        }
    }, [result]);

    if (!result) {
        return null;
    }
    if (result) {
        return (
            <>
                <Row className="animate__animated animate__fadeIn animate__delay-1s result-page pt-5 mt-5">
                    <Image thumbnail src={result.thumbnail} alt={result.description} />
                    <Col className="py-3">
                        {
                            result?.author?.unique_id ? <div><BiUser /> <span onClick={() => window.open('https://www.tiktok.com/@' + result.author.unique_id, '_blank')} className="profile_url fw-bold">{result.author.unique_id}</span> <BiUser /></div> : null
                        }
                        {
                            result?.duration ? <div className="pt-1"><PiTimerThin /> <span className="fw-bold">{result?.duration}</span> <PiTimerThin /></div> : null
                        }
                        {
                            result?.description ? <p className="fw-bold pt-3 color-gray">{result.description}</p> : <p className="fw-bold pt-3 color-gray">{result?.uploaded_at}</p>
                        }
                    </Col>
                    <Col className="pb-4" lg={7} sm={11}>
                        <AiFillLike color="red" /> <span className="content-result">{result?.digg_count}</span>
                        <span className="px-2"></span>
                        <BiCommentDetail color="red" /> <span className="content-result">{result?.comment_count}</span>
                        <span className="px-2"></span>
                        <AiFillEye color="red" /> <span className="content-result">{result?.play_count}</span>
                        <span className="px-2"></span>
                        <AiOutlineShareAlt color='red' /> <span className="content-result">{result?.share_count}</span>
                        <span className="px-2"></span>
                        <FaCloudDownloadAlt color="red" /> <span className="content-result">{result?.download_count}</span>
                        <span className="px-2"></span>
                        <HiSave color="red" /> <span className="content-result">{result?.saved_count}</span>
                    </Col>
                    <Col className="pb-5">
                        <button onClick={() => {
                            window.open(result.video_watermark, '_blank');
                        }} className="btn btn-block bg-danger mx-1 fw-bold">watermark</button>
                        <button onClick={() => {
                            window.open(result.music_url, '_blank');
                        }} className="btn btn-block bg-danger mx-1 fw-bold">audio</button>
                        <button onClick={() => {
                            window.open(result.video_nowatermark, '_blank');
                        }} className="btn btn-block bg-danger mx-1 fw-bold">no watermark</button>
                    </Col>
                </Row>
            </>
        );
    }
};

export default TiktokComponent;