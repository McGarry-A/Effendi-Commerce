import './Footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter, FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <div className="footer-socials">
          <ul className='footer-socials-list'>
              <li className='footer-socials-item'><AiOutlineFacebook size='1.2em'/></li>
              <li className='footer-socials-item'><FiTwitter size='1.2em' /></li>
              <li className='footer-socials-item'><FiInstagram size='1.2em'/></li>
          </ul>
      </div>
      <div className='footer-creator'>Designed and Created by Ahmed McGarry</div>
      <div className="footer-links">©EFFENDICLOTHING2021</div>
    </footer>
  );
};

export default Footer;
