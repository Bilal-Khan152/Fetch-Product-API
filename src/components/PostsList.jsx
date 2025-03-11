import React, { useEffect, useState } from "react";
import Card from "./Card";

function PostsList() {
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);  
  const limit = 5;  

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
        );
        const data = await response.json();
        setPostsList(data.products);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]); // Re-fetch when 'page' changes

  if (loading)
    return (
      <div className="w-10 h-10 mt-[220px] mx-auto border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2 className="text-white italic text-5xl text-center py-8 font-bold">
        Our Products
      </h2>
      <ul className="flex flex-wrap gap-4 justify-center">
        {postsList.map((data) => (
          <Card
            key={data.id}
            image={data.thumbnail}
            title={data.title}
            desc={data.description}
          />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 cursor-pointer"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-white text-lg font-bold">Page {page}</span>
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PostsList;
