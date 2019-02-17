module.exports = {
    pathPrefix: '/blog',
    siteMetadata: {
        title: `Blog | Terrance Corley`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "GatsbyJS",
                short_name: "GatsbyJS",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",
                // icon: "src/images/icon.png", // This path is relative to the root of the site.
            },
        },
        // this needs to come after manifest so it can cache the manifest
        'gatsby-plugin-offline',
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}