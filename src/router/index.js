import { createRouter, createWebHistory } from 'vue-router';

import DashboardPage from '../pages/master/dashboard';
import HomePage from '../pages/home';
import ProfilePage from '../pages/profile';
import SettingPage from '../pages/setting';
import MessagePage from '../pages/message';
import DownloadPage from '../pages/download';

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: DashboardPage,
        children: [
            {
                name: 'Home',
                path: '/home',
                component: HomePage
            },
            {
                name: 'Profile',
                path: '/profile',
                component: ProfilePage
            },
            {
                name: 'Setting',
                path: '/setting',
                component: SettingPage
            },
            {
                name: 'Message',
                path: '/message',
                component: MessagePage
            }, {
                name: 'Download',
                path: '/download',
                component: DownloadPage
            }
        ]
    }
    
];

const router = Router();
export default router;

function Router(){
    const router = new createRouter({
        history: createWebHistory(),
        routes
    });

    return router;
}