module.exports = {
    siteMetadata: {
        title: 'BinSTD进制 - 区块链云服务平台',
        description:
            'Binary Standard Foundation – BinSTD',
        permalink: 'https://binstd.com',
        toc: [
            'started',
            'ui-pay',
            'balance',
            'tokeninfo',
            'gas_price',
            'txall',
            'txhash'
        ],
        languages: ['zh'],
        defaultTranslation: 'react/zh',
        siteUrl: 'https://binstd.com',
        githubUrl: 'https://github.com/hichroma/learnstorybook.com',
        codeGithubUrl: 'https://github.com/hichroma/learnstorybook-code',
    },
    plugins: [
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/markdown`,
                name: 'content',
            },
        },
        // 'gatsby-transformer-remark',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
              plugins: [
                `gatsby-remark-autolink-headers`,
                // {
                //   resolve: `gatsby-remark-prismjs`,
                // }
              ]
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //test-binstd trackingId:UA-127508766-2
                //binstd trackingId:UA-127508766-1
                trackingId: "UA-127508766-1",
            },
        }
        
    ],

}