import React from 'react';
import myResume from '../Cruz_Luis_Resume.pdf';


function Resume() {
    return (
        <div style={{height: '850px'}}>
            <object data={myResume} type='application/pdf' width='100%' height='100%' />
        </div>
    );
}

export default Resume;
