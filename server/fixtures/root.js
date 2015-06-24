// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.root = [
  {
    class: 'intro',
    template: 'rootIntro',
    statement: 'We Boost Business.',
    supporting: {
      strong: 'µTool',
      emphasis: '(/mu:tool/)',
      highlight: 'data-driven',
      paragraph: 'digital products and services that give brands a competitive edge.'
    }
  },
  {
    class: 'benefits',
    template: 'rootBenefits',
    statement: 'Attract customers with more:',
    points: [
      {
        item: 'Growth Opportunities'
      },
      {
        item: 'Trial Signups',
      },
      {
        item: 'Leads',
      },
      {
        item: 'Sales and Purchases',
      },
      {
        item: 'Click-throughs',
      }
    ]
  },
  {
    class: 'figures',
    template: 'rootFigures',
    statement: 'Recent track record:',
    dates: [
      {
        date: '2015 May',
        figures: [
          {
            metric: 'Signups',
            percent: '20%',
            client: 'Wholesale E-commerce Company'
          },
          {
            metric: 'Purchases',
            percent: '17%',
            client: 'Wholesale E-commerce Company'
          }
        ]
      },
      {
        date: '2015 March',
        figures: [
          {
            metric: 'Purchases',
            percent: '32%',
            client: 'Yoga Studio'
          },
          {
            metric: 'Clickthroughs',
            percent: '22%',
            client: 'TV Network'
          }
        ]
      },

    ]
  },
  {
    class: 'clients',
    template: 'rootClients',
    statement: 'Trusted by:',
    clients: [
      {
        image: 'images/clients/jj.png'
      },
      {
        image: 'images/clients/pfizer.png'
      },
      {
        image: 'images/clients/sva.png'
      },
      {
        image: 'images/clients/amc.png'
      },
      {
        image: 'images/clients/thermofisher.png'
      },
      {
        image: 'images/clients/novo.png'
      }
    ]
  },
  {
    class: 'cta',
    template: 'rootCTA',
    cta: 'Get Similar Results',
    supporting: 'Reserve a free consultation'
  },
  {
    class: 'leadership',
    template: 'rootMembers',
    members: [
      {
        image: '/images/team/husam.jpg',
        name: 'Husam Machlovi',
        title: 'Strategy & Design',
        social: [
          {
            url: 'http://twitter.com/hmachlovi',
            icon: 'fa fa-twitter-square'
          },
          {
            url: 'http://www.linkedin.com/in/husammachlovi',
            icon: 'fa fa-linkedin-square'
          },
          {
            url: 'http://github.com/hudat',
            icon: 'fa fa-github-square'
          }
        ]
      },
      {
        image: '/images/team/damir.jpg',
        name: 'Damir Vazgird',
        title: 'Development & Tech',
        social: [
          {
            url: 'http://twitter.com/dvazgird',
            icon: 'fa fa-twitter-square'
          },
          {
            url: 'http://www.linkedin.com/pub/damir-vazgird/35/665/926',
            icon: 'fa fa-linkedin-square'
          },
          {
            url: 'http://github.com/amazingBastard',
            icon: 'fa fa-github-square'
          }
        ]
      }
    ]
  },
  {
    class: 'tools',
    template: 'rootTools',
    statement: 'Latest Tools:',
    tools: [
      {
        title: 'Landing Page Builder',
        description: 'Create an effective landing page in minutes. Perfect for coming soon and newly launched products.'
      },
      {
        title: 'Blog',
        description: 'Minimal blogging platform designed for readability.'
      }
    ]
  }
]
