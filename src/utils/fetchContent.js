const fetchContent = async (slug) => {
    const baseUrl = "https://dev-golden-quest.pantheonsite.io/wp-json/wp/v2/pages";
  
    try {
      const response = await fetch(`${baseUrl}?slug=${slug}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const data = await response.json();
      if (data.length > 0) {
        return data[0]; 
      } else {
        throw new Error("Page not found.");
      }
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };
  
  export default fetchContent;
  