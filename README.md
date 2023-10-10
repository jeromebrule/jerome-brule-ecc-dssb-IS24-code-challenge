## Getting Started

First, run the development server:

### Create .env file

```
DATABASE_URL=

BASE_URL=

MYSQL_ROOT_USER=
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=

NEXTJS_APP_LOCAL_PORT=
NEXTJS_APP_DOCKER_PORT=

NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

```
docker compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Register new admin user from postman.

```
http://localhost:3000/api/register
```

```
{
    "name": "Lisa",
    "email": "lisa@test.com",
    "password": "password123"
}

&&

{
    "name": "Alan",
    "email": "alan@test.com",
    "password": "password123"
}
```

OR

you can use curl command inside govt-app container

```
curl http://localhost:3000/api/register -d '{"name": "Test User", "email":"test@test.com", "password": "password123"}'
```

### Swagger

```
http://localhost:3000/api-doc

There's a weird error in the package.
```

### Endpoint

```
  GET ALL - http://localhost:3000/api/products
  GET ONE - http://localhost:3000/api/products/$[id]
  POST - http://localhost:3000/api/products
  PUT - http://localhost:3000/api/products/$[id]
  DELETE - http://localhost:3000/api/products/$[id]
```

### Testing

```
I had issues during the config of JEST. I did wrote two simple test. One for Frontend and one for the API.
```
