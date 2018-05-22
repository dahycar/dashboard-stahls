export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'tickets',
        data: {
          menu: {
            title: 'Tickets',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 70
          }
        }
      }
    ]
  }
];
