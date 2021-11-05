import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';

const Navbar = () => {
  const [searchOpened, setSearchOpened] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchOpened = () => {
    setSearchOpened(!searchOpened);
    document.getElementById('search-input')?.focus();
  };

  const handleBlur = (e: any) => {
    if (!document.getElementById('navbar-nav')?.contains(e.target))
      setSearchOpened(false);
  };

  return (
    <>
      <div
        className={`navbar-wrapper ${searchOpened ? 'search-open' : ''}`}
        onClick={handleBlur}
      >
        <nav className="navbar container-l">
          <div
            id="navbar-nav"
            style={{
              transform: showMenu ? 'translateY(-75px)' : 'translate(0)',
              opacity: showMenu ? 0 : 1,
              boxShadow: '0 6px 24px 0 rgb(0 0 0 / 20%)',
            }}
          >
            <div className="nav">
              <div>
                <ul className="list-nostyle list-inline">
                  <li>
                    <button
                      className="btn-chromeless"
                      onClick={() => setShowMenu(true)}
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                  </li>
                  <li className="hide-xl">
                    <a href="/collections/motorcycles-clothes">
                      Motorcycles Clothes
                    </a>
                  </li>
                  <li className="hide-xl">
                    <a href="/collections/casual-clothes">Casual Clothes</a>
                  </li>
                  <li className="hide-xl">
                    <a href="/collections/accessories">Accessories</a>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <Link href="/">
                  <a>
                    <Image
                      width="70"
                      height="70"
                      src="/favicon.ico"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <ul className="list-nostyle list-inline">
                  <li className="hide-xl">
                    <Link href="/experience-center">Experience Center</Link>
                  </li>

                  <li>
                    <a>
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleSearchOpened}
                      className="btn-chromeless"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="search-box">
              <form style={{ height: '100%' }}>
                <input
                  placeholder="SEARCH"
                  id="search-input"
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Menu showMenu={showMenu} theme="light" setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
