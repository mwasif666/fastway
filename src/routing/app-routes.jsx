import { Routes, Route } from "react-router-dom";
import { route } from "../globals/constants";

// Pages
import Home1Page from "../app/components/home/home1";
import AboutUsPage from "../app/components/pages/about-us";
import FAQPage from "../app/components/pages/faq";
import TeamPage from "../app/components/pages/team/team";
import TeamDetailPage from "../app/components/pages/team/detail";
import ContactUs1Page from "../app/components/pages/contact/contact-us1";
import ContactUs2Page from "../app/components/pages/contact/contact-us2";
import Gallery1Page from "../app/components/pages/gallery/gallery1";
import Gallery2Page from "../app/components/pages/gallery/gallery2";
import FeaturesPage from "../app/components/pages/features/features";
import ServicesPage from "../app/components/services/services";
import ServiceDetailPage from "../app/components/services/detail";
import BlogListPage from "../app/components/blog/list";
import BlogListSidebarPage from "../app/components/blog/list-sidebar";
import BlogGridPage from "../app/components/blog/grid";
import BlogGridSidebarPage from "../app/components/blog/grid-sidebar";
import BlogPostSinglePage from "../app/components/blog/post-single";
import ShopProductsPage from "../app/components/shop/products";
import ShopProductDetailPage from "../app/components/shop/detail";
import ShopCartPage from "../app/components/shop/cart";
import ShopWishlistPage from "../app/components/shop/wishlist";
import ShopChekoutPage from "../app/components/shop/checkout";
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
