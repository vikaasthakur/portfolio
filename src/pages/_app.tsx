import BaseLayout from "@/components/layout/BaseLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Head>
        <title>Vikas Thakur — FrontEnd Developer</title>
        <meta property="og:title" content="Vikas Thakur — FrontEnd Developer" />
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
