module.exports = {
      siteMetadata: {
            title: `MVP Stack`,
            description: `A company by solo founder [Mohd Danish] and building micro-startups for you`,
            author: `@mddanishyusuf`,
      },
      plugins: [
            'gatsby-plugin-sass',
            'gatsby-plugin-image',
            {
                  resolve: 'gatsby-plugin-manifest',
                  options: {
                        icon: 'src/images/mvpstack.jpg',
                  },
            },
            'gatsby-plugin-sharp',
            'gatsby-transformer-sharp',
            {
                  resolve: 'gatsby-source-filesystem',
                  options: {
                        name: 'images',
                        path: './src/images/',
                  },
                  __key: 'images',
            },
            {
                  resolve: 'gatsby-source-apiserver',
                  options: {
                        // Type prefix of entities from server
                        typePrefix: 'mvp__',

                        // The url, this should be the endpoint you are attempting to pull data from
                        url: `https://v1.nocodeapi.com/betauser/airtable/IPVYmHtHJtQWsDWU?tableName=projects`,

                        method: 'get',

                        headers: {
                              'Content-Type': 'application/json',
                        },

                        data: {},

                        name: 'projects',

                        entityLevel: `records`,

                        verboseOutput: true,
                  },
            },
      ],
};
