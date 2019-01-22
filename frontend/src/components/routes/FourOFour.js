import * as React from 'react';

import '../../assets/css/FourOFour.css';

import FourOFourImg from '../../assets/img/404.jpg';

const FourOFour = () => {
    return (
      <section className="nopage">
        <img src={FourOFourImg} className="nopage-img" alt="404 error page not found" />
        <h1 className="nopage-title">Sorry you are L<span className="nopage-styleO">O</span>ST</h1>

      </section>
    );
}

export {FourOFour};