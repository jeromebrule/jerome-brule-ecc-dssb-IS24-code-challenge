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
    "name": "Test User",
    "email": "test@test.com",
    "password": "password123"
}
```

OR

you can use curl command inside govt-app container

```
curl http://localhost:3000/api/register -d '{"name": "Test User", "email":"test@test.com", "password": "password123"}'
```

### Endpoint

```
  GET ALL - http://localhost:3000/api/users
  GET ONE - http://localhost:3000/api/users/$[id]
  POST - http://localhost:3000/api/users
  PUT - http://localhost:3000/api/users/$[id] - AUTH only
  DELETE - http://localhost:3000/api/users/$[id] - AUTH only
```

### Frontend

```
- As an unauthenticated user I see a welcome page page.

  - I have access to a navigation to access to user listing
    - I have access to a search input to look for a specific contact name.
    - From the listing page I have options to create a new contact.
      - I have frontend validation:
        - At least 3 characters for the name
        - Valid email
        - 10 characters for the phone number
        - Valid URL for the website
    - From the listing page I have options to see contact detail by clicking their name.
    - I have access to login.

- As an authenticated user I see a welcome page page with my user name.

  - I have access to a navigation to access to user listing
    - I have access to a search input to look for a specific contact name.
    - From the listing page I have options to create a new contact.
    - From the listing page I have options to edit a new contact.
    - From the listing page I have options to see contact detail by clicking their name.
    - From the detail page I have option to edit the current contact.
    - I have access to logout from the main navigation.

```

### Backend

```
- As a unauthentificated
  - Contact creation
    - Backend validation
      - At least 3 characters for the name
      - Valid email
      - 10 characters for the phone number
      - Valid URL for the website
    - I will get an error message if the user already exist.
      -{error: "User already exist"}, {status: 400}
  - Contact edit
  - I will get a error message if trying to edit a contact.
    - {error: "Not authentificated"}, {status: 401}

- As a authentificated
  - Contact creation
    - Backend validation
      - At least 3 characters for the name
      - Valid email
      - 10 characters for the phone number
      - Valid URL for the website
    - I will get an error message if the user already exist.
      -{error: "User already exist"}, {status: 400}
  - Contact edit
    - Backend validation
      - At least 3 characters for the name
      - Valid email
      - 10 characters for the phone number
      - Valid URL for the website
    - I will get an error message if the user already exist.
      - {error: "User already exist"}, {status: 400}
```

### Testing

```
I had issues during the config of JEST. I did wrote two simple test. One for Frontend and one for the API.
```

### Deployment

```
I would install linux on a VM
 - Install docker
 - Run my app with nginx
 - Deploy my files using Github action.
 - Build my Docker on the VM
 - Run Docker

There's also a github action build the docker image.
https://github.com/jeromebrule/realcompany/actions/workflows/docker-image.yml

The code is deployed to Vercel.
Logs can be found here. It obviously fails cause I dont have any domain setup.
https://github.com/jeromebrule/realcompany/deployments
```
