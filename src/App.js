
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import Profile from './pages/profile';
import Header from './components/header';
import Footer from './components/footer';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
      // {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <div>
          <Header />
          <div>

            <Route exact path="/profile">
              <Home />
            </Route>

            <Route exact path="/profile/profile">
              <Profile />
            </Route>

          </div>
          <Footer />
        </div>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
