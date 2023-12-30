import React from 'react';

const Hello = () => {
    // return (
    //     <div>
    //     Render component using Jsx
    //     </div>
    // )

    return React.createElement('div', {id: 'div1'}, 'Render component without jsx');
}

export default Hello;