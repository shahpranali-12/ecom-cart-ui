# VibeCommerce (Full-Stack E-Commerce Cart)

> A complete full-stack e-commerce shopping cart application built with React, Node.js, and Express. This project demonstrates core e-commerce functionalities, including product display, cart management, and a mock checkout process.


---


## 📸 Screenshots

Here is a preview of the application:

| Product Page | Cart & Checkout |
| :---: | :---: |
| ![Product Page](./images/screenshot-1.png) | ![Cart & Checkout Modal](./images/screenshot-2.png) |(./images/screenshot-3.png)


---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js, Express
* **API Client:** Axios
* **Database:** In-memory JS array (for demo purposes)

---

## 🚀 Features

* **Product Listing:** Fetches and displays a grid of available products from the backend.
* **Add to Cart:** Users can add products to their shopping cart.
* **Dynamic Cart:** View all items in the cart, update quantities, and remove items.
* **Real-Time Totals:** The cart total updates automatically.
* **Mock Checkout:** A checkout form captures user details and simulates an order completion with a receipt modal.
* **Full-Stack Integration:** A RESTful API connects the React frontend to the Node.js backend.

---



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
