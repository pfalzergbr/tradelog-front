import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__disclaimer'>
        <span className='footer__disclaimer__tag'>Disclaimer: </span>
        This is a practice project made for Full Stack web development
        portfolio, does not provide invesment advice in any way. Please only
        invest at your own risk. The creator of this site does not take any
        responsibility for your trading losses in any way.
      </p>
      <p className='footer__trademark'>TradeLog 2021</p>
    </footer>
  );
};

export default Footer;
