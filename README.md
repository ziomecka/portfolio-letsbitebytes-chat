# About

* The application is a portfolio project and is being developed.
* The current version is running at [heroku](http://letsbitebytes-chat.herokuapp.com/).
  For demonstration purposes, I provided two users &#39;trainer&#39; and &#39;trainee&#39; with empty passwords. Please note that the user data is not currently stored in any database (only logins and passwords in the server&#39;s memory).

----

# Concepts used

* Server side rendering
* Publisher-subscriber pattern (publisher-subscriber-react-hoc npm package coded by me)
* Server-side cache (redis)
* Session-storage (redis)
* Database (mongoDB)
* User authorization (hash + salt)

---

# Assumptions

* Application ca be rendered in any container with pre-defined height and width.
  The content of the application is responsive i.e. it will adjust to the size of the container.

---

# Dependencies

* React
* redux
* react-router
* material-ui
* socket.io
* express
* mongoDB

# DevDependencies

* typescript
* jest, enzyme
* babel
* webpack
* eslint

---

[![coded with love](https://img.shields.io/static/v1?label=coded%20with&message=love&color=a53860)](https://img.shields.io/static/v1?label=coded%20with&message=love&color=a53860)
