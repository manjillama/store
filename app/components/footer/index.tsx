import React from "react";
import Link from "next/link";
import { APP, SOCIALS } from "../../constants";

const Footer = ({
  theme = "light"
}: {
  theme?: "light" | "dark";
}) => (
  <footer className={theme === "light" ? "light" : ""}>
    <div className="footer container-l">
      <ul className="list-nostyle">
        <li>
          <Link href="/" passHref>
            <span>{APP.NAME} &copy; {new Date().getFullYear()}</span>
          </Link>
        </li>
        <li>
          <Link href="/policies">Privacy &amp; Policy</Link>
        </li>
        <li>
          <Link href="/policies#delivery-returns">Delivery &amp; Returns</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <br />
      <ul className="list-nostyle list-inline socials">
        {
          SOCIALS.map((social, index) => (
            <li key={index}>
              <a title={social.title} href={social.href} target="_blank" rel="noreferrer">
                <i className={social.icon}></i>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  </footer>
);

export default Footer;
