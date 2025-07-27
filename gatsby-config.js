/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Wesley De Witt`,
        subtitle: `Code, photos & prose out of Indianapolis`,
        siteUrl: `https://www.wesleydewitt.com`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projects",
                path: "./src/_projects/",
            },
            __key: "projects",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "photos",
                path: "./src/_photos/",
            },
            __key: "photos",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "essays",
                path: "./src/_essays/",
            },
            __key: "essays",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "travel",
                path: "./src/_travel/",
            },
            __key: "travel",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "reviews",
                path: "./src/_reviews/",
            },
            __key: "reviews",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "dailys",
                path: "./src/_dailys/",
            },
            __key: "dailys",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "work-hisotry",
                path: "./src/_work-history/",
            },
            __key: "work-history",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "education",
                path: "./src/_education/",
            },
            __key: "education",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "poems",
                path: "./src/_poems/",
            },
            __key: "poems",
        },
    ],
};
