import { useCallback } from "react";
import ShippingForm from "./ShippingForm.js";

let renderr = 0;
export default function ProductPage ({ productId, referrer, theme }) {
    const handleSubmit = useCallback((orderDetails) => {
        console.log("değişti");
    }, [ productId, referrer ])
    renderr++;
    console.log("Product Page", renderr)
    return (
        <div className={theme}>
            <ShippingForm onSubmit={handleSubmit}/>
        </div>
    );
}
