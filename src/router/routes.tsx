import Chat from "../components/Chat";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Settings from "../components/Settings";

interface RouteConfig {
    path: string;
    component: React.ReactNode;
}

export const publicRoutes: RouteConfig[] =[ 
    {path: '/login', component: <Login/>},
    {path: '/registration', component: <Registration/>},
    {path: '/chat', component: <Chat/>},
]

export const privateRoutes: RouteConfig[] = [
    {path: '/chat', component: <Chat/>},
    {path: '/settings', component: <Settings/>},
    {path: '/login', component: <Login/>},

  ]