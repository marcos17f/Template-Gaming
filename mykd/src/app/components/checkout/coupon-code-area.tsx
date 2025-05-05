
'use client'
import { useState } from "react"

export default function CouponCodeArea() {
    const [openForm, setOpenForm] = useState(false)
    return (
        <div className="coupon__code-wrap">
            <div className="coupon__code-info">
                <span><i className="far fa-bookmark"></i> Have a coupon?</span>
                <a onClick={() => setOpenForm(!openForm)} className="pointer" id="another-element">
                    Click here to enter your code
                </a>
            </div>
            {openForm && (
                <form action="#" className="coupon__code-form">
                    <p>If you have a coupon code, please apply it below.</p>
                    <input type="text" placeholder="Coupon code" />
                    <button type="submit" className="btn">Apply coupon</button>
                </form>
            )}
        </div>
    )
}
