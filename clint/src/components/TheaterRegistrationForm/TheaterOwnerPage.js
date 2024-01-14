import React , {useState} from 'react';

function TheaterOwnerPage(){
    const [state,setState] = useState(state);
    return(<>
        <h1>Welcome You Owner 🫡</h1>
        <p>{state}</p>
    </>);
}

export default TheaterOwnerPage;