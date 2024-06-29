import React from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../features/cards/cardSlice";

const ListItems = ({ product }) => {
    const { id, title, body, img } = product;
    
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        // console.log(id)
        dispatch(deleteData(id))
    }


  return (
    <div className="parent">
      <div className="card ">
        <div className="card-body">
          <button onClick={() => handleDelete(product.id)} className="btn btn-sm btn-danger">Delete</button>
          <h2 className="card-text" style={{ fontSize: 18 }}>
            {title}
          </h2>
          <h3 className="card-text" style={{ fontSize: 12 }}>
            {body}
          </h3>
        </div>
        <img
          // src={img}
          src="https://tse4.mm.bing.net/th?id=OIP.BXsxvnDMc7nQyCkgX5DgLwHaEK&pid=Api&P=0&h=180"
          className="card-img-top w-50"
          alt="No Image"
        />
      </div>
    </div>
  );
};

export default ListItems;
