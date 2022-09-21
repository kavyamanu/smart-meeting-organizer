import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  additionalTitle?: string;
};

const Layout = ({ children, additionalTitle = "" }: Props) => (
  <div>
    <Head>
      <title>Smart Meeting Organizer | {additionalTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1>Smart Meeting Organizer</h1>
    </header>
    {children}
  </div>
);

export default Layout;
