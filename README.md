# NestJS Microservice: Redis Pub/Sub + MongoDB

## 🚀 Description

A simple microservices-based architecture using **NestJS**, **Redis Pub/Sub**, and **MongoDB**, all containerized with Docker.

This project consists of two services:
- **receiver-service**: Receives user data via an API, stores it in MongoDB, and publishes it to a Redis channel.
- **listener-service**: Subscribes to the Redis channel and saves the published data (with modifications) into a separate MongoDB collection.

---

## 🛠 Tech Stack

- **NestJS** (TypeScript)
- **Redis**
- **MongoDB**
- **Docker** & **Docker Compose**

---

## 🔧 Environment Setup

Create a `.env` file in both services.

### Example for `receiver-service`:
```env
MONGO_URI=mongodb://mongo:27017/receiver_db
REDIS_HOST=redis
REDIS_PORT=6379
PORT=3000
