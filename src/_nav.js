export default {
  items: [
    {
      name: 'Overview',
      url: '/home/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Region Summary',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'By Vehicle',
      url: '#',
      icon: 'icon-drop',
    },
    {
      name: 'By Zone',
      url: '/home/byZones',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: '',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Zone Comparision',
      url: '/home/dashboard',
      icon: 'fa fa-automobile'
    },
    {
      name: 'Time Sheet Summary',
      url: '#',
      icon: 'icon-puzzle',
    },
    {
      name: 'Tolls & Taxes report',
      url: '#',
      icon: 'icon-puzzle',
    },
    {
      title: true,
      name: '',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Vehicle Summary',
      url: '/home/vehicles',
      icon: 'icon-puzzle',
    },
    {
      name: 'DVIR Summary',
      url: '#',// /home/addDriver
      icon: 'icon-puzzle',
    },
    {
      name: 'Fuel Report',
      url: '/home/fuel',
      icon: 'icon-puzzle',
    },
    {
      name: 'Breakdown Summary',
      url: '/home/breakdown',
      icon: 'icon-puzzle',
    },
    {
      name: 'Accident Summary',
      url: '#',
      icon: 'icon-puzzle',
    },
    {
      name: 'Service Summary',
      url: '#',
      icon: 'icon-puzzle',
    }
  ]  
    /*{
      name: 'Base',
      url: '/home/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/home/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/home/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/home/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/home/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/home/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/home/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/home/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/home/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/home/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/home/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/home/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/home/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/home/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/home/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/home/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/home/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/home/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/home/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/home/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/home/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/home/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Icons',
      url: '/home/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/home/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/home/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/home/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/home/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
  ],*/
};
