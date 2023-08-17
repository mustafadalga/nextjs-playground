import { memo, useState } from "react";

let deneme = 0;

function ShippingForm ({ onSubmit }) {
    const [ count, setCount ] = useState(1);
    deneme++;
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    function handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const orderDetails = {
            ...Object.fromEntries(formData),
            count
        };
        onSubmit(orderDetails);
    }

    console.log("render", deneme);
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <b>
                    Note: <code>ShippingForm</code> is artificially slowed down!
                </b>
            </p>
            <label>
                Number of items:
                <button type="button" onClick={() => setCount(count - 1)}>
                    –
                </button>
                {count}
                <button type="button" onClick={() => setCount(count + 1)}>
                    +
                </button>
            </label>
            <label>
                Street:
                <input name="street"/>
            </label>
            <label>
                City:
                <input name="city"/>
            </label>
            <label>
                Postal code:
                <input name="zipCode"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default memo(ShippingForm);
