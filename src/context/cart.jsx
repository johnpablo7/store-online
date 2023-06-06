import { createContext, useEffect, useState } from "react";
import { apiUrl } from "../api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Get Products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}`);
        const data = await response.json();
        // console.log(data);
        setItems(data);
      } catch (error) {
        console.error(`Ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);

  // Get Products By Title
  const [searchByTitle, setSearchByTitle] = useState("");
  // console.log("SearchByTitle:", searchByTitle);

  // Get Products By Category
  const [searchByCategory, setSearchByCategory] = useState("null");

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    // console.log("items:", items);
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByCategory, searchByTitle]);

  // console.log("filteredItems:", filteredItems);

  // Shopping Cart . Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail . Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // MyOrderCart . Open/Close
  const [isOrderCartOpen, setIsOrderCartOpen] = useState(false);
  const openOrderCart = () => setIsOrderCartOpen(true);
  const closeOrderCart = () => setIsOrderCartOpen(false);

  // Shopping Cart . Order
  const [order, setOrder] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItems,

        filteredItems,

        searchByTitle,
        setSearchByTitle,

        searchByCategory,
        setSearchByCategory,

        count,
        setCount,

        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,

        productToShow,
        setProductToShow,

        cartProducts,
        setCartProducts,

        isOrderCartOpen,
        openOrderCart,
        closeOrderCart,

        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
