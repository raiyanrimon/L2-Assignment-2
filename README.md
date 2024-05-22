## E-commerce Express Application with TypeScript and MongoDB

This project is an Express.js application developed with TypeScript and MongoDB, providing endpoints for managing products and orders in an e-commerce system.

Follow the instructions below to set up and run the application locally.

# Prerequisites

Before running the application, make sure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure MongoDB is installed and running locally)

## Installation

1. Clone the git repo and install node modules

```bash
git clone https://github.com/raiyanrimon/L2-Assignment-2.git
cd ./L2-Assignment-2
npm i
```

## API Reference

#### Test API

```
GET
```

# Product API route

### Product Data Types:

```typescript
name: string;
description: string;
price: number;
category: string;
tags: string[];
variants: [{
  type: string;
  value: string;
}];
inventory: {
  quantity: number;
  inStock: boolean };
```

| **Operation**               | **API**                                                           | **Type** |
| :-------------------------- | :---------------------------------------------------------------- | :------- |
| `Create Product`            | `https://blood-bound.vercel.app/api/products`                     | `POST`   |
| `Get Products`              | `https://blood-bound.vercel.app/api/products`                     | `GET`    |
|                             |                                                                   |          |
| `Get Single Product`        | `https://blood-bound.vercel.app/api/products/${productId}`        | `GET`    |
| `Delete Product`            | `https://blood-bound.vercel.app/api/products/${productId}`        | `DELETE` |
| `Update Product`            | `https://blood-bound.vercel.app/api/products/${productId}`        | `PUT`    |
| `Get Product by SearchTerm` | `https://blood-bound.vercel.app/api/products?searchTerm=${value}` | `GET`    |

# Order API route

### Order Data Types:

```typescript
email: string;
productId: string;
price: number;
quantity: number;
```

| **Operation**         | **API**                                               | **Type** |
| :-------------------- | :---------------------------------------------------- | :------- |
| `Create Order`        | `https://blood-bound.vercel.app/api/orders`           | `POST`   |
| `Get Orders`          | `https://blood-bound.vercel.app/api/products`         | `GET`    |
|                       |
| `Get Order by Email ` | `https://blood-bound.vercel.app/api/orders?email=${}` | `GET`    |
