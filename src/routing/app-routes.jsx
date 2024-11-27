import { Routes, Route } from "react-router-dom";
import { route } from "../globals/constants";

// Pages
import Home1Page from "../app/components/home/home1";
import AboutUsPage from "../app/components/pages/about-us";
import FAQPage from "../app/components/pages/faq";

import ServicesPage from "../app/components/services/services";
import ServiceDetailPage from "../app/components/services/detail";
import ElementsPage from "../app/components/elements";
import Error404 from "../app/components/pages/error404";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home1Page />} />
      <Route path="AboutUsPage" element={<AboutUsPage />} />
      <Route path="FAQPage" element={<FAQPage />} />

      <Route path={route.services.SERVICES} element={<ServicesPage />} />
      <Route path={route.services.DETAIL} element={<ServiceDetailPage />} />

      <Route path={route.ELEMENTS} element={<ElementsPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;
