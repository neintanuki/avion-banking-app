import Route from './router/Route';
import Link from './router/Link';

import SignIn from './pages/SignIn';

function App() {

  return (
    <>
    <Route path="/signin"><SignIn /></Route>
    </>
  );
}

export default App;
