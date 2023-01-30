/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Footer from "../footer";

export default function Wrapper({
  children,
  theme = "light",
  hideNewsletter,
}: {
  theme?: "dark" | "light";
  children: JSX.Element[] | JSX.Element;
  hideNewsletter?: boolean;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: theme === "dark" ? "#000" : "#fff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "1rem 0",
          // boxShadow: '0px 1px 0px rgb(0 0 0 / 8%)',
        }}
      >
        <Link href="/" passHref>
          <img
            width="100"
            style={{ cursor: "pointer" }}
            src="/assets/logo.png"
            alt="logo"
          />
        </Link>
      </div>

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%" }}>{children}</div>
      </div>

      <Footer
        theme={`${theme === "dark" ? "dark" : "light"}`}
        hideNewsletter={hideNewsletter}
      />
    </div>
  );
}
