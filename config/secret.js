module.exports = {
  database: 'mongodb://root:toor@ds245218.mlab.com:45218/amazon-clone',
  port: 4000,
  secretKey: '123abc'

  facebook: {
    clientID: process.env.FACEBOOK_ID || '149839915711070',
    clientSecret: process.env.FACEBOOK_SECRET || '18437c34f32e473447b3c5cd9e9bb2bd',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:4000/auth/facebook/callback'
  }
}