'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import RelatedProducts from './related-products';
import ShopDetailsImages from './shop-details-images';
import { IProduct } from '@/types/product-type';

const ShopDetailsArea = ({product}:{product:IProduct}) => {
  const [model,setModel] = useState<string>('Gat');
  const [incValue,setIncValue] = useState<number>(1);

//hanle increment 
const handleIncrement = (value:string) => {
    if(value === 'inc'){
        setIncValue(prev => prev + 1)
    }
    else {
        if(incValue > 1){
            setIncValue(prev => prev - 1) 
        }
    }
}
  return (
    <>
       <section className="shop-area shop-details-area">
          <div className="container">
              <div className="row">
                  {/* shop details images  */}
                  <ShopDetailsImages/>
                  {/* shop details images  */}
                  <div className="shop__details-content">
                      <div className="shop__details-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span className="rating-count">( 3 Customer Review )</span>
                      </div>
                      <h2 className="title">game controller</h2>
                      <div className="shop__details-price">
                          <span className="amount">${product.price.toFixed(2)} <span className="stock-status">- {product.status}</span></span>
                      </div>
                      <div className="shop__details-short-description">
                          <p>{product.description}</p>
                      </div>
                      <div className="shop__details-model d-flex align-items-center">
                          <p className="model m-0">Model:</p>
                          <ul className="list-wrap d-flex align-items-center">
                              <li onClick={()=> setModel('Gat')} className={model=== 'Gat'?'active':''}>Gat</li>
                              <li onClick={()=> setModel('dat4')} className={model=== 'dat4'?'active':''}>dat4</li>
                              <li onClick={()=> setModel('rt30')} className={model=== 'rt30'?'active':''}>rt30</li>
                          </ul>
                      </div>
                      <div className="shop__details-qty">
                          <div className="cart-plus-minus d-flex flex-wrap align-items-center">
                              <form className="quantity num-block">
                                  <input type="text" className="in-num" value={incValue} readOnly />
                                  <div className="qtybutton-box">
                                      <span onClick={()=> handleIncrement('inc')} className="plus"><i className="fas fa-angle-up"></i></span>
                                      <span onClick={()=> handleIncrement('dec')} className="minus dis"><i className="fas fa-angle-down"></i></span>
                                  </div>
                              </form>
                              <button className="shop__details-cart-btn">add to cart</button>
                          </div>
                      </div>
                      <div className="shop__details-bottom">
                          <div className="posted_in">
                              <b>Categories :</b>
                              <Link href="/shop">Gamdias,</Link>
                              <Link href="/shop">Apple,</Link>
                              <Link href="/shop">Huawei</Link>
                          </div>
                          <div className="tagged_as">
                              <b>Tags :</b>
                              <Link href="/shop">Silver,</Link>
                              <Link href="/shop">Pink,</Link>
                              <Link href="/shop">Green</Link>
                          </div>
                          <div className="product_share">
                              <b>Share :</b>
                              <Link href="/shop"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="/shop"><i className="fab fa-twitter"></i></Link>
                              <Link href="/shop"><i className="fab fa-instagram"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <div className="product__desc-wrap">
                          <ul className="nav nav-tabs" id="descriptionTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true" tabIndex={-1}>Description</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false" tabIndex={-1}>Additional Information</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false" tabIndex={-1}>Reviews (0)</button>
                              </li>
                          </ul>
                          <div className="tab-content" id="descriptionTabContent">
                              <div className="tab-pane animation-none fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                  <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text
                                  ever since the 1500s.</p>
                                  <p>Do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                              </div>
                              <div className="tab-pane animation-none fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                  <table className="table table-sm">
                                      <tbody>
                                          <tr>
                                              <th scope="row">General</th>
                                              <td>PS5 Digital Platform</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">Technical Information</th>
                                              <td>Qualcomm Snapdragon XR2</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">Display</th>
                                              <td>3664 x 1920</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">RAM & Storage</th>
                                              <td>8GB/256GB</td>
                                          </tr>
                                          <tr>
                                              <th scope="row">Included</th>
                                              <td>PS5 VR Streaming Assistant</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              <div className="tab-pane animation-none fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                  <div className="product__desc-review">
                                      <div className="product__desc-review-title mb-15">
                                          <h5 className="title">Customer Reviews (0)</h5>
                                      </div>
                                      <div className="left-rc">
                                          <p>No reviews yet</p>
                                      </div>
                                      <div className="right-rc">
                                          <Link href="#">Write a review</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="related__product-area">
                  {/* related products start */}
                  <RelatedProducts/>
                  {/* related products end */}
              </div>
          </div>
      </section>
    </>
  );
};

export default ShopDetailsArea;