import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "" }: Props) => (
  <div>
    <Head>
      <title>Smart Meeting Organizer | {title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 text-center">
        Smart Meeting Organizer
      </h1>
    </header>
    <main className="min-w-24 p-6 flex justify-center">{children}</main>
  </div>
);

export default Layout;
