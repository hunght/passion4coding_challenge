module.exports =  (router, expressApp, restrictedAreaRoutesMethods) => {
    const allowJson = function(req, res, next) {
        if (req.is('json'))
          req.headers['content-type'] = 'application/x-www-form-urlencoded';
      
        next();
    };
    //route for entering into the restricted area.
    //router.post('/courses',  expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getCourses)
    router.get('/courses', expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getCourses)
    router.get('/categories', restrictedAreaRoutesMethods.getCategories)
    router.get('/verticals', restrictedAreaRoutesMethods.getVerticals)
    return router
}
