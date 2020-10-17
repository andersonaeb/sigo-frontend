import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Partners = React.lazy(() => import('./views/partners/Partners'));
const PartnerForm = React.lazy(() => import('./views/partners/PartnerForm'));
const PartnerDetail = React.lazy(() => import('./views/partners/PartnerDetail'));


const Requirements = React.lazy(() => import('./views/requirements/Requirements'));
const RequirementForm = React.lazy(() => import('./views/requirements/RequirementForm'));
const RequirementDetail = React.lazy(() => import('./views/requirements/RequirementDetail'));


const Standards = React.lazy(() => import('./views/standards/Standards'));
const StandardForm = React.lazy(() => import('./views/standards/StandardForm'));
const StandardDetail = React.lazy(() => import('./views/standards/StandardDetail'));

const Processes = React.lazy(() => import('./views/processes/Processes'));

export const AdminRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },  
  { path: '/partners', exact: true, name: 'Consultorias e Assessorias', component: Partners },
  { path: '/partners/view/:id', name: 'Detalhes', component: PartnerDetail },
  { path: '/partners/insert', name: 'Inserir', component: PartnerForm },
];

export const PartnerRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/requirements', exact: true, name: 'Requerimentos', component: Requirements },
  { path: '/requirements/view/:id', name: 'Detalhes', component: RequirementDetail },
  { path: '/requirements/insert', name: 'Inserir', component: RequirementForm },

  { path: '/standards', exact: true, name: 'Normas Técnicas', component: Standards },
  { path: '/standards/view/:id', name: 'Detalhes', component: StandardDetail },
  { path: '/standards/insert', name: 'Inserir', component: StandardForm },

  { path: '/processes', name: 'Gestão do Processo Industrial', component: Processes }
];

export const ManagerRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/processes', name: 'Gestão do Processo Industrial', component: Processes }
];