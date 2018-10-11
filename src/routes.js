import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';
import ManagerLayout from './containers/DefaultLayout/ManagerLayout';
import UserLayout from './containers/DefaultLayout/UserLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Breadcrumbs = Loadable({
  loader: () => import('./views/Base/Breadcrumbs'),
  loading: Loading,
});

const Cards = Loadable({
  loader: () => import('./views/Base/Cards'),
  loading: Loading,
});

const Carousels = Loadable({
  loader: () => import('./views/Base/Carousels'),
  loading: Loading,
});

const Collapses = Loadable({
  loader: () => import('./views/Base/Collapses'),
  loading: Loading,
});

const Dropdowns = Loadable({
  loader: () => import('./views/Base/Dropdowns'),
  loading: Loading,
});

const Forms = Loadable({
  loader: () => import('./views/Base/Forms'),
  loading: Loading,
});

const Jumbotrons = Loadable({
  loader: () => import('./views/Base/Jumbotrons'),
  loading: Loading,
});

const ListGroups = Loadable({
  loader: () => import('./views/Base/ListGroups'),
  loading: Loading,
});

const Navbars = Loadable({
  loader: () => import('./views/Base/Navbars'),
  loading: Loading,
});

const Navs = Loadable({
  loader: () => import('./views/Base/Navs'),
  loading: Loading,
});

const Paginations = Loadable({
  loader: () => import('./views/Base/Paginations'),
  loading: Loading,
});

const Popovers = Loadable({
  loader: () => import('./views/Base/Popovers'),
  loading: Loading,
});

const ProgressBar = Loadable({
  loader: () => import('./views/Base/ProgressBar'),
  loading: Loading,
});

const Switches = Loadable({
  loader: () => import('./views/Base/Switches'),
  loading: Loading,
});

const Tabs = Loadable({
  loader: () => import('./views/Base/Tabs'),
  loading: Loading,
});

const Tooltips = Loadable({
  loader: () => import('./views/Base/Tooltips'),
  loading: Loading,
});

const BrandButtons = Loadable({
  loader: () => import('./views/Buttons/BrandButtons'),
  loading: Loading,
});

const ButtonDropdowns = Loadable({
  loader: () => import('./views/Buttons/ButtonDropdowns'),
  loading: Loading,
});

const ButtonGroups = Loadable({
  loader: () => import('./views/Buttons/ButtonGroups'),
  loading: Loading,
});

const Buttons = Loadable({
  loader: () => import('./views/Buttons/Buttons'),
  loading: Loading,
});

const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Driver = Loadable({
  loader: () => import('./views/TrackAndTrace/driver'),
  loading: Loading,
});

const Logs = Loadable({
  loader: () => import('./views/Base/Tables/logs'),
  loading: Loading,
});

const AdminTimeSheets = Loadable({
  loader: () => import('./views/BusinessUser/timeSheet'),
  loading: Loading,
});

const AdminTolls = Loadable({
  loader: () => import('./views/BusinessUser/tolls-taxes'),
  loading: Loading,
});

const AdminVehicles = Loadable({
  loader: () => import('./views/Admin/vehicles'),
  loading: Loading,
});

const AdminFuel = Loadable({
  loader: () => import('./views/Admin/fuel'),
  loading: Loading,
});

const AdminBreakdown = Loadable({
  loader: () => import('./views/Admin/breakdown'),
  loading: Loading,
});

const AdminDVIR = Loadable({
  loader: () => import('./views/Admin/dvir.js'),
  loading: Loading,
});

const ManagerVehicles =  Loadable({
  loader: () => import('./views/Base/Tables/vehicles'),
  loading: Loading,
})

const ManagerFuelLogs = Loadable({
  loader: () => import('./views/Base/Tables/fuel'),
  loading: Loading,
})

const ManagerBreakdownLogs = Loadable({
  loader: () => import('./views/Base/Tables/breakdown'),
  loading: Loading,
})

const ManagerDashboard = Loadable({
  loader: () => import('./views/Dashboard/ManagerDashboard'),
  loading: Loading,
})

const AdminDashboard = Loadable({
  loader: () => import('./views/Dashboard/AdminDashboard'),
  loading: Loading,
})

const AddDriver = Loadable({
  loader: () => import('./views/AddControls/addDriver'),
  loading: Loading,
})

const AddVehicle = Loadable({
  loader: () => import('./views/AddControls/addVehicle'),
  loading: Loading,
})

const AddDevice = Loadable({
  loader: () => import('./views/AddControls/addDevice'),
  loading: Loading,
})

const Drivers = Loadable({
  loader: () => import('./views/Base/Tables/drivers'),
  loading: Loading,
});

const ActiveTrips = Loadable({
  loader: () => import('./views/ActiveTrips/ActiveTrips'),
  loading: Loading,
});

const CoreUIIcons = Loadable({
  loader: () => import('./views/Icons/CoreUIIcons'),
  loading: Loading,
});

const Flags = Loadable({
  loader: () => import('./views/Icons/Flags'),
  loading: Loading,
});

const FontAwesome = Loadable({
  loader: () => import('./views/Icons/FontAwesome'),
  loading: Loading,
});

const SimpleLineIcons = Loadable({
  loader: () => import('./views/Icons/SimpleLineIcons'),
  loading: Loading,
});

const Alerts = Loadable({
  loader: () => import('./views/Notifications/Alerts'),
  loading: Loading,
});

const Badges = Loadable({
  loader: () => import('./views/Notifications/Badges'),
  loading: Loading,
});

const Modals = Loadable({
  loader: () => import('./views/Notifications/Modals'),
  loading: Loading,
});

const Colors = Loadable({
  loader: () => import('./views/Theme/Colors'),
  loading: Loading,
});

const ByZones = Loadable({
  loader: () => import('./views/Theme/Zones/byZones'),
  loading: Loading,
});

const Widgets = Loadable({
  loader: () => import('./views/Widgets/Widgets'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/srinuvas', excat: true, name: 'Home', component: UserLayout },
  { path: '/home', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/manager', exact: true, name: 'Home', component: ManagerLayout },
  { path: '/srinivas/adminDashboard', excat: true, name: 'By Operation Team', component: AdminDashboard },
  { path: '/srinivas/addDriver', excat: true, name: 'By Operation Team', component: AddDriver },
  { path: '/srinivas/addVehicle', excat: true, name: 'By Operation Team', component: AddVehicle },
  { path: '/srinivas/addDevice', excat: true, name: 'By Operation Team', component: AddDevice },
  { path: '/home/dashboard', name: 'By Operation Team', component: Dashboard },
  { path: '/home/vehicles', name:'Vehicles', component:AdminVehicles },
  { path: '/home/timeSheet', name:'Time Sheet Summary', component:AdminTimeSheets },
  { path: '/home/tolls', name:'Tolls', component:AdminTolls },
  { path: '/home/fuel', name:'Fuel Report', component:AdminFuel },
  { path: '/home/breakdown', name:'Breakdown Summary', component:AdminBreakdown },
  { path: '/home/dvir', name:'Drivers', component:AdminDVIR },
  { path: '/manager/dashboard', name: 'By Operation Team', component: ManagerDashboard },
  { path: '/home/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/home/theme/colors', name: 'Colors', component: Colors },
  { path: '/home/byZones', name: 'By Zones', component: ByZones },
  { path: '/home/base', exact: true, name: 'Base', component: Cards },
  { path: '/home/base/cards', name: 'Cards', component: Cards },
  { path: '/home/base/forms', name: 'Forms', component: Forms },
  { path: '/home/base/switches', name: 'Switches', component: Switches },
  { path: '/manager/logs', name: 'Logs', component: Logs },
  { path: '/manager/drivers', name: 'Drivers', component: Drivers },
  { path: '/manager/ActiveTrips', name: 'ActiveTrips', component: ActiveTrips },
  { path: '/manager/vehicles', name: 'Vehicles', component: ManagerVehicles },
  { path: '/manager/fuelLogs', name: 'Fuel', component: ManagerFuelLogs },
  { path: '/manager/breakdownLogs', name: 'Breakdowns', component: ManagerBreakdownLogs },
  { path: '/home/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/home/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/home/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/home/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/home/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/home/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/home/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/home/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/home/base/navs', name: 'Navs', component: Navs },
  { path: '/home/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/home/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/home/home/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/home/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/home/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/home/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/home/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/home/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/home/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/home/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/home/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/home/icons/flags', name: 'Flags', component: Flags },
  { path: '/home/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/home/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/home/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/home/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/home/notifications/badges', name: 'Badges', component: Badges },
  { path: '/home/notifications/modals', name: 'Modals', component: Modals },
  { path: '/home/widgets', name: 'Widgets', component: Widgets },
  { path: '/home/charts', name: 'Charts', component: Charts },
  { path: '/manager/:driver', name: '', component: Driver },
  { path: '/home/users', exact: true,  name: 'Users', component: Users },
  { path: '/home/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
