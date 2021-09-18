import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarConfig =[
    {
        name:'Dashboard',
        icon:DashboardIcon,
        path:'/dashboard'
    },
    {
        name:'User',
        icon:PersonIcon,
        path:'/users'
    },
    {
        name:'Admins',
        icon:AdminPanelSettingsIcon,
        path:'/admin'
    },
    {
        name:'Questions Set',
        icon:AdminPanelSettingsIcon,
        path:'/questionset'
    },
    {
        name:'Settings',
        icon:SettingsIcon,
        path:'/settings'
    }
]