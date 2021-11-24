import Route from './router/Route';
import Link from './router/Link';

import SignIn from './pages/SignIn';
import { useState } from 'react';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
    <Route path="/signin"><SignIn setIsSignedIn={setIsSignedIn} /></Route>
    </>
  );
}

export default App;
