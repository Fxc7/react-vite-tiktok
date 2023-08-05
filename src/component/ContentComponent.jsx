import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Toaster } from 'sonner';

import OneRowComponent from './rows/OneRowComponent.jsx';
import TwoRowsComponent from './rows/TwoRowsComponent.jsx';
import ThreeRowComponent from './rows/ThreeRowComponent.jsx';

import TiktokComponent from './TiktokComponent.jsx';

const ContentComponent = () => {
    const [url, setUrl] = useState('');

    const handleSetUrl = (link) => setUrl(link);
    return (
        <>
            <Toaster position="top-center" richColors />
            <main className="py-5 text-center">
                <Container>
                    <OneRowComponent setUrl={handleSetUrl} />
                    <TiktokComponent url={url}/>
                    <TwoRowsComponent />
                    <ThreeRowComponent />
                </Container>
            </main>
        </>
    );
};

export default ContentComponent;