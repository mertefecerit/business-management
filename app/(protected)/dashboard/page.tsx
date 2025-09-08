import React from 'react';

const Page = () => {

    return (
        <div>
            {Array.from({length:100}, () => (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, possimus.</p>))}
        </div>
    );
};

export default Page;