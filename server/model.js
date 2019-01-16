/**
 * Constructor.
 */
function InMemoryCache() {
    this.clients = [
        { 
          clientId : 'dummy-client-id',
          clientSecret : 'dummy-client-secret',
          redirectUris : [''],
          grants: ['client_credentials'],
        }];
    this.tokens = [];
    this.users = [{ id : '123', username: 'admin', password: '123456' }];
  }
  
  /**
   * Dump the cache.
   */
  InMemoryCache.prototype.dump = function() {
    console.log('clients', this.clients);
    console.log('tokens', this.tokens);
    console.log('users', this.users);
  };
  
  /*
   * Get access token.
   */
  InMemoryCache.prototype.getAccessToken = function(bearerToken) {
    const tokens = this.tokens.filter(function(token) {
      return token.accessToken === bearerToken;
    });
  
    return tokens.length ? tokens[0] : false;
  };
  
  /**
   * Get refresh token.
   */
  InMemoryCache.prototype.getRefreshToken = function(bearerToken) {
    const tokens = this.tokens.filter(function(token) {
      return token.refreshToken === bearerToken;
    });
  
    return tokens.length ? tokens[0] : false;
  };
  
  /**
   * Get client.
   */
  InMemoryCache.prototype.getClient = function(clientId, clientSecret) {
    const clients = this.clients.filter(function(client) {
      return client.clientId === clientId &&
             client.clientSecret === clientSecret;
    });
    return clients.length ? clients[0] : false;
  };
  
  /**
   * Save token.
   */
  InMemoryCache.prototype.saveToken = function(token, client, user) {
    const newToken = {
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt,
      clientId: client.clientId,
      refreshToken: token.refreshToken,
      refreshTokenExpiresAt: token.refreshTokenExpiresAt,
      userId: user.id,
  
      //these are required in /node_modules/express-oauth-server/node_modules/oauth2-server/lib/models/token-model.js
      client: client,
      user:user,
      scope: null, //where are we taking scope from? maybe client?
    };
    this.tokens.push(newToken);
    return newToken;
  };
  
  /*
   * Get user.
   */
  InMemoryCache.prototype.getUser = function(username, password) {
    const users = this.users.filter(function(user) {
      return user.username === username && user.password === password;
    });
  
    return users.length ? users[0] : false;
  };
  
  InMemoryCache.prototype.getUserFromClient = function(){
    return this.users[0];
  }
  
  InMemoryCache.prototype.saveAuthorizationCode = function(){
      console.log('how is this implemented!?', arguments);
  }
  
  /**
   * Export constructor.
   */
  module.exports = InMemoryCache;