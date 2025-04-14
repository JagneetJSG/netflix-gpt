#NETFLIX GPT

- create-react-app
- configured tailwindcss
- Header
- Added Routing
-Login Form
- Sign up form
- Form Validation
- useRef hook
- Firebase configuration
- Deploy live on firebase
- used Sign In and Sign Up API's from firebase (Authentication)
- Redux store created and added a slice named userSlice
- Added user data to store
- Added signout api from firebase and added API for updating user profile
- used the data on Header component
- Fixed Bugs
  - when user signed up the profile data didnt get updated. (For this made the onAuthStateChanged Api added to the Header component)
  - (Redirection fix) used useNavigate hook at one place so that once user logged out it is unable to access browse page and vice versa
- Code cleanup by adding using unsubscribe fn
- added constants file 
- added browse page and added main and secondary container to it.
 - Setup TMDB and fetched the movies data from its API (created hook for this to make fn testable and modular)
 - made a state for trailer video inside of the movie slice in the redux store
 - made VideoInfo and VideoBackground comp and fetched data from Redux store.
- In Secondary Container
 - fetched data via API from TMDB and added to redux store and created separate hooks for 3 types-
   - Now Playing 
   - Popular
   - Top Rated
  and used in the secondary container.
- added GPT Search Page with a Bar component
- added Multilingual feature to GPT Search Page.
- configured openai api in project
- made useGptFetchFromTMDB hook for fetching ai suggestions and then getting the movies list from the TMDB.
- created search bar and attached its value with state variable 
- created GPT slice in redux store.
- connected handleClick with search btn functionality
- created TMDBSuggestions component and shown on the page.
- added dispatch fn to header so that when user click the Home Page button on GPT search page and comes back to this page, then the TmdbSuggestions component should not be visible(this is done by making the states null which are responsible for the search section data maintainance.)
- added dispatch action(logic in header section) to remove movies data from the store as soon as user signs out of the website.
- memoization of data- if data is there in store no need to make api calls again and again.
- fixes to warnings in console
- added the hamburger icon and functionality on mobile devies on Header component.


#Features

- Login/Sign Up
 - Sign in/ Sign Up form
 - redirect to Browse Page

-Browse (after authentication)
 -Header
 -Main Movie
  - Movie Trailer in Bg
  -Title and Desc
  -Movie Suggestion
   - MovieLists * N
Netflix GPT
 - Search Bar
 - Movie Suggestions