import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Nav from '../Pages/Shared/Nav';
import Landing from '../Pages/Landing/Landing';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import NotFound from '../Pages/Shared/NotFound';
import Loading from '../Pages/Shared/Loading';
import Footer from '../Pages/Shared/Footer';

const Dashboard = lazy(() => import('../Pages/Accounts/Dashboard'));
const Profile = lazy(() => import('../Pages/Profile/Profile'));
const AccountDetails = lazy(() => import('../Pages/Accounts/AccountDetails'));
const Strategy = lazy(() => import('../Pages/Accounts/Strategies/Strategy'));
const TradeDetails = lazy(() => import('../Pages/Trades/TradeDetails'));

const AppRouter = () => {
  const auth = useSelector(state => state.auth);
  const { token, user } = auth;

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
    <Switch>
      <Route exact={true} path='/'>
        <Landing />
      </Route>
      <Route path='/user/register'>
        <Register />
      </Route>
      <Route path='/user/login'>
        <Login />
      </Route>
    </Switch>
  );

  //Routes if there is a user logged in.
  const authRoutes = (
    <Switch>
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
        <Route path='/:userId/strategies/:strategyId'>
          <Strategy />
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
        {token && user ? authRoutes : publicRoutes}
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
