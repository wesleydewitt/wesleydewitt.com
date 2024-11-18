/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: "Wesley De Witt",
		siteUrl: "https://www.yourdomain.tld",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-transformer-remark",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "daily",
				path: "./src/_daily-writing/",
			},
		},
		// {
		// 	resolve: "gatsby-source-filesystem",
		// 	options: {
		// 		name: "photos",
		// 		path: "./src/_photos/",
		// 	},
		// },
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "long-form",
				path: "./src/_long-form/",
			},
		},
	],
};
