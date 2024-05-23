## E-commerce Express Application with TypeScript and MongoDB

This project is an Express.js application developed with TypeScript and MongoDB, providing endpoints for managing products and orders in an e-commerce system.

Follow the instructions below to set up and run the application locally.

# Prerequisites

Before running the application, make sure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure MongoDB is installed and running locally)

## Configuration

Before running the application, configure the MongoDB connection string in the app/config.ts file:

```bash
DB_URL=mongodb+srv://assignment2:assignment2@cluster0.hif0lwq.mongodb.net/assignment-2?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

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
https://l2-assignment-2-theta.vercel.app/
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

| **Operation**               | **API**                                                                     | **Type** |
| :-------------------------- | :-------------------------------------------------------------------------- | :------- |
| `Create Product`            | `https://l2-assignment-2-theta.vercel.app/api/products`                     | `POST`   |
| `Get Products`              | `https://l2-assignment-2-theta.vercel.app/api/products`                     | `GET`    |
|                             |                                                                             |          |
| `Get Single Product`        | `https://l2-assignment-2-theta.vercel.app/api/products/${productId}`        | `GET`    |
| `Delete Product`            | `https://l2-assignment-2-theta.vercel.app/api/products/${productId}`        | `DELETE` |
| `Update Product`            | `https://l2-assignment-2-theta.vercel.app/api/products/${productId}`        | `PUT`    |
| `Get Product by SearchTerm` | `https://l2-assignment-2-theta.vercel.app/api/products?searchTerm=${value}` | `GET`    |

# Order API route

### Order Data Types:

```typescript
email: string;
productId: string;
price: number;
quantity: number;
```

| **Operation**         | **API**                                                              | **Type** |
| :-------------------- | :------------------------------------------------------------------- | :------- |
| `Create Order`        | `https://l2-assignment-2-theta.vercel.app/api/orders`                | `POST`   |
| `Get Orders`          | `https://l2-assignment-2-theta.vercel.app/api/products`              | `GET`    |
|                       |
| `Get Order by Email ` | `https://l2-assignment-2-theta.vercel.app/api/orders?email=${email}` | `GET`    |
