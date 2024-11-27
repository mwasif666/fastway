import { useState } from "react";
import Loader from "./globals/elements/loader";
import ScrollToTop from "./globals/scroll-to-top";
// import RootLayout from "./layouts/root-layout";
import AppRoutes from "./routing/app-routes";

function App() {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      {isLoading && <Loader />}
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}

export default App;
