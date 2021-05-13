import React from "react";
import "../css/ProductDetails.css";
import { useParams } from "react-router-dom";
import { UseProductDetails } from "../Hooks/UseProductDetails";

export const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const ProductDetail = UseProductDetails(id);
  return (
    <div class="productdetail-container">
      <div class="imagedetail-container">
        <div class="image-container">
          <img class="img-detail" src={`${ProductDetail.image_url}`} />
        </div>
      </div>

      <div class="details-container">
        <h1>{ProductDetail.title}</h1>
        <span>
          <div>
              <em>{ProductDetail.author}</em>
            <em>{ProductDetail.genre}</em>
          </div>
        </span>

        {/* <div>
          {ProductDetail.book_format.map(function (format, index) {
            return <div>{format[index]}</div>;
          })}
        </div> */}

        <div>
          <p>{ProductDetail.description}</p>
        </div>
      </div>
    </div>
  );
};
