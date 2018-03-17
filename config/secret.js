module.exports = {
  database: 'mongodb://root:toor@ds245218.mlab.com:45218/amazon-clone',
  port: 4000,
  secretKey: '123abc',

  facebook: {
    clientID: process.env.FACEBOOK_ID || '597546627258310',
    clientSecret: process.env.FACEBOOK_SECRET || '2d3f4c3113d8207663f9948dc1844644',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:4000/auth/facebook/callback'
  }
}