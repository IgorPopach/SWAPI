import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Films from '../components/Films';
import People from '../components/People';
import Planets from '../components/Planets';
import Species from '../components/Species';
import Starships from '../components/Starships';
import Vehicles from '../components/Vehicles';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/species" component={Species} />
        <Route path="/starships" component={Starships} />
        <Route path="/vehicles" component={Vehicles} />
    </Switch>

);
