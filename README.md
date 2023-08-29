# Chat App

## Project Overview

Introducing the Chat App, built with Adonis.js and Socket.io for real-time communication. It seamlessly connects users through instant messaging, offering a dynamic conversation experience without delays. With a display of active user count, users can gauge community engagement, enhancing the sense of connection. The inclusion of typing indicators ensures smooth, interruption-free conversations, making the Chat App a natural and responsive platform for real-time interactions.

## Tech Stack

**Client:** AdonisJS Edge Template, Socket.IO

**Server:** AdonisJS, Socket.IO

## Installation Instructions

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`HOST`
`NODE_ENV`
`APP_KEY`
`DRIVE_DISK`
`SESSION_DRIVER = cookie`
`CACHE_VIEWS = false`

### Installation

Install with Yarn

```bash
  nvm use
  yarn
```

### Run Locally

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

## Usage/Examples

- Upon accessing the app, you will be prompted to enter your name.
- Start typing messages to engage in real-time conversations.
- Observe the online users count to see who's active.
- The typing status indicator lets you know when someone is composing a message.

## Features

- Real-Time Messaging: Experience instant messaging with minimal delay.
- User Count Display: Monitor the count of active users at any given time.
- Typing Indicator: See when a user is actively typing a message.
