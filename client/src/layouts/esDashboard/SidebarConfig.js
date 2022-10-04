// routes
import { PATH_DASHBOARD } from "src/routes/paths";
// components
import SvgIconStyle from "../../components/SvgIconStyle";
import { useRouter } from 'next/router';
// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: 22, height: 22 }}
  />
);

const ICONS = {
  page: getIcon("ic_page"),
  dashboard: getIcon("ic_dashboard"),
};

const sidebarConfig = [
  // GENERAL
  

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: "app",
    items: [
      {
        // FOUNDATIONS
        // ----------------------------------------------------------------------
        title: "Principal",
        href: "/principal",
        icon: ICONS.dashboard,
        items: [
          {
            title: "Página secundaria 1",
            href: '/principal/subpagina1',
          },
          {
            title: "Página secundaria 2",
            href: '/principal/subpagina2',
          },
        ],
      },
    ],
  },
];

export default sidebarConfig;
