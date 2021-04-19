import { Switch, Route, BrowserRouter } from 'react-router-dom';

import TaskList from '../components/TaskList';
import TaskDetail from '../components/TaskDetial';
import { Routes } from './types';

export const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path={Routes.home} component={TaskList} />
            <Route path={Routes.detail} component={TaskDetail} />
        </Switch>
    </BrowserRouter>
)

export default Router;