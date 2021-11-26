import Route from './router/Route';
import Link from './router/Link';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useState } from 'react';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/signin">
      <SignIn setIsSignedIn={setIsSignedIn} />
    </Route>
    </>
  );
}

export default App;
