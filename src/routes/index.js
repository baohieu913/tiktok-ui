import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Chat from '~/pages/Chat';
import Bumble from '~/pages/Bumble';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';

import ForgotPassword from '~/pages/ForgotPassword';
import { HeaderOnly, Components } from '~/components/Layout';

// pulic routes
const publicRoutes = [
    { Path: '/', component: Home, layout: null },
    { Path: '/login', component: Login, layout: HeaderOnly },
    { Path: '/bumble/chat', component: Chat },
    { Path: '/bumble', component: Bumble },
    { Path: '/profile', component: Profile, layout: Components },
    { Path: '/register', component: Register, layout: HeaderOnly },
    { Path: '/forgotpassword', component: ForgotPassword, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
