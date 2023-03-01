import { About } from "./components/About";
import { Services } from "./components/Services";
import { Home } from "./components/Home";
import { ApplicationForm } from "./components/ApplicationForm";

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
    },
    {
        path: '/ApplicationForm',
        element: <ApplicationForm />
    }
];

export default AppRoutes;
