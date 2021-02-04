## [Tradelog](https://tradelog-app.herokuapp.com/) - Front-end
### Porftolio-project by Gabor Pfalzer

Front-end code for the Tradelog project. My first full stack web application for the portfolio site, built mainly for my own practice. Connects to a custom Node.js backend, [Tradelog API](https://github.com/pfalzergbr/tradelog-api).

<img src="https://github.com/pfalzergbr/pfalzergbr/blob/main/images/tradelog-landing.png?raw=true" alt="landing page for tradelog app" width="30%" height="30%"/> 

### Frontend Stack
- Javascript
- React (Hooks)
- Redux (No toolkit)
- Sass (Scss)


The application is help retail traders on financial markets keep track of their trading activities, may there be Stocks, Forex, Options or Cryptocurrencies.
Traders can create separate accounts for different kind of trading, and add strategies to differentiate between different trading activities. The application summarises profits, losses, win percentages, average profits and losses by accounts, strategies. 

Since most trading platforms and brokers provide robust analytical tools and expensive real-time data, this is more a practice project than a viable product, although it could be very useful for self assessing strategies and building discipline for individual retail traders. Most major brokers provide APIs to connect applications like this to fetch data and make it way more useful, but since it is not meant to be a full fledged product, did not go down that avenue. 

Also explored using other financial API-s to fetch stock market data, was very keen on build in a Symbol search and populating company data. Unfortunately, restrictions on the free APIs don't actually make this possible, even on this scale. 

### User Interface

User interface is built with [**React**](https://github.com/facebook/react), fully using functional components and react hooks. One of the main purpose of this project was to get used to writing reusable code, extracted as much code into smaller components as possible. More refactoring and drying is possible, will most likely spend more time for further tidy up. 

- Front-end Authentication is JWT based, tokens are stored in the auth reducer, and local storage if the user wishes to stay logged in. This might not be the most secure solution, but probably sufficient for this particular project. 
- Using [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) for routing, lazy loading most of the components on the route level for a faster first render. Route transitions are handled by [Framer Motion](https://github.com/framer/motion).
- Forms are handled by [React-hook-form](https://github.com/react-hook-form/react-hook-form), validated by [yup](https://github.com/jquense/yup). I further extracted reusable form control elements(inputs, labels, error messages) for more code reuse and simplifications of components, and integrated with these libraries. Some minor inputs are handled with simple two-way data binding, and react useState hook. 
- Data fetching is handled with [Axios](https://github.com/axios/axios)
- Toasties are using [React-Toastify](https://github.com/fkhadra/react-toastify). Modals are built with [React-Modal](https://github.com/reactjs/react-modal), controlled centrally by a custom modal controller and Redux. 
- Account Details page includes a custom build accordion menu for strategies and statistics, connected as an automatic filter to a trades table. The table is paginated, built from scratch. Although I am sure there are libraries for that, I wanted to build these myself to practice.  
- Styled with SCSS, layout is a combination of CSS Grid and Flexbox. More complex responsiveness issues with mobile screens are solved by [react-responsive](https://github.com/contra/react-responsive), to conditionally render appropriate components, based on the viewport. 

### State Management

The application is using [**Redux**](https://github.com/reduxjs/redux) with hooks as a state management solution. Started the project without, considered useReucers and Context API. Finally decided that the complex appliacation state including 6 separate reducers, cross-component communication and extensive data fetching justifies for the added complexity of Redux. Using [Redux Thunks](https://github.com/reduxjs/redux-thunk) for asyncronous actions. Built a separate handleThunks action to dry up the code, and reuse the same data fetching/loading logic throughout the whole application. Considered using Redux toolkit instead of the full boilerplate code, but since this was my first major Redux Project, went with the traditional, more extensive solution. 
Redux handles Authentication, displaying Modals in a single component, User, Account, Strategy and Trade API requests, controlling loading spinners, fetching and errors.
The project gave me a great practice in Redux, lot of documentation time, consideration of best practices, and an excellent opportunity to work with complex state.

### Testing

I am currently learning unit testing, start applying in my next projects, to get into the habit. Planning to build test coverage for this project slowly, over time as practice.
