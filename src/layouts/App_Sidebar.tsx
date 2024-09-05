
import { Layout, Menu } from 'antd';
import generateSidebarRoutes from '../utils/Generate_Sidebar';
import { adminRoutes } from '../routes/admin.routes';
import { userRoutes } from '../routes/user.routes';


const { Sider } = Layout;



const role = 'student'
let routeStatus: any;
const UserRoles = {
    ADMIN: "admin",
    STUDENT: 'student',
    FACULTY: 'faculty',
    USER: 'user',
    SUPER: 'super'
}
switch (role) {
    case UserRoles.SUPER:
        routeStatus = generateSidebarRoutes(adminRoutes, UserRoles.SUPER)
        break;
    case UserRoles.ADMIN:
        routeStatus = generateSidebarRoutes(adminRoutes, UserRoles.ADMIN)
        break;
    case UserRoles.STUDENT:
        routeStatus = generateSidebarRoutes(userRoutes, UserRoles.USER)
        break;
    case UserRoles.FACULTY:
        routeStatus = generateSidebarRoutes(userRoutes, UserRoles.USER)
        break;

    default:
        break;
}


const App_Sidebar = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" style={{ background: 'red', color: 'white', textAlign: 'center' }}>ROLE - ADMIN</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={routeStatus} />
        </Sider>
    )
}

export default App_Sidebar
