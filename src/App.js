import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./globals/elements/loader";
import ScrollToTop from "./globals/scroll-to-top";
import AppRoutes from "./routing/app-routes";

function App() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <BrowserRouter>
      {isLoading && <Loader />}
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
