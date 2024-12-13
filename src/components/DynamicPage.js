import React, { useEffect, useState } from "react";
import fetchContent from "../utils/fetchContent";

const DynamicPage = ({ slug }) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchContent(slug);
        setContent(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadContent();
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{content.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.content.rendered }} />
    </div>
  );
};

export default DynamicPage;
