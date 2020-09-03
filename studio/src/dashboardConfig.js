export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f509455ef34509578e2d019',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nthoyshk',
                  apiId: 'c9cf09f7-78b4-46a6-9ab0-ab15bca9efa8'
                },
                {
                  buildHookId: '5f5094556d385bb214c3650e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hz13njyt',
                  apiId: '06716f7d-3234-4c02-9224-30322a972b9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/belphcze/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hz13njyt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
