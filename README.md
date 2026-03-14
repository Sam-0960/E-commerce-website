## Overview

This application simulates the core functionality of an online store. Users can explore products, add items to their cart, and manage cart contents in real time. The interface updates dynamically without page reloads using React’s component system and routing capabilities.

The goal of the project is to practice building **scalable frontend applications using modern React practices**.

---

## Features

* Product listing with dynamic rendering
* Product detail pages
* Add items to cart
* Remove items from cart
* Real-time cart item count in navigation
* Global cart state management using Context API
* Client-side navigation using React Router
* Modular and reusable component architecture

---

## Tech Stack

Frontend

* React
* JavaScript (ES6+)
* React Router
* Context API
* CSS

Development Tools

* Node.js
* npm
* Vite / React Scripts

---

## Application Architecture

The application follows a **component-based architecture** where UI elements are broken into reusable components. Shared application state (cart data) is managed globally using the Context API.

Key architectural ideas used in the project:

* Separation of concerns between UI, state, and data
* Reusable components for scalability
* Centralized state management for cross-component communication
* Client-side routing for seamless user navigation

---

## Project Structure

```
src
│
├── components
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│
├── pages
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│
├── context
│   └── CartContext.jsx
│
├── data
│   └── products.js
│
├── App.jsx
└── main.jsx
```

---

## How It Works

1. The **Home page** displays all available products.
2. Each product is rendered through a reusable `ProductCard` component.
3. Users can add items to their cart.
4. Cart data is stored in a **global state using Context API**.
5. The **Navbar dynamically updates** the number of items in the cart.
6. The **Cart page displays all selected items** and allows removal.

---

## Learning Outcomes

Through this project, the following concepts were explored:

* Building scalable UI using **React component architecture**
* Managing shared application state with **Context API**
* Implementing **client-side routing** with React Router
* Designing reusable UI components
* Structuring React applications for maintainability

---

## Future Improvements

* Backend integration (Node.js + Express)
* Database integration (MongoDB / PostgreSQL)
* Authentication system
* Payment gateway integration
* Product search and filtering
* Order management system



## Author

**Samarth**
Computer Science Engineering Student
PES University


