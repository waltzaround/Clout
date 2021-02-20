const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const next = require('next');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const { backendRequestHandler } = require('./api');
const { establishDatabaseConnection } = require('./api/db');

const passportStrategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
    process.env.AUTH0_CALLBACK_URL || 'http://localhost:8000/api/user/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'GET YOUR SECRET MAN',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const nextJsRequestHandler = app.getRequestHandler()

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.prepare().then(async () => {
  await establishDatabaseConnection();
  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(session(sessionConfig));

  passport.use(passportStrategy);

  server.use(passport.initialize());
  server.use(passport.session());
  server.use('/api', backendRequestHandler);
  server.all('*', (req, res) => {
    return nextJsRequestHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

process.on('uncaughtException', (e) => {
  console.error(e)
  process.exit(1);
})

process.on('unhandledRejection', (e) => {
  console.error(e)
  process.exit(1)
})