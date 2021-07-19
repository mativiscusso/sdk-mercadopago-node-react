import React, { useEffect, useState } from "react";
import useScript from "../../hooks/useScript";
import { formConfig } from "./formConfig";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useMercadoPago from "../../hooks/useMercadoPago";

const INITIAL_STATE = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
};

export default function MercadoPagoForm() {
    const [state, setState] = useState(INITIAL_STATE);
    const resultPayment = useMercadoPago();

    // const { MercadoPago } = useScript(
    //     "https://sdk.mercadopago.com/js/v2",
    //     "MercadoPago"
    // );

    // useEffect(() => {
    //     if (MercadoPago) {
    //         const mp = new MercadoPago(import.meta.env.VITE_PUBLIC_KEY_MP);
    //         const cardForm = mp.cardForm({
    //             amount: "100.5",
    //             autoMount: true,
    //             form: formConfig,
    //             callbacks: {
    //                 onFormMounted: (error) => {
    //                     if (error)
    //                         return console.warn(
    //                             "Form Mounted handling error: ",
    //                             error
    //                         );
    //                 },
    //                 onIssuersReceived: (error, issuers) => {
    //                     console.log("hello", issuers);
    //                     if (error)
    //                         return console.warn(
    //                             "issuers handling error: ",
    //                             error
    //                         );
    //                 },
    //                 onSubmit: (event) => {
    //                     event.preventDefault();

    //                     const {
    //                         paymentMethodId: payment_method_id,
    //                         issuerId: issuer_id,
    //                         cardholderEmail: email,
    //                         amount,
    //                         token,
    //                         installments,
    //                         identificationNumber,
    //                         identificationType,
    //                     } = cardForm.getCardFormData();

    //                     fetch(
    //                         `${
    //                             import.meta.env.VITE_URL_PAYMENT_MP
    //                         }/process-payment`,
    //                         {
    //                             // entry point backend
    //                             method: "POST",
    //                             headers: {
    //                                 "Access-Control-Allow-Origin": "*",
    //                                 "Access-Control-Request-Method":
    //                                     "GET, POST, DELETE, PUT, OPTIONS",
    //                                 "Content-Type": "application/json",
    //                             },
    //                             body: JSON.stringify({
    //                                 token,
    //                                 issuer_id,
    //                                 payment_method_id,
    //                                 transaction_amount: 1000,
    //                                 installments: Number(installments),
    //                                 description: "Descripción del producto",
    //                                 payer: {
    //                                     email,
    //                                     identification: {
    //                                         type: identificationType,
    //                                         number: identificationNumber,
    //                                     },
    //                                 },
    //                             }),
    //                         }
    //                     )
    //                         .then((res) => res.json())
    //                         .then((data) => setResultPayment(data))
    //                         .catch((err) => {
    //                             setResultPayment(err);
    //                         });
    //                 },
    //                 onFetching: (resource) => {
    //                     // Animate progress bar
    //                     const progressBar =
    //                         document.querySelector(".progress-bar");
    //                     progressBar.removeAttribute("value");

    //                     return () => {
    //                         progressBar.setAttribute("value", "0");
    //                     };
    //                 },
    //             },
    //         });
    //     }
    // }, [MercadoPago]);

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.dataset.name || e.target.name]: e.target.value,
        });
    };

    const handleInputFocus = (e) => {
        setState({ ...state, focus: e.target.dataset.name || e.target.name });
    };

    return (
        <div className="container">
            <Card
                cvc={state.cvc}
                expiry={state.cardExpirationMonth + state.cardExpirationYear}
                name={state.cardholderName}
                number={state.cardNumber}
                focused={state.focus}
                brand={state.issuer}
            />

            <form id="form-checkout">
                <div className="form-control">
                    <input
                        type="tel"
                        name="cardNumber"
                        id="form-checkout__cardNumber"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="tel"
                        name="cardExpirationMonth"
                        id="form-checkout__cardExpirationMonth"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cardExpirationYear"
                        id="form-checkout__cardExpirationYear"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="tel"
                        name="cvc"
                        id="form-checkout__securityCode"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="cardholderName"
                        id="form-checkout__cardholderName"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="email"
                        name="cardholderEmail"
                        id="form-checkout__cardholderEmail"
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className="form-control">
                    <select
                        name="issuer"
                        id="form-checkout__issuer"
                        on
                    ></select>
                    <select
                        name="identificationType"
                        id="form-checkout__identificationType"
                    ></select>
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        name="identificationNumber"
                        id="form-checkout__identificationNumber"
                    />
                </div>
                <div className="form-control">
                    <select
                        name="installments"
                        id="form-checkout__installments"
                    ></select>
                </div>
                <div className="form-control">
                    <button type="submit" id="form-checkout__submit">
                        Pagar
                    </button>
                </div>
                <progress value="0" className="progress-bar">
                    Cargando...
                </progress>
            </form>
            {resultPayment && <p>{JSON.stringify(resultPayment)}</p>}
        </div>
    );
}
