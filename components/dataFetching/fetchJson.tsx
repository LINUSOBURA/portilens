import { useState, useEffect } from "react";

const DataFetchingComponent = () => {
  const [strengths, setStrengths] = useState([]); // Initialize the state with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/sampleData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData); // Check what is returned from the fetch

        Object.entries(jsonData).forEach(([key, value]) => {
          if (value.strengths) {
            setStrengths((prevStrengths) => [
              ...prevStrengths,
              ...value.strengths,
            ]);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return strengths;
};

export default DataFetchingComponent;
