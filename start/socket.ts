import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */

let users = 0

Ws.io.on('connection', (socket) => {
  socket.on('message', (message) => {
    socket.broadcast.emit('message', message)
  })

  users++
  //to all users
  Ws.io.sockets.emit('broadcast', { users })
  // socket.emit('newUser', { message: "Welcome new user!" })
  //to other users than current user
  // socket.broadcast.emit('newUser',{message : users + " users connected."})

  socket.on('startTyping', (user) => {
    socket.broadcast.emit('broadcastStartTyping', { user: user.name, message: 'typing...' })
  })

  socket.on('stoppedTyping', (user) => {
    socket.broadcast.emit('broadcastStoppedTyping', { user: user.name, message: 'stopped typing...' })
  })

  socket.on('disconnect', () => {
    users--
    //to all users
    Ws.io.sockets.emit('broadcast', { users })
    //to other users than current user
    // socket.broadcast.emit('newUser',{message : users + " users connected."})
  })

  //custom namespace
  // const cnsp = Ws.io.of('/custom-namespace')
  // cnsp.on('connection', (socket) => {
  //   console.log("user connected in custom namespace.")
  //   cnsp.emit('customEvent','Testing event call')
  //   socket.on('disconnect', () => {
  //     console.log("user disconnected in custom namespace.")
  //   })
  // })
})

//
