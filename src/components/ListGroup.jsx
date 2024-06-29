import React, { useEffect, useState } from "react";
import ListItems from "./ListItems";
import { useDispatch, useSelector } from "react-redux";
import { getCardData } from "../features/cards/cardSlice";
import Pagination from "./Pagination/Pagination";

const ListGroup = () => {
  const { allProducts } = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  const [ currentPage, setCurrentPage ] = useState(1);

    const [ pageData, setPageData ] = useState(6);
    
    const lastIndex = currentPage * pageData

    const firstIndex = lastIndex - pageData
    
    const currentCards = allProducts.slice(firstIndex, lastIndex)
    
    console.log(currentCards)

  useEffect(() => {
    dispatch(getCardData());
  }, []);

  return (
    <div class="container">
      <div class="row">
        <div class="col col-3">
          {currentCards.map((product) => (
            <ListItems key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default ListGroup;
