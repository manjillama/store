import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';

const Menu = ({
  theme = 'dark',
  showMenu,
  setShowMenu,
}: {
  theme: 'dark' | 'light';
  showMenu: boolean;
  setShowMenu: Function;
}) => {
  useEffect(() => {
    if (showMenu) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, []);

  return (
    <CSSTransition in={showMenu} timeout={100} classNames="fade" unmountOnExit>
      <div className={`f-menu ${theme === 'light' && 'light'}`}>
        <div className="container-md">
          <div className="menu-header">
            <Link href="/">
              <a className="logo-wrapper">
                <img
                  alt="logo"
                  style={{ display: 'block', width: 144 }}
                  src="/assets/logo.png"
                />
              </a>
            </Link>
            <button
              className="btn-chromeless"
              onClick={() => setShowMenu(false)}
            >
              <img
                src={`${
                  theme === 'dark' ? '/assets/close.svg' : '/assets/close.png'
                }`}
                alt="Close button"
              />
            </button>
          </div>
          <div className="menu-body">
            <ul className="list-nostyle">
              <li>
                <a href="/collections/helmets">Helmets</a>
              </li>
              <li>
                <a href="/collections/casual-clothes">Casual Clothes</a>
              </li>
              <li>
                <a href="/collections/accessories">Accessories</a>
              </li>
            </ul>
            <ul className="list-nostyle">
              {/* <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/vision">Vision</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li> */}
              <li>
                <Link href="/experience-center">Experience Center</Link>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu-footer">
            <p>YATRI MOTORCYCLES &copy; 2021</p>
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
        </div>
      </div>
    </CSSTransition>
  );
};

export default Menu;
