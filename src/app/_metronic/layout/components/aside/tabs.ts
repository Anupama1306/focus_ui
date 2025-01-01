type Tab = {
  link:
    | 'customer'
      | 'incident'
      | 'tickets'
      | 'myleave'
      | 'timesheet'
      | 'reports';
  icon: string;
  tooltip:
    | 'Customer'
    | 'Incident'
    | 'Tickets'
    | 'Myleave'
    | 'Timesheet'
    | 'Reports';
};

const tabs: ReadonlyArray<Tab> = [
  {
    link: 'customer',
    icon: './assets/media/icons/duotune/general/gen025.svg',
    tooltip: 'Customer',
  },
  {
    link: 'incident',
    icon: './assets/media/icons/duotune/finance/fin006.svg',
    tooltip: 'Incident',
  },
  {
    link: 'tickets',
    icon: './assets/media/icons/duotune/general/gen032.svg',
    tooltip: 'Tickets',
  },
  {
    link: 'myleave',
    icon: './assets/media/icons/duotune/general/gen048.svg',
    tooltip: 'Myleave',
  },
  {
    link: 'timesheet',
    icon: './assets/media/icons/duotune/abstract/abs027.svg',
    tooltip: 'Timesheet',
  },
  {
    link: 'reports',
    icon: './assets/media/icons/duotune/files/fil005.svg',
    tooltip: 'Reports',
  },
];

export { tabs, Tab };
