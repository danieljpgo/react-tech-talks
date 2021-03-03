import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
} from 'react-router-dom';
import Exercise from '../../modules/composition/exercise';
import Exercise01 from '../../modules/composition/exercise/01';
import Final from '../../modules/composition/final';
import Final01 from '../../modules/composition/final/01';

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route
        key="composition"
        path="/composition"
        element={<Outlet />}
      >
        <Route
          key="exercise"
          path="exercise"
          element={<Exercise />}
        >
          <Route
            key="01"
            path="01"
            element={<Exercise01 />}
          />
        </Route>
        <Route
          key="final"
          path="final"
          element={<Final />}
        >
          <Route
            key="01"
            path="01"
            element={<Final01 />}
          />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
