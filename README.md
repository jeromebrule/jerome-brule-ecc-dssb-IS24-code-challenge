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
```

```
docker compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Register new admin user with postman.

Once the app is running and users registered, use those users to login and test the users stories.
P.S: Do not change the users name please, has I'm using those for testing the use stories.
Open [http://localhost:3000/api/auth/signin](http://localhost:3000/api/auth/signin)

```
http://localhost:3000/api/register
```

```
{
    "name": "Lisa",
    "email": "lisa@test.com",
    "password": "password123"
}
```

```
{
    "name": "Alan",
    "email": "alan@test.com",
    "password": "password123"
}
```

### Swagger

<sup>There's a weird error in the package.</sup>

[http://localhost:3000/api-doc](http://localhost:3000/api-doc)

```

http://localhost:3000/api-doc

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
