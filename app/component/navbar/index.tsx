import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar container-l">
    <div className="nav">
      <div>
        <ul className="list-nostyle list-inline">
          <li>
            <button className="btn-chromeless">
              <i className="fas fa-bars"></i>
            </button>
          </li>
          <li>
            <Link href="">Clothing</Link>
          </li>
          <li>
            <Link href="">Accessories</Link>
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
        <Image width="80" height="80" src="/favicon.ico" alt="Logo" />
      </div>
      <div>
        <ul className="list-nostyle list-inline">
          <li>
            <Link href="/search">
              <a>
                <i className="fas fa-search"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
