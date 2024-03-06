# The Modern Angular Bootcamp
#### Section 21

## Logs
1. Check git commmit messages

## Next step
1. Refactor so that validator does not directly access the httpclient
2. Use an auth service
3. Create reusable input component

#### Section 22

## Logs
1. Handle authentication
2. Create sign up api request in auth service
3. Consume sign up api
4. Navbar component
5. Use behavior subject to keep track if logged in
6. Use async pipe
7. Backend request to check if user is logged in
8. Create interceptor

| Syntax      | Description                      |
| ----------- |----------------------------------|
| HttpRequest      | Contains the URL and request info |
| HttpHandler   | is a next object in the chain of interceptors|

9. Use interceptor to modify "withCredentials" property
10. Use clone to modify the request
11. Update signedin$ based on response of isAuthenticated
12. Create signout component
13. Signout during onInit of signout component
14. Create signin api request
15. Create signin UI
16. Add invalid credentials error
17. Create inbox module
18. Create inbox home component
19. Add routing for inbox
