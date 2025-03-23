import React from 'react'
import { useNavigate } from 'react-router-dom';

const Other = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 onClick={() => navigate('/privacy-policy')}>p and p</h1>
        </div>
    )
}

export default Other
