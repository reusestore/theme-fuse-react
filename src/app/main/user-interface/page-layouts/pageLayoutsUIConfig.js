import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import EmptyNormalScrollComponent from './empty/EmptyNormalScrollComponent';
import EmptyPageScrollComponent from './empty/EmptyPageScrollComponent';
import PageLayoutOverview from './PageLayoutOverview';
import SimpleWithSidebarsNormalScrollComponent from './simple/with-sidebars/SimpleWithSidebarsNormalScrollComponent';
import SimpleWithSidebarsPageScrollComponent from './simple/with-sidebars/SimpleWithSidebarsPageScrollComponent';
import SimpleWithSidebarsContentScrollComponent from './simple/with-sidebars/SimpleWithSidebarsContentScrollComponent';
import SimpleFullWidthNormalScrollComponent from './simple/full-width/SimpleFullWidthNormalScrollComponent';
import SimpleFullWidthPageScrollComponent from './simple/full-width/SimpleFullWidthPageScrollComponent';
import SimpleFullWidthContentScrollComponent from './simple/full-width/SimpleFullWidthContentScrollComponent';
import CardedFullWidthNormalScrollComponent from './carded/full-width/CardedFullWidthNormalScrollComponent';
import CardedFullWidthPageScrollComponent from './carded/full-width/CardedFullWidthPageScrollComponent';
import CardedFullWidthContentScrollComponent from './carded/full-width/CardedFullWidthContentScrollComponent';
import CardedWithSidebarsNormalScrollComponent from './carded/with-sidebars/CardedWithSidebarsNormalScrollComponent';
import CardedWithSidebarsPageScrollComponent from './carded/with-sidebars/CardedWithSidebarsPageScrollComponent';
import CardedWithSidebarsContentScrollComponent from './carded/with-sidebars/CardedWithSidebarsContentScrollComponent';

const OverviewPageLayoutsUI = lazy(() => import('./OverviewPageLayoutsUI'));
const EmptyPageLayoutUI = lazy(() => import('./PageLayoutOverview'));

export const overviews = {
  empty: {
    title: 'Empty Page Layout',
    description:
      'Layout that spans the entire width of the content area with 2 different scroll modes.',
    availableOptions: [
      {
        value: 'normalScroll',
        title: 'Normal Scroll',
      },
      {
        value: 'pageScroll',
        title: 'Page Scroll',
      },
    ],
    selectedOption: 'normalScroll',
    options: {
      normalScroll: {
        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
        link: '/ui/page-layouts/empty/normal-scroll',
        component: EmptyNormalScrollComponent,
      },
      pageScroll: {
        description:
          'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
        link: '/ui/page-layouts/empty/page-scroll',
        component: EmptyPageScrollComponent,
      },
    },
  },
  carded: {
    fullWidth: {
      title: 'Carded Full Width Page Layout',
      description:
        'Carded layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/carded/full-width/normal-scroll',
          component: CardedFullWidthNormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/carded/full-width/page-scroll',
          component: CardedFullWidthPageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/carded/full-width/content-scroll',
          component: CardedFullWidthContentScrollComponent,
        },
      },
    },
    withSidebars: {
      title: 'Carded Page Layout With Sidebars',
      description:
        'Layout with left and right sidebars, a dedicated header and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/carded/with-sidebars/normal-scroll',
          component: CardedWithSidebarsNormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/carded/with-sidebars/page-scroll',
          component: CardedWithSidebarsPageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/carded/with-sidebars/content-scroll',
          component: CardedWithSidebarsContentScrollComponent,
        },
      },
    },
  },
  /*
  leftSidebar1 : {
    title           : 'Carded Left Sidebar #1',
    description     : 'Carded layout with a left sidebar, a dedicated header and 3 different scroll modes.',
    availableOptions: [
      {
        value: 'normalScroll',
        title: 'Normal Scroll'
      },
      {
        value: 'pageScroll',
        title: 'Page Scroll'
      },
      {
        value: 'contentScroll',
        title: 'Content Scroll'
      }
    ],
    selectedOption  : 'normalScroll',
    options         : {
      normalScroll : {
        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
        link       : '/ui/page-layouts/carded/left-sidebar-1/normal-scroll',
        component  : CardedLeftSidebar1NormalScrollComponent
      },
      pageScroll   : {
        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
        link       : '/ui/page-layouts/carded/left-sidebar-1/page-scroll',
        component  : CardedLeftSidebar1PageScrollComponent
      },
      contentScroll: {
        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
        link       : '/ui/page-layouts/carded/left-sidebar-1/content-scroll',
        component  : CardedLeftSidebar1ContentScrollComponent
      }
    }
  },
  leftSidebar2 : {
    title           : 'Carded Left Sidebar #2',
    description     : 'Carded layout with a left sidebar, a dedicated header and 3 different scroll modes.',
    availableOptions: [
      {
        value: 'normalScroll',
        title: 'Normal Scroll'
      },
      {
        value: 'pageScroll',
        title: 'Page Scroll'
      },
      {
        value: 'contentScroll',
        title: 'Content Scroll'
      }
    ],
    selectedOption  : 'normalScroll',
    options         : {
      normalScroll : {
        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
        link       : '/ui/page-layouts/carded/left-sidebar-2/normal-scroll',
        component  : CardedLeftSidebar2NormalScrollComponent
      },
      pageScroll   : {
        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
        link       : '/ui/page-layouts/carded/left-sidebar-2/page-scroll',
        component  : CardedLeftSidebar2PageScrollComponent
      },
      contentScroll: {
        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
        link       : '/ui/page-layouts/carded/left-sidebar-2/content-scroll',
        component  : CardedLeftSidebar2ContentScrollComponent
      }
    }
  },
  rightSidebar1: {
    title           : 'Carded Right Sidebar #1',
    description     : 'Carded layout with a right sidebar, a dedicated header and 3 different scroll modes.',
    availableOptions: [
      {
        value: 'normalScroll',
        title: 'Normal Scroll'
      },
      {
        value: 'pageScroll',
        title: 'Page Scroll'
      },
      {
        value: 'contentScroll',
        title: 'Content Scroll'
      }
    ],
    selectedOption  : 'normalScroll',
    options         : {
      normalScroll : {
        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
        link       : '/ui/page-layouts/carded/right-sidebar-1/normal-scroll',
        component  : CardedRightSidebar1NormalScrollComponent
      },
      pageScroll   : {
        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
        link       : '/ui/page-layouts/carded/right-sidebar-1/page-scroll',
        component  : CardedRightSidebar1PageScrollComponent
      },
      contentScroll: {
        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
        link       : '/ui/page-layouts/carded/right-sidebar-1/content-scroll',
        component  : CardedRightSidebar1ContentScrollComponent
      }
    }
  },
  rightSidebar2: {
    title           : 'Carded Right Sidebar #2',
    description     : 'Carded layout with a right sidebar, a dedicated header and 3 different scroll modes.',
    availableOptions: [
      {
        value: 'normalScroll',
        title: 'Normal Scroll'
      },
      {
        value: 'pageScroll',
        title: 'Page Scroll'
      },
      {
        value: 'contentScroll',
        title: 'Content Scroll'
      }
    ],
    selectedOption  : 'normalScroll',
    options         : {
      normalScroll : {
        description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
        link       : '/ui/page-layouts/carded/right-sidebar-2/normal-scroll',
        component  : CardedRightSidebar2NormalScrollComponent
      },
      pageScroll   : {
        description: 'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
        link       : '/ui/page-layouts/carded/right-sidebar-2/page-scroll',
        component  : CardedRightSidebar2PageScrollComponent
      },
      contentScroll: {
        description: 'Only the content area of the page scrolls making everything else to stick into their positions.',
        link       : '/ui/page-layouts/carded/right-sidebar-2/content-scroll',
        component  : CardedRightSidebar2ContentScrollComponent
      }
    }
  }
}, */
  simple: {
    fullWidth: {
      title: 'Simple Full Width Page Layout',
      description:
        'Layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/full-width/normal-scroll',
          component: SimpleFullWidthNormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/full-width/page-scroll',
          component: SimpleFullWidthPageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/full-width/content-scroll',
          component: SimpleFullWidthContentScrollComponent,
        },
      },
    },
    /*
    fullwidth2: {
      title: 'Fullwidth #2',
      description:
        'Layout that spans the entire width of the content area with a dedicated header, tabs and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/fullwidth-2/normal-scroll',
          component: SimpleFullwidth2NormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/fullwidth-2/page-scroll',
          component: SimpleFullwidth2PageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/fullwidth-2/content-scroll',
          component: SimpleFullwidth2ContentScrollComponent,
        },
      },
    },
    leftSidebar1: {
      title: 'Left Sidebar #1',
      description: 'Layout with a left sidebar and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/left-sidebar-1/normal-scroll',
          component: SimpleLeftSidebar1NormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/left-sidebar-1/page-scroll',
          component: SimpleLeftSidebar1PageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/left-sidebar-1/content-scroll',
          component: SimpleLeftSidebar1ContentScrollComponent,
        },
      },
    }, */
    withSidebars: {
      title: 'Simple Page Layout With Sidebars',
      description:
        'Layout with left and right sidebars, a dedicated header and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/with-sidebars/normal-scroll',
          component: SimpleWithSidebarsNormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/with-sidebars/page-scroll',
          component: SimpleWithSidebarsPageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/with-sidebars/content-scroll',
          component: SimpleWithSidebarsContentScrollComponent,
        },
      },
    },
  },
  /*    leftSidebar3: {
      title: 'Left Sidebar #3',
      description:
        'Layout with left sidebar, a fullwidth dedicated header and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/left-sidebar-3/normal-scroll',
          component: SimpleLeftSidebar3NormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/left-sidebar-3/page-scroll',
          component: SimpleLeftSidebar3PageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/left-sidebar-3/content-scroll',
          component: SimpleLeftSidebar3ScrollComponent,
        },
      },
    },
    rightSidebar1: {
      title: 'Right Sidebar #1',
      description: 'Layout with a right sidebar and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/right-sidebar-1/normal-scroll',
          component: SimpleRightSidebar1NormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/right-sidebar-1/page-scroll',
          component: SimpleRightSidebar1PageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/right-sidebar-1/content-scroll',
          component: SimpleRightSidebar1ContentScrollComponent,
        },
      },
    },
    rightSidebar2: {
      title: 'Right Sidebar #2',
      description: 'Layout with a right sidebar, a dedicated header and 4 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
        {
          value: 'innerScroll',
          title: 'Inner Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/right-sidebar-2/normal-scroll',
          component: SimpleRightSidebar2NormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/right-sidebar-2/page-scroll',
          component: SimpleRightSidebar2PageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/right-sidebar-2/content-scroll',
          component: SimpleRightSidebar2ContentScrollComponent,
        },
        innerScroll: {
          description:
            'Only the inner content area of the page scrolls making sidebar and everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/right-sidebar-2/inner-scroll',
          component: SimpleRightSidebar2InnerScrollComponent,
        },
      },
    },
    rightSidebar3: {
      title: 'Right Sidebar #3',
      description:
        'Layout with right sidebar, a fullwidth dedicated header and 3 different scroll modes.',
      availableOptions: [
        {
          value: 'normalScroll',
          title: 'Normal Scroll',
        },
        {
          value: 'pageScroll',
          title: 'Page Scroll',
        },
        {
          value: 'contentScroll',
          title: 'Content Scroll',
        },
      ],
      selectedOption: 'normalScroll',
      options: {
        normalScroll: {
          description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
          link: '/ui/page-layouts/simple/right-sidebar-3/normal-scroll',
          component: SimpleRightSidebar3NormalScrollComponent,
        },
        pageScroll: {
          description:
            'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
          link: '/ui/page-layouts/simple/right-sidebar-3/page-scroll',
          component: SimpleRightSidebar3PageScrollComponent,
        },
        contentScroll: {
          description:
            'Only the content area of the page scrolls making everything else to stick into their positions.',
          link: '/ui/page-layouts/simple/right-sidebar-3/content-scroll',
          component: SimpleRightSidebar3ContentScrollComponent,
        },
      },
    }, */
};
const pageLayoutsUIConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'ui/page-layouts',
      children: [
        {
          path: '',
          element: <Navigate to="overview" />,
        },
        {
          path: 'overview',
          element: <OverviewPageLayoutsUI />,
        },
        {
          path: 'empty',
          children: [
            {
              path: '',
              element: <Navigate to="overview" />,
            },
            {
              path: 'overview',
              element: <PageLayoutOverview data={overviews.empty} />,
            },
            {
              path: 'normal-scroll',
              element: <EmptyNormalScrollComponent />,
            },
            {
              path: 'page-scroll',
              element: <EmptyPageScrollComponent />,
            },
          ],
        },
        {
          path: 'carded',
          children: [
            {
              path: 'full-width',
              children: [
                {
                  path: '',
                  element: <Navigate to="overview" />,
                },
                {
                  path: 'overview',
                  element: <PageLayoutOverview data={overviews.carded.fullWidth} />,
                },
                {
                  path: 'normal-scroll',
                  element: <CardedFullWidthNormalScrollComponent />,
                },
                {
                  path: 'page-scroll',
                  element: <CardedFullWidthPageScrollComponent />,
                },
                {
                  path: 'content-scroll',
                  element: <CardedFullWidthContentScrollComponent />,
                },
              ],
            },
            {
              path: 'with-sidebars',
              children: [
                {
                  path: '',
                  element: <Navigate to="overview" />,
                },
                {
                  path: 'overview',
                  element: <PageLayoutOverview data={overviews.carded.withSidebars} />,
                },
                {
                  path: 'normal-scroll',
                  element: <CardedWithSidebarsNormalScrollComponent />,
                },
                {
                  path: 'page-scroll',
                  element: <CardedWithSidebarsPageScrollComponent />,
                },
                {
                  path: 'content-scroll',
                  element: <CardedWithSidebarsContentScrollComponent />,
                },
              ],
            },
          ],
        },
        {
          path: 'simple',
          children: [
            {
              path: 'full-width',
              children: [
                {
                  path: '',
                  element: <Navigate to="overview" />,
                },
                {
                  path: 'overview',
                  element: <PageLayoutOverview data={overviews.simple.fullWidth} />,
                },
                {
                  path: 'normal-scroll',
                  element: <SimpleFullWidthNormalScrollComponent />,
                },
                {
                  path: 'page-scroll',
                  element: <SimpleFullWidthPageScrollComponent />,
                },
                {
                  path: 'content-scroll',
                  element: <SimpleFullWidthContentScrollComponent />,
                },
              ],
            },
            {
              path: 'with-sidebars',
              children: [
                {
                  path: '',
                  element: <Navigate to="overview" />,
                },
                {
                  path: 'overview',
                  element: <PageLayoutOverview data={overviews.simple.withSidebars} />,
                },
                {
                  path: 'normal-scroll',
                  element: <SimpleWithSidebarsNormalScrollComponent />,
                },
                {
                  path: 'page-scroll',
                  element: <SimpleWithSidebarsPageScrollComponent />,
                },
                {
                  path: 'content-scroll',
                  element: <SimpleWithSidebarsContentScrollComponent />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default pageLayoutsUIConfig;
