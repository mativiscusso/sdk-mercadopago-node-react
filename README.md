# INTEGRACION PASARELA DE PAGO

### Mercado Pago, Node y React

Integracion vía SDK de la pasarela de pago Mercado Pago con React JS para la UI y Node JS para el backend

#### ¿Cómo lo uso? 💻

1- Clonar el repositorio.

2- Crear y configurar el archivo `.env.local` en la carpeta _client_, las claves necesarias para el funcionamiento de la integracion.

-   PUBLIC_KEY: Llave provista por Mercado Pago
-   URL_PAYMENT_MP: Entry point hacia donde se hara el request desde la UI. En dicho **entry point** estara implementada la logica de verificacion del pago.

3- Crear y configurar dentro del archivo `.env` en la carpeta _server_, las claves necesarias para el funcionamiento de la integracion.

-   ACCESS_TOKEN: Llave provista por Mercado Pago

4- Instalar las dependencias en ambas carpetas (_client y server_).

5- Correr el **servidor** con `npm start` o `yarn start` y la **UI** con `npm run dev` o `yarn dev` cada uno dentro de sus respectivas carpetas.

#### Referencias 📑

-   **Entry point**: URL en el servidor que recibira, via POST desde la UI, la data necesaria. Por ejemplo: http://localhost:4000/process-payment

-   **ACCESS_TOKEN y PUBLIC_KEY**: Las podes encontrar en tu cuenta, aqui https://www.mercadopago.com.ar/developers/panel/credential

-   **Response Mercado Pago** : El objeto que devuelve el resultado de la operación de la integración puede contener multiples propiedades. Las encontrás aqui https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/handling-responses

-   **Tarjetas de Pruebas**: Podes testear la integración con las tarjetas que provee Mercado Pago en su documentación.

| Tarjeta          | Numero              | Código CVC | Fecha vto. |
| ---------------- | ------------------- | ---------- | ---------- |
| Mastercard       | 5031 7557 3453 0604 | 123        | 11/25      |
| Visa             | 4509 9535 6623 3704 | 123        | 11/25      |
| American Express | 3711 803032 57522   | 1234       | 11/25      |

Para mas info sobre test, ingresá aqui https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/testing

-   **Documentación oficial Mercado Pago**: https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/introduction

-   **Librería react-credit-cards**: Link hacia la documentación oficial del paquete utilizado en la UI de la tarjeta de crédito https://www.npmjs.com/package/react-credit-cards

#### Contribuciones 🤝

El proyecto está realizado para que sea utilizado y mejorado abiertamente por quien lo considere necesario.
Si considerás que tenés una mejora, no dudes en dejar tu `pull request`
