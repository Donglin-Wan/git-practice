import React, { Fragment} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListingPage from './pages/listingPage';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section>
            <Routes>
              <Route exact path="/" element={<ListingPage />} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
