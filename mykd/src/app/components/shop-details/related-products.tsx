import React from "react";
import product_data from "@/data/product-data";
import ShopItem from "../shop/shop-item";

const RelatedProducts = () => {
  const related_prd = product_data.slice(0, 4);
  return (
    <div className="related__product-wrapper">
      <h2 className="related-title">Related Products</h2>
      <div className="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
        {related_prd.map((item) => (
          <div key={item.id} className="col">
            <ShopItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
