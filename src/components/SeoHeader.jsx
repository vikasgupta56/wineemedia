import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// import { Const } from "@/utils/Constants";

const SeoHeader = ({ meta }) => {
  const router = useRouter();
  // const canonical = `${Const.ClientLink}/${router.asPath?.slice(1)}`;
  return (
    <Head>
      <title>{meta?.title ?? ""}</title>
      <meta name="description" content={meta?.description ?? ""} />
      <meta name="keywords" content={meta?.keywords ?? ""} />
      <meta name="author" content={meta?.author ?? ""} />
      <meta
        name="robots"
        content={
          `${meta?.robots}, max-image-preview:large` ??
          "index,follow, max-image-preview:large"
        }
      />
      {/* <link rel="canonical" href={meta?.canonical ?? canonical} /> */}
      {/* OG Tags */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={meta?.og?.title ?? ""} />
      <meta property="og:description" content={meta?.og?.description ?? ""} />
      {/* <meta property="og:url" content={meta?.canonical ?? canonical} /> */}
      <meta property="og:site_name" content={"WineeMedia"} />
      <meta property="og:image" content={meta?.og?.image ?? ""} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Tag */}
      <meta
        name="twitter:card"
        content={meta?.twitter?.card ?? "summary_large_image"}
      />
      <meta
        name="twitter:title"
        content={meta?.twitter?.title ?? meta?.title}
      />
      <meta
        name="twitter:description"
        content={meta?.twitter?.description ?? meta?.description}
      />
      <meta name="twitter:site" content={"@wineemedia"} /> 
      <meta name="twitter:image" content={meta?.twitter?.image ?? ""} />
      <meta name="twitter:creator" content={"@wineemedia"} />
      <meta charset="UTF-8" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon.png"
      />
      <link rel="apple-touch-icon" href="/favicon.png" />
      {/* <link
        rel="alternate"
        hreflang="en-in"
        href={meta?.canonical ?? canonical}
      /> */}
    </Head>
  );
};

export default SeoHeader;
