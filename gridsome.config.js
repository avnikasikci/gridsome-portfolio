// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = {
//   siteName: 'Gridsome',
//   plugins: []
// }


module.exports = {
  siteName: 'Avni Kasikci',
  siteDescription: 'Full Stack Developer',
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'static/content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    // {
    //   // Create posts from markdown files
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'Content',
    //     path: 'static/content/**/*.md',
    //     refs: {
    //       // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
    //       // tags: {
    //       //   typeName: 'Tag',
    //       //   create: true
    //       // }
    //     }
    //   }
    // },
    /*
     date: '2017-12-21'
title: 'UI Engineer Co-op'
company: 'Apple'
location: 'Cupertino, CA'
range: 'July - December 2017'
url: 'https://www.apple.com/music/'

    */
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Jobs',
        path: 'static/content/jobs/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Content',
        path: 'static/content/**/**/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
