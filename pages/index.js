import Head from "next/head";
import Hero from "@/components/home/hero/Hero";
import Details from "@/components/home/details/Details";
import Gallery from "@/components/home/gallery/Gallery";
import Services from "@/components/home/services/Services";
import Vision from "@/components/home/vision/Vision";
import SlidingText from "@/components/common/slidingText/SlidingText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio</title>
        <meta name="description" content="Photography Studio, based in Rome, since 2012." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="/logo.svg" />
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-touch-icon-precomposed.png"
        />

        <meta name="application-name" content="Studio" />
        <meta name="author" content="Maela" />
        <link rel="author" href="https://maelacudini.com" />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="Next.js,React,JavaScript" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <link rel="canonical" href="https://addwebsite" />
        <link rel="alternate" hrefLang="en-US" href="https://addwebsite/en-US" />
        <meta name="robots" content="noindex, nofollow, nocache" />
        <link rel="manifest" href="https://addwebsite/manifest.json" />

        <meta property="og:title" content="Studio" />
        <meta property="og:description" content="Photography Studio, based in Rome, since 2012." />
        <meta property="og:url" content="https://addwebsite" />
        <meta property="og:site_name" content="Studio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:url" content="https://addwebsite/opengraph-image.png" />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:alt" content="Studio" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site:id" content="1467726470533754880" />
        <meta name="twitter:creator" content="@nextjs" />
        <meta name="twitter:creator:id" content="1467726470533754880" /> */}
        <meta name="twitter:title" content="Studio" />
        <meta name="twitter:description" content="Photography Studio, based in Rome, since 2012." />
        <meta name="twitter:image" content="https://addwebsite/twitter-image.png" />
      </Head>
      <main>
        <Hero />
        <Details />
        <Gallery />
        <Services />
        <Vision />
        <SlidingText />
      </main>
    </>
  );
}
