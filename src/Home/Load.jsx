import React, { useEffect, useState } from 'react'

const Load = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    if (loading) {
        return (
            <span class="loader"></span>
        );
    }
}

export default Load;