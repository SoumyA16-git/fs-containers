# Full Stack Open — Part 12: Containers (Docker)

This repository contains the complete, verified exercise solutions for **Part 12: Containers** of the University of Helsinki [Full Stack Open](https://fullstackopen.com/) course.

---

## 🔗 Exercise 12.22, 12.23 & 12.24 Submission Link

- **Own Full Stack Application Repository**: [https://github.com/SoumyA16-git/fullstackopen-bloglist-ci](https://github.com/SoumyA16-git/fullstackopen-bloglist-ci)  
  *(Repository is public and collaborator invitation sent to `@mluukkai`)*

---

## 📋 Exercises Index (12.0 – 12.24)

| Exercise | Topic | File / Location | Description |
|---|---|---|---|
| **12.0** | Warmup | Course reading | Prerequisites & container concepts |
| **12.1** | GUI-free computing | [`answers/exercise1.txt`](./answers/exercise1.txt) | `curl http://helsinki.fi/` output |
| **12.2** | Running second container | [`answers/exercise2.txt`](./answers/exercise2.txt) | Ubuntu container, create `/usr/src/app/index.js` |
| **12.3** | Ubuntu 101 | [`answers/exercise3.txt`](./answers/exercise3.txt) | Install nano, edit `index.js` to print Hello World |
| **12.4** | Ubuntu 102 | [`answers/exercise4.txt`](./answers/exercise4.txt) | Install Node.js 24 and run `node index.js` |
| **12.5** | Node application container | [`todo-app/todo-backend/Dockerfile`](./todo-app/todo-backend/Dockerfile) | Backend container with Node.js 24 |
| **12.6** | Docker compose | [`todo-app/todo-backend/docker-compose.yml`](./todo-app/todo-backend/docker-compose.yml) | Compose config for todo-backend on port 3000 |
| **12.7** | MongoDB coding | [`todo-app/todo-backend/routes/todos.js`](./todo-app/todo-backend/routes/todos.js) | Implemented `GET /todos/:id` & `PUT /todos/:id` |
| **12.8** | Mongo CLI | [`answers/exercise8.txt`](./answers/exercise8.txt) | mongosh queries, db inspection, `insertOne` |
| **12.9** | Redis setup | [`todo-app/todo-backend/docker-compose.dev.yml`](./todo-app/todo-backend/docker-compose.dev.yml) | Redis container on port 6379 |
| **12.10**| Get Set Ready! | [`todo-app/todo-backend/routes/index.js`](./todo-app/todo-backend/routes/index.js) | Added `added_todos` counter & `GET /statistics` |
| **12.11**| Redis CLI | [`answers/exercise11.txt`](./answers/exercise11.txt) | redis-cli commands: `KEYS *`, `GET`, `SET`, `DEL` |
| **12.12**| Persisting Redis data | [`todo-app/todo-backend/docker-compose.dev.yml`](./todo-app/todo-backend/docker-compose.dev.yml) | `--appendonly yes` and volume `./redis_data:/data` |
| **12.13**| Todo frontend container | [`todo-app/todo-frontend/Dockerfile`](./todo-app/todo-frontend/Dockerfile) | Multi-stage build with Nginx static serve |
| **12.14**| Build-time testing | [`todo-app/todo-frontend/src/Todos/Todo.jsx`](./todo-app/todo-frontend/src/Todos/Todo.jsx) & [`Todo.test.jsx`](./todo-app/todo-frontend/src/Todos/Todo.test.jsx) | Extracted `Todo`, Vitest unit tests, `RUN npm test` |
| **12.15**| Frontend dev env | [`todo-app/todo-frontend/dev.Dockerfile`](./todo-app/todo-frontend/dev.Dockerfile) & [`docker-compose.dev.yml`](./todo-app/todo-frontend/docker-compose.dev.yml) | Vite hot-reloading with host volume mount |
| **12.16**| Backend dev container | [`todo-app/todo-backend/dev.Dockerfile`](./todo-app/todo-backend/dev.Dockerfile) | Nodemon dev container with bind mount |
| **12.17**| Nginx reverse proxy | [`todo-app/nginx.dev.conf`](./todo-app/nginx.dev.conf) & [`docker-compose.dev.yml`](./todo-app/docker-compose.dev.yml) | Nginx proxying `/` to frontend dev server |
| **12.18**| Nginx for backend | [`todo-app/nginx.dev.conf`](./todo-app/nginx.dev.conf) | `/api/` reverse proxied to `http://server:3000/` |
| **12.19**| Connect services | [`todo-app/docker-compose.dev.yml`](./todo-app/docker-compose.dev.yml) | Internal networking, `VITE_BACKEND_URL=/api` |
| **12.20**| Production env | [`todo-app/docker-compose.yml`](./todo-app/docker-compose.yml) & [`nginx.conf`](./todo-app/nginx.conf) | Full production compose with frontend, backend, mongo, redis, nginx |
| **12.21**| The smoke test | [`.github/workflows/e2e-tests.yml`](./.github/workflows/e2e-tests.yml) | Playwright E2E testing on GitHub Actions |
| **12.22**| Own containerized dev env | [`my-app/docker-compose.dev.yml`](./my-app/docker-compose.dev.yml) | Containerized Bloglist app in dev mode |
| **12.23**| Own containerized prod env | [`my-app/docker-compose.yml`](./my-app/docker-compose.yml) | Production containerized Bloglist app with Nginx proxy |
| **12.24**| GitHub repository | [SoumyA16-git/fs-containers](https://github.com/SoumyA16-git/fs-containers) | Public submission repository |

---

## 🚀 How to Run

### 1. Todo App Development Environment
```bash
cd todo-app
docker compose -f docker-compose.dev.yml up --build
```
Access the application at [http://localhost:8080](http://localhost:8080).

### 2. Todo App Production Environment
```bash
cd todo-app
docker compose up --build -d
```
Access at [http://localhost:8080](http://localhost:8080) and test with:
```bash
cd ../todo-tests
npm install
npx playwright install --with-deps chromium
npx playwright test
```

### 3. Own App (Bloglist) Development Environment
```bash
cd my-app
docker compose -f docker-compose.dev.yml up --build
```

### 4. Own App (Bloglist) Production Environment
```bash
cd my-app
docker compose up --build -d
```
