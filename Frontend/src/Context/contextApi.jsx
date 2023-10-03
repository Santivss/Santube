import { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../Utils/api";

export const Context = createContext();

const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("Home");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    //Hace la petición
    fetchSelectedCategoryData(selectedCategories);
  }, [selectedCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      // console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectedCategories,
        setSelectedCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
