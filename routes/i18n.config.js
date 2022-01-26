export default {
    pages: {
        'index': {
            en: `/`,
            bg: `/`,
            ru: `/`
        }
        , 'products/index': {
            en: `/products`,
            bg: encodeURI(`/продукти`),
            ru: encodeURI(`/продукты`)
        }
        , 'products/_slug/index': {
            en: `/products/:slug`,
            bg: encodeURI(`/продукти/:slug`),
            ru: encodeURI(`/продукты/:slug`)
        }
    }
}