module.exports =  (router, expressApp, authRoutesMethods) => {
    const allowJson = function(req, res, next) {
        if (req.is('json'))
          req.headers['content-type'] = 'application/x-www-form-urlencoded';
      
        next();
    };
    //route for registering new users
    router.post('/registerUser', authRoutesMethods.registerUser)

    //route for allowing existing users to login
    router.post('/login', allowJson, expressApp.oauth.grant(), authRoutesMethods.login)

    return router
}
