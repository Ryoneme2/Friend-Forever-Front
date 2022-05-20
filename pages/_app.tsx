import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SEO_DATA } from "../configs/staticData";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* title */}
        <title>{SEO_DATA.title}</title>
        {/* icon */}
        <link rel="icon" href={SEO_DATA.tabimage} />
        {/* shortcut icon */}
        <link rel="shortcut icon" href={SEO_DATA.tabimage} />
        {/* meta:og */}
        <meta property="og:title" content={SEO_DATA.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_DATA.url} />
        <meta property="og:image" content={SEO_DATA.image} />
        <meta property="og:image:width" content={SEO_DATA.width} />
        <meta property="og:image:height" content={SEO_DATA.height} />
        <meta property="og:description" content={SEO_DATA.description} />
        <meta property="og:locate" content={SEO_DATA.locate} />
        <meta property="og:site_name" content={SEO_DATA.site_name} />
        <meta property="og:locale" content={SEO_DATA.locale} />
        <meta property="og:locale:alternate" content={SEO_DATA.locale_alternate} />
        {/* meta:twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_DATA.title} />
        <meta name="twitter:description" content={SEO_DATA.description} />
        <meta name="twitter:image" content={SEO_DATA.image} />
        <meta name="twitter:image:alt" content={SEO_DATA.description} />
        <meta name="twitter:image:width" content={SEO_DATA.width} />
        <meta name="twitter:image:height" content={SEO_DATA.height} />
        {/* meta:google */}
        <meta name="description" content={SEO_DATA.description} />
        <meta name="keywords" content={SEO_DATA.keywords} />
        <meta name="author" content={SEO_DATA.author} />
        <meta name="copyright" content={SEO_DATA.copyright} />
        <meta name="robots" content={SEO_DATA.robots} />
        <meta name="googlebot" content={SEO_DATA.googlebot} />
        <meta name="google" content={SEO_DATA.google} />
        <meta name="google-site-verification" content={SEO_DATA.google_site_verification} />
      </Head>

    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default MyApp
