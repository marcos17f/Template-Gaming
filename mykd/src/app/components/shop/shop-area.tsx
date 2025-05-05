'use client';
import React from 'react';
import ShopSidebar from './shop-sidebar';
import product_data from '@/data/product-data';
import ShopItem from './shop-item';
import usePagination from '@/hooks/use-pagination';
import Pagination from '../ui/pagination';

const ShopArea = () => {
  const {currentItems,handlePageClick,pageCount} = usePagination(product_data,6);
  return (
    <section className="shop-area">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-11 order-2 order-lg-0">
                {/* sidebar start */}
                <ShopSidebar/>
                {/* sidebar end */}
            </div>
            <div className="col-xl-9 col-lg-8 col-md-11">
                <div className="shop__top-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-sm-6">
                            <div className="shop__showing-result">
                                <p>Showing 1 - 9 of 15 results</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="shop__ordering">
                                <select name="orderby" className="orderby">
                                    <option defaultValue="Default sorting">Default sorting</option>
                                    <option defaultValue="Sort by popularity">Sort by popularity</option>
                                    <option defaultValue="Sort by average rating">Sort by average rating</option>
                                    <option defaultValue="Sort by latest">Sort by latest</option>
                                    <option defaultValue="Sort by latest">Sort by latest</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1">
                  {currentItems.map((item) => (
                    <div key={item.id} className="col">
                        <ShopItem item={item} />
                    </div>
                  ))}
                </div>
                <div className="pagination__wrap react-pagination">
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default ShopArea;