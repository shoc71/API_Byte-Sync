# API_Byte-Sync
written by shoc71;

## Description
A Social Network API that works backend using both MongoDB (NoSQL connection using mongoose) and Express.js (backend communication API). Other important libraries include dotenv, bcrypt, and jsonwebtoken for further protection.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Questions](#questions)
- [Links](#links)

## Installation
1. Open up terminal (more specifically [bash](https://www.youtube.com/watch?v=3eu67g3PTdk))
2. Install ```npx ``` and ```node``` and ```git``` and ```Node.js``` packages on your desktop
3. Type the following command: ```git clone git@github.com:shoc71/API_Byte-Sync.git```
4. Type the following command: ```cd API_Byte-Sync && npm i ``` 
5. Create an .env file and add your MongoDB connection string
```
MONGO_URI=mongodb://127.0.0.1:27017/socialNetworkDB
PORT=3001
```
5. Type the following command: ```npm run dev``` 
6. Open up [Postman](https://www.postman.com/downloads/)/[Insomnia](https://insomnia.rest/download) (or other backend connector)
7. Follow [Usage](#usage) for other instructions on how to using this application.

## Usage

### User Routes

#### Get All Users

Method: GET

Endpoint: ```/api/users```

#### Get a Single User by ID

Method: GET

Endpoint: ```/api/users/:userId```

#### Create a New User

Method: POST

Endpoint: ```/api/users```

Request Body:

```js
{
    "username": "john_doe",
    "email": "john@example.com"
}
```

#### Update a User by ID

Method: PUT

Endpoint: ```/api/users/:userId```

#### Delete a User by ID

Method: DELETE

Endpoint: ```/api/users/:userId```

#### Add a Friend

Method: POST

Endpoint: ```/api/users/:userId/friends/:friendId```

#### Remove a Friend

Method: DELETE

Endpoint: ```/api/users/:userId/friends/:friendId```

### Thought Routes

#### Get All Thoughts

Method: GET

Endpoint: ``/api/thoughts``

#### Get a Single Thought by ID

Method: GET

Endpoint: ```/api/thoughts/:thoughtId```

#### Create a New Thought

Method: POST

Endpoint: ```/api/thoughts```

Request Body:

```js
{
    "thoughtText": "This is my first thought!",
    "username": "john_doe",
    "userId": "605c72b90c1df731ac4f37b9"
}
```
#### Update a Thought by ID

Method: PUT

Endpoint: ```/api/thoughts/:thoughtId```

#### Delete a Thought by ID

Method: DELETE

Endpoint: ```/api/thoughts/:thoughtId```

### Reaction Routes

#### Add a Reaction to a Thought

Method: POST

Endpoint: ```/api/thoughts/:thoughtId/reactions```

Request Body:

```js
{
    "reactionBody": "Great thought!",
    "username": "jane_doe"
}
```

#### Remove a Reaction from a Thought

Method: DELETE

Endpoint: ```/api/thoughts/:thoughtId/reactions/:reactionId```

## Contribution

Fork repo, make changes, and request a merge.

If you idenitfy any security or performance issues or any major improvements, raise an issue and let the community know.

## License
This project is licensed under the [![License](https://opensource.org/licenses/Apache-2.0)](https://opensource.org/licenses/Apache-2.0).

## Questions
For any questions or concerns, please email mrdrlogic@gmail.com

## Links
Youtube Tutorial: [Social Media API Video Walkthrough](https://youtu.be/OEeDvwbCATA)

Deployed Webpage: https://shoc71.github.io/API_Byte-Sync/

GitHub Repo: https://github.com/shoc71/API_Byte-Sync/

GitHub Profile: [shoc71](https://github.com/shoc71)

