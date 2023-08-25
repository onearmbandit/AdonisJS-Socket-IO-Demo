# Chat App

#### Welcome to the Chat App, a real-time communication platform built using Adonis.js and Socket.io.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`HOST`
`NODE_ENV`
`APP_KEY`
`DRIVE_DISK`
`SESSION_DRIVER = cookie`
`CACHE_VIEWS = false`

## Installation

Install with Yarn

```bash
  yarn
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/onearmbandit/AdonisJS-Socket-IO-Demo
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  node ace serve --watch
```

Access the app through your web browser at

```
http://localhost:3333
```

## Features

- Real-Time Messaging: Experience instant messaging with minimal delay.
- User Count Display: Monitor the count of active users at any given time.
- Typing Indicator: See when a user is actively typing a message.

## Usage/Examples

- Upon accessing the app, you will be prompted to enter your name.
- Start typing messages to engage in real-time conversations.
- Observe the online users count to see who's active.
- The typing status indicator lets you know when someone is composing a message.
