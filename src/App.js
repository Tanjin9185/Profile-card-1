import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/notFound/NotFound';
import Profile from './components/profile/Profile';
import Footer from './components/shared/footer/Footer';
import Navbar from './components/shared/navbar/Navbar';
import SingleProfile from './components/singleProfile/SingleProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/home">
            <Profile></Profile>
          </Route>
          <Route path="/users/:id">
            <SingleProfile></SingleProfile>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
