import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./globals/elements/loader";
import ScrollToTop from "./globals/scroll-to-top";
// import AppRoutes from "./routing/app-routes";
import Home1Page from "./app/components/home/home1";

function App() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <BrowserRouter>
      {isLoading && <Loader />}
      <ScrollToTop />
      <Home1Page />
    </BrowserRouter>
  );
}

export default App;
