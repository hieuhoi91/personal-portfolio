import SocialLinks from '../Navbar/SocialLinks/SocialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-center">
        <SocialLinks />
        <p>
          &copy; <span>{new Date().getFullYear()}</span> Hieu Hoi. all rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
