import Description from "@/components/about/description/Description";
import Hero from "@/components/about/hero/Hero";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <Hero />
        <Description />
      </main>
    </>
  );
}