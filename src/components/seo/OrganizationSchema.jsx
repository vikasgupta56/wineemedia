import React from "react";

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Hollywood Reporter India",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hollywoodreporterindia.com/thr-logo.png",
      width: "1800px",
      height: "900px",
    },
    url: "https://www.hollywoodreporterindia.com/",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    ></script>
  );
};

export default OrganizationSchema;
