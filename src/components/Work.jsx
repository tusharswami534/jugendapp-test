import React from 'react';

const Work = () => {
    function addNumbers(a, b) {
        return a + b;
    }

    return (
        <div className='py-[60px] max-lg:px-5 max-lg:py-10 max-md:py-8 max-sm:py-5'>
            <h1 className='font-bold text-center leading-[44px] max-md:leading-[40px] max-sm:leading-[36px] text-4xl max-lg:text-3xl max-md:text-2xl '>The result of adding 2 + 3 = {addNumbers(2, 3)}</h1  >
        </div>
    );
}

export default Work;