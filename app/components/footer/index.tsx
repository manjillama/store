import React from 'react';
import Link from 'next/link';
import Newsletter from '../newsletter';

const Footer = ({
  theme = 'light',
  hideNewsletter = false,
}: {
  theme?: 'light' | 'dark';
  hideNewsletter?: boolean;
}) => (
  <footer className={theme === 'light' ? 'light' : ''}>
    <div className="container-l">{!hideNewsletter && <Newsletter />}</div>
    <br />
    <div className="footer container-l">
      <ul className="list-nostyle">
        <li>
          <Link href="/" passHref>
            <span>YATRI MOTORCYCLES &copy; {new Date().getFullYear()}</span>
          </Link>
        </li>
        <li>
          <Link href="/policies/terms-of-service">Terms &amp; Conditions</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/policies/delivery-returns">Delivery &amp; Returns</Link>
        </li>
      </ul>
      <br />
      <ul className="list-nostyle list-inline socials">
        <li>
          <a
            title="Youtube"
            href="https://www.youtube.com/channel/UCobm2KxuXOFnM-fGLgSDn5A"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a
            title="Instagram"
            href="https://www.instagram.com/yatrimotorcycles/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            title="Twitter"
            href="https://twitter.com/YATRIdesign"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/company/yatrimotorcycles/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            title="Facebook"
            href="https://www.facebook.com/YATRImotorcycles"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
