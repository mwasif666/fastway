import { Routes, Route } from "react-router-dom";
import { route } from "../globals/constants";
import Home1Page from "../app/components/home/home1";
import Home2Page from "../app/components/home/home2";
import Home3Page from "../app/components/home/home3";

import InnerPageLayout from "../layouts/inner-page-layout";
import AboutUsPage from "../app/components/pages/about-us";
import FAQPage from "../app/components/pages/faq";
import TeamPage from "../app/components/pages/team/team";
import TeamDetailPage from "../app/components/pages/team/detail";
import ContactUs1Page from "../app/components/pages/contact/contact-us1";
import ContactUs2Page from "../app/components/pages/contact/contact-us2";
import Gallery1Page from "../app/components/pages/gallery/gallery1";
import Gallery2Page from "../app/components/pages/gallery/gallery2";
import FeaturesPage from "../app/components/pages/features/features";
import Error404 from "../app/components/pages/error404";

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

function AppRoutes() {
    return (
        <Routes>
            <Route path={route.INITIAL} element={<Home1Page />}/>
            <Route path={route.home.HOME1} element={<Home1Page />}/>
            <Route path={route.home.HOME2} element={<Home2Page />}/>
            <Route path={route.home.HOME3} element={<Home3Page />}/>
            <Route path={route.pages.ABOUT} element={<InnerPageLayout content={<AboutUsPage />} />}/>
            <Route path={route.pages.FAQ} element={<InnerPageLayout content={<FAQPage />} />}/>
            <Route path={route.pages.team.TEAM} element={<InnerPageLayout content={<TeamPage />} />}/>
            <Route path={route.pages.team.DETAIL} element={<InnerPageLayout content={<TeamDetailPage />} />}/>
            <Route path={route.pages.contact.CONTACT1} element={<InnerPageLayout content={<ContactUs1Page />} />}/>
            <Route path={route.pages.contact.CONTACT2} element={<InnerPageLayout content={<ContactUs2Page />} />}/>
            <Route path={route.pages.gallery.GALLERY1} element={<InnerPageLayout content={<Gallery1Page />} />}/>
            <Route path={route.pages.gallery.GALLERY2} element={<InnerPageLayout content={<Gallery2Page />} />}/>
            <Route path={route.pages.features.footer.FIXED} element={<InnerPageLayout content={<FeaturesPage />} />}/>
            <Route path={route.pages.features.footer.LIGHT} element={<InnerPageLayout content={<FeaturesPage />} />}/>
            <Route path={route.pages.features.footer.DARK} element={<InnerPageLayout content={<FeaturesPage />} />}/>
            <Route path={route.services.SERVICES} element={<InnerPageLayout content={<ServicesPage />} />}/>
            <Route path={route.services.DETAIL} element={<InnerPageLayout content={<ServiceDetailPage />} />}/>
            <Route path={route.blog.LIST} element={<InnerPageLayout content={<BlogListPage />} />}/>
            <Route path={route.blog.LIST_SIDEBAR} element={<InnerPageLayout content={<BlogListSidebarPage />} />}/>
            <Route path={route.blog.GRID} element={<InnerPageLayout content={<BlogGridPage />} />}/>
            <Route path={route.blog.GRID_SIDEBAR} element={<InnerPageLayout content={<BlogGridSidebarPage />} />}/>
            <Route path={route.blog.POST_SINGLE} element={<InnerPageLayout content={<BlogPostSinglePage />} />}/>
            <Route path={route.shop.PRODUCTS} element={<InnerPageLayout content={<ShopProductsPage />} />}/>
            <Route path={route.shop.DETAIL} element={<InnerPageLayout content={<ShopProductDetailPage />} />}/>
            <Route path={route.shop.CART} element={<InnerPageLayout content={<ShopCartPage />} />}/>
            <Route path={route.shop.WISHLIST} element={<InnerPageLayout content={<ShopWishlistPage />} />}/>
            <Route path={route.shop.CHECKOUT} element={<InnerPageLayout content={<ShopChekoutPage />} />}/>
            <Route path={route.ELEMENTS} element={<InnerPageLayout content={<ElementsPage />} />}/>
            <Route path="*" element={<InnerPageLayout content={<Error404 />} />}/>
        </Routes>
    )
}
export default AppRoutes;