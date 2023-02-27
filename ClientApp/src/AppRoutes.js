import { About } from "./components/About";
import { Services } from "./components/Services";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/About',
      element: <About />
  },
  {
      path: '/Services',
      element: <Services />
  }
];

export default AppRoutes;
