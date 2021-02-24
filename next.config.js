const withMDX = require("@next/mdx")();

module.exports = withMDX({
    async redirects() {
        return [
            {
            source: '/',
            destination: '/foundation/colors',
            permanent: false,
            },
            {
            source: '/foundation',
            destination: '/foundation/colors',
            permanent: false,
            },
            {
            source: '/components',
            destination: '/components/button',
            permanent: false,
            },
        ]
    },
    pageExtensions: ["js", "mdx", "md"],
});