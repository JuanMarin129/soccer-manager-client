

# Soccer Manager

## [See the App!](https://soccermanager-ih.netlify.app/)

## Description

**NOTE -** Describe your project in one/two lines.
#### [Client Repo here](https://github.com/JuanMarin129/soccer-manager-client)
#### [Server Repo here](https://github.com/JuanMarin129/soccer-manager-server)

## Technologies & Libraries used

**NOTE -** List here all technologies used in the project like HTML, CSS, Javascript, React, axios, React Context, etc.
- HTML
- CSS
- Javascript
- React
- React Context
- Axios
- Routes
- Moment.js
- React Big Calendar
- Cloudinary
- Node.js
- Express
- MongoDB
- Mongoose

## Backlog Functionalities

- Login()
- Signup()
- Calendar()
- ShowComments()
- ShowMatches()
- MatchDetails()
- ShowPlayers()
- AddMatchCard()
- AddComment()
- EditMatch()
- EditComment()
- EditUser()
- EditProfile()
- UserDetails()
- UserProfile()


# Client Structure

## User Stories

**NOTE -**  List here all the actions a user can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **show match** - As a user show all matches for owner team
- **show calendar** - As a user show a calendar with all events
- **comment match** - As a user can add a comment to any match
- **edit profile** - As a user can edit own profile
- **add match**- As a admin can add a new match data

## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Home            |                   | public                   | Home page                                                     |
| `/signup`                 | Signup          |                   | anon only `<IsAnon>`     | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | Login           |                   | anon only `<IsAnon>`     | Login form, link to signup, navigate to homepage after login  |
| `/profile`                | Profile         | EditProfile       | user only `<IsPrivate>`  | Navigate to homepage after logout, expire session             |
| `/match     `             | ShowMatches     | MatchCard         | user only `<IsPrivate>`  | Shows all matches for team                                    |
| `/match/id    `           | MatchDetails    | EditMatch         | user only `<IsPrivate>`  | Shows all details for a this match and edit data              |
| `/comment/for-match/id`   | ShowComments    | EditComment       | user only `<IsPrivate>`  | Shows all comments for a this match and edit comment          |
| `/user`                   | ShowPlayers     |                   | user only `<IsPrivate>`  | Shows all players for team                                    |
| `/user`                   | UserDetails     | EditUser          | user only `<IsAdmin>`    | Edit a details for a user                                     |
| `/user/profile`           | UserProfaile    | EditProfile       | user only `<IsPrivate>`  | Edit a details for a owner profile                            |


## Other Components

- Navbar
- Footer
- MatchCard
- CommentCard
- UserCard
- OnlyPrivate
- OnlyAdmin

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.verify()

- Backlog Service
  - match.add(id)
  - comment.add(id)
  - showMatches
  - showComments
  - showPlayers
  - editMatches(id)
  - editComments(id)
  - editUser(id)
  - editProfile
  - match.delete(id)
  - comment.delete(id)
  
## Context

- auth.context
- theme.context
  
## Links

### Collaborators

[Developer 1 name](https://github.com/JuanMarin129)

### Project

[Repository Link Client](https://github.com/JuanMarin129/soccer-manager-client)

[Repository Link Server](https://github.com/JuanMarin129/soccer-manager-server)

[Deploy Link](https://soccermanager-ih.netlify.app/login)

### Excalidraw

[Excalidraw Link](https://excalidraw.com/#json=y_YXGhjTcKSZZZMP_rzk5,LBBDo0-h5ztL1-vyNuIWmA)




