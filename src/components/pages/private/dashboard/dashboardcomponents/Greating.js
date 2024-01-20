import React from 'react';

function Greating(props) {
    return (
        <div className='row'>
                    <div className='col-6 mt-3'>
                        <h3 className='litle_title'>Hi,{props.name}!</h3>
                    </div>
                </div>
    );
}

export default Greating;