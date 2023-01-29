import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import Utilisateurs from './Utilisateurs/Utilisateurs';
import dashboard from './Dashboard/dashboard';
import Vehicules from './Vehicules/Vehicules';
import Chauffeurs from "./Chauffeurs/Chauffeurs";
import Mecaniciens from './Mecaniciens/Mecaniciens';
import Missions from './Missions/Missions';
import Mec from './Mec/Mec';
import Pannes from './Pannes/Pannes';
import Amendes from './Amendes/Amendes';
import TypeCK from './Checklist/Type/TypeCK';
import SousTypeCK from './Checklist/SousType/SousTypeCK';
import ContenuCK from './Checklist/Contenu/ContenuCK';
import CK from './Checklist/CK/CK';
import AfficherCK from './Checklist/AfficherCK/AfficherCK';
import ListCK from './Checklist/CK/ListCK';
import RemplirCK from './Checklist/RemplirCK/RemplirCK';
import Notifications from './Notifications/Notifications';
function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={dashboard} />
                <Route exact path={SLUGS.Utilisateurs} component={Utilisateurs} />
                <Route exact path={SLUGS.Vehicules} component={Vehicules} />
                <Route exact path={SLUGS.Chauffeurs} component={Chauffeurs} />
                <Route exact path={SLUGS.Vehicules} component={Vehicules} />
                <Route exact path={SLUGS.Mecaniciens} component={Mecaniciens} />


                <Route exact path={SLUGS.Missions} component={Missions} />
                <Route exact path={SLUGS.Mec} component={Mec} />

                <Route exact path={SLUGS.Pannes} component={Pannes} />


                <Route exact path={SLUGS.Amendes} component={Amendes} />

                <Route exact path={SLUGS.CK} component={CK} />
                <Route exact path={SLUGS.RemplirCK} component={RemplirCK} />
                <Route exact path={SLUGS.ListCK} component={ListCK} />
                <Route exact path={SLUGS.AfficherCK} component={AfficherCK} />
                <Route exact path={SLUGS.TypeCK} component={TypeCK} />
                <Route exact path={SLUGS.SousTypeCK} component={SousTypeCK} />
                <Route exact path={SLUGS.ContenuCK} component={ContenuCK} />

                <Route exact path={SLUGS.Notifications} component={Notifications} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} />
                <Route exact path={SLUGS.agents} render={() => <div>agents</div>} />
                <Route exact path={SLUGS.articles} render={() => <div>articles</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
