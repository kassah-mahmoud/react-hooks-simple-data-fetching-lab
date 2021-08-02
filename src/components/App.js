// create your App component here
import React, { useEffect, useState } from 'react'

const App = () => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setImage(data.message))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            { loading && <p>Loading...</p>} 
            {!loading && <img src={image} alt="A Random Dog" />}
        </div>
    )
}

export default App
