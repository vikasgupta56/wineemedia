import React from "react";

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wineemedia",
    logo: {
      "@type": "ImageObject",
      url: "https://www.wineemedia.com/favicon.png",
      width: "1800px",
      height: "900px",
    },
    url: "https://www.wineemedia.com/",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    ></script>
  );
};

export default OrganizationSchema;
