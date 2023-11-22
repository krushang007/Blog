import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  function clickHandler(page) {
      setPage(page);
      makeAPICall(page);
      window.scrollTo(0, 0);
  }
  async function makeAPICall(page) {
    try {
        setLoading(true);
      const data = await fetch(`${baseUrl}?page=${page}`);
      const jsonData = await data.json();
      setPosts(jsonData.posts);
      setPage(jsonData.page);
      setTotalPages(jsonData.totalPages);
      setLoading(false);
    } catch (error) {
      setPosts([]);
      setPage(1);
      setTotalPages(null);
      alert(error);
    }
  }
/*   eslint-disable */
  useEffect(() => {
    makeAPICall(page);
  }, []);
/*   eslint-enable */
  const value = {
    page,
    setPage,
    totalPages,
    setTotalPages,
    posts,
    setPosts,
    makeAPICall,
    clickHandler,
    loading,
    setLoading,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
