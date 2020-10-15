import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Consultorias e Assessorias',
    to: '/partners',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Normas Técnicas',
    to: '/standards',
    icon: <CIcon name="cil-notes" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Requerimentos',
    to: '/requirements',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Gestão Industrial',
    to: '/processes',
    icon: <CIcon name="cil-factory" customClasses="c-sidebar-nav-icon"/>
  }
]

