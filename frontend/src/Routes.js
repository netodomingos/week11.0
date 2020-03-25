import React from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

// Routes
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import NewIncident from './pages/NewIncident/NewIncident'

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register'  component={Register} />
                <Route path='/profile'  component={Profile} />
                <Route path='/incidents/new' component={NewIncident}/>
            </Switch> 
        </Router>
    )
}