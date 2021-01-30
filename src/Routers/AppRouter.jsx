import React, { lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence} from 'framer-motion';

import Nav from '../Pages/Shared/Nav';
import Landing from '../Pages/Landing/Landing';
import Loading from '../Pages/Shared/Loading';

const Register = lazy(() => import('../Pages/Register/Register'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Dashboard = lazy(() => import('../Pages/Accounts/Dashboard'));
const Profile = lazy(() => import('../Pages/Profile/Profile'));
const AccountDetails = lazy(() => import('../Pages/Accounts/AccountDetails'));
const TradeDetails = lazy(() => import('../Pages/Trades/TradeDetails'));

const AppRouter = () => {
  const auth = useSelector(state => state.auth);
  const { token, user } = auth;
  const location = useLocation()

  //Links to display if there is no logged in user. Feeds into the Navbar components as props
  const publicLinks = [
    { to: '/', name: 'Home' },
    { to: '/user/login', name: 'Log In' },
    { to: '/user/register', name: 'Register' },
  ];

  //Links to display if the user is logged in. Feeds into the Navbar components as props
  const authLinks = [
    { to: `/${user && user.userId}/dashboard`, name: 'Dashboard' },
  ];

  //Routes to display if there is no logged in user.
  const publicRoutes = (
    <Switch location={location} key={location.pathname}>
      <Suspense fallback={<Loading />}>
        <Route exact={true} path='/'>
          <Landing />
        </Route>
        <Route path='/user/register'>
          <Register />
        </Route>
        <Route path='/user/login'>
          <Login />
        </Route>
      </Suspense>
    </Switch>
  );

  //Routes if there is a user logged in.
  const authRoutes = (
    <Switch location={location} key={location.pathname}>
      <Suspense fallback={<Loading />}>    
        <Route exact={true} path='/'>
          <Landing />
        </Route>
        <Route path='/:userId/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/:userId/profile'>
          <Profile />
        </Route>
        <Route path='/:userId/accounts/:accountId'>
          <AccountDetails />
        </Route>
        <Route path='/trade/:tradeId'>
          <TradeDetails />
        </Route>
      </Suspense>
    </Switch>
  );

  return (
    <div className='app'>
      <Nav data={token && user ? authLinks : publicLinks} user={user} />
      <div className='container main-container'>
        <AnimatePresence exitBeforeEnter initial={false}>
          {token && user ? authRoutes : publicRoutes}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppRouter;
