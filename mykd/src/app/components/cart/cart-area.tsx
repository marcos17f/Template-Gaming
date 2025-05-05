'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function CartArea() {
   const [quantity, setQuantity] = useState(1);
   //hanle increment 
   const handleIncrement = (value: string) => {
      if (value === 'inc') {
         setQuantity(prev => prev + 1)
      }
      else {
         if (quantity > 1) {
            setQuantity(prev => prev - 1)
         }
      }
   }
   return (
      <div className="cart__area team-bg section-pt-120 section-pb-120" style={{ backgroundImage: `url(/assets/img/bg/team_bg.jpg)` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <table className="table cart__table">
                     <thead>
                        <tr>
                           <th className="product__thumb">&nbsp;</th>
                           <th className="product__name">Product</th>
                           <th className="product__price">Price</th>
                           <th className="product__quantity">Quantity</th>
                           <th className="product__subtotal">Subtotal</th>
                           <th className="product__remove">&nbsp;</th>
                        </tr>
                     </thead>
                     <tbody>

                        <tr>
                           <td className="product__thumb">
                              <Link href="/shop-details">
                                 <Image src="/assets/img/products/product01.jpg" alt="prd-img" width={70} height={72} />
                              </Link>
                           </td>
                           <td className="product__name">
                              <Link href="/shop-details">Antiaging and Longevity</Link>
                           </td>
                           <td className="product__price">$13.00</td>
                           <td className="product__quantity">
                              <div className="shop__details-qty">
                                 <form action="#" className="quantity num-block">
                                    <input type="text" className="in-num" value={quantity} readOnly />
                                    <div className="qtybutton-box">
                                       <span onClick={()=> handleIncrement('inc')} className="plus"><i className="fas fa-angle-up"></i></span>
                                       <span onClick={()=> handleIncrement('dec')} className="minus dis"><i className="fas fa-angle-down"></i></span>
                                    </div>
                                 </form>
                              </div>
                           </td>
                           <td className="product__subtotal">$13.00</td>
                           <td className="product__remove">
                              <a href="#">×</a>
                           </td>
                        </tr>

                        <tr>
                           <td colSpan={6} className="cart__actions">
                              <form action="#" className="cart__actions-form">
                                 <input type="text" placeholder="Coupon code" />
                                 <button type="submit" className="btn">Apply coupon</button>
                              </form>
                              <div className="update__cart-btn text-end f-right">
                                 <button type="submit" className="btn">Update cart</button>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className="col-lg-4">
                  <div className="cart__collaterals-wrap">
                     <h2 className="title">Cart totals</h2>
                     <ul className="list-wrap">
                        <li>Subtotal <span>$32.00</span></li>
                        <li>Total <span className="amount">$32.00</span></li>
                     </ul>
                     <Link href="/checkout" className="btn">Proceed to checkout</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
