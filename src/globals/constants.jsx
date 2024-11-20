export const route = {
    INITIAL: "/",
    home: {
        HOME1: "/index",
        HOME2: "/index2",
        HOME3: "/index3"
    },
    pages: {
        ABOUT: "/about-us",
        FAQ: "/faq",
        team: {
            TEAM: "/team",
            DETAIL: "/team/detail"
        },
        contact: {
            CONTACT1: "/contact-us1",
            CONTACT2: "/contact-us2"
        },
        gallery: {
            GALLERY1: "/gallery1",
            GALLERY2: "/gallery2"
        },
        ERROR404: "/error404",
        features: {
            footer: {
                FIXED: "/footer/fixed",
                LIGHT: "/footer/light",
                DARK: "/footer/dark"
            }
        }
    },
    services: {
        SERVICES: "/services",
        DETAIL: "/service/detail"
    },
    blog: {
        LIST: "/blog/list",
        LIST_SIDEBAR: "/blog/list-sidebar",
        GRID: "/blog/grid",
        GRID_SIDEBAR: "/blog/grid-sidebar",
        POST_SINGLE: "/blog/post-single"
    },
    shop: {
        PRODUCTS: "/shop/products",
        DETAIL: "/shop/detail",
        CART: "/shop/cart",
        WISHLIST: "/shop/wishlist",
        CHECKOUT: "/shop/checkout"
    },
    ELEMENTS: "/elements"
}

export function publicUrlFor(path) {
    return process.env.PUBLIC_URL + "/assets/" + path;
}

export function loadScript(src, fromPublic) {

    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');

        script.src = (
            fromPublic === undefined ||
            fromPublic == null ||
            fromPublic
        ) ? publicUrlFor(src) : src;

        script.addEventListener('load', function () {
            resolve();
        });
        script.addEventListener('error', function (e) {
            reject(e);
        });

        setTimeout(() => {
            document.body.removeChild(script);
        }, 1500);
        document.body.appendChild(script);
    })
};