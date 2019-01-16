module.exports =  (router, expressApp, restrictedAreaRoutesMethods) => {
    //route for entering into the restricted area.
    router.get('/courses', expressApp.oauth.authorise(), restrictedAreaRoutesMethods.getCourses)
    router.get('/categories', restrictedAreaRoutesMethods.getCategories)
    router.get('/verticals', restrictedAreaRoutesMethods.getVerticals)
    return router
}
