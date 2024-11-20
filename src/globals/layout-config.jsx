import SectionFooter1 from "../app/sections/common/footer/footer1";
import SectionHeader1 from "../app/sections/common/header/header1";
import SectionHeader2 from "../app/sections/common/header/header2";
import SectionHeader3 from "../app/sections/common/header/header3";
import { route } from "./constants";
import banner from "../globals/data/banner.json";

export function showHeader(currentpath) {
    return !(currentpath === route.pages.ERROR404)
}

export function setFooter(currentpath) {
    if (currentpath === route.pages.features.footer.LIGHT) {
        return <SectionFooter1 theme="footer-light" />
    } else {
        return <SectionFooter1 theme="footer-dark" />
    }
}

export function setHeader(currentpath) {
    if (
        currentpath === route.home.HOME1 ||
        currentpath === route.INITIAL
    ) {
        return <SectionHeader1 />
    } else if (currentpath === route.home.HOME3) {
        return <SectionHeader3 />
    } else {
        return <SectionHeader2 />
    }
}

export const setBannerData = (currentpath) => {
    switch (currentpath) {
        case route.pages.FAQ:
            return banner.faq
        case route.pages.team.TEAM:
            return banner.team
        case route.pages.team.DETAIL:
            return banner.teamDetail
        case route.pages.contact.CONTACT1:
            return banner.contact1
        case route.pages.contact.CONTACT2:
            return banner.contact2
        case route.pages.gallery.GALLERY1:
            return banner.gallery1
        case route.pages.gallery.GALLERY2:
            return banner.gallery2
        case route.pages.ERROR404:
            return banner.error404
        case route.pages.features.footer.FIXED:
            return banner.footerFixed
        case route.pages.features.footer.LIGHT:
            return banner.footerLight
        case route.pages.features.footer.DARK:
            return banner.footerDark
        case route.services.SERVICES:
            return banner.services
        case route.services.DETAIL:
            return banner.serviceDetail
        case route.blog.LIST:
            return banner.blogList
        case route.blog.LIST_SIDEBAR:
            return banner.blogListSidebar
        case route.blog.GRID:
            return banner.blogGrid
        case route.blog.GRID_SIDEBAR:
            return banner.blogGridSidebar
        case route.blog.POST_SINGLE:
            return banner.blogPostSingle
        case route.shop.PRODUCTS:
            return banner.shopProducts
        case route.shop.DETAIL:
            return banner.shopProductDetail
        case route.shop.CART:
            return banner.shopCart
        case route.shop.WISHLIST:
            return banner.shopWishlist
        case route.shop.CHECKOUT:
            return banner.shopCheckout
        case route.ELEMENTS:
            return banner.elements
        default:
            return banner.about
    }
}