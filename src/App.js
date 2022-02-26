import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Candidats from './Components/Candidats/Candidats';
import CandidatDetails from './Components/CandidatDetails/CandidatDetails';
import Enseignants from './Components/Enseignants/Enseignants';
import EnseignantDetails from './Components/EnseignantDetails/EnseignantDetails';
import Formations from './Components/Formations/Formations';
import FormationDetails from './Components/FormationDetails/FormationDetails';

import Promotions from './Components/Promotions/Promotions';
import PromotionDetails from './Components/PromotionDetails/PromotionDetails';


function App() {
  return (
    <>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/candidats">
          <Candidats />
        </Route>
        <Route exact path="/candidats/:id">
          <CandidatDetails />
        </Route>
        <Route exact path="/enseignants">
          <Enseignants />
        </Route>
        <Route exact path="/enseignants/:id">
          <EnseignantDetails />
        </Route>
        <Route exact path="/formations">
          <Formations />
        </Route>
        <Route exact path="/formations/:id">
          <FormationDetails />
        </Route>
        <Route exact path="/promotions">
          <Promotions/>
        </Route>
        <Route exact path="/promotions/:codeFormation/:anneeUniversitaire">
          <PromotionDetails />
        </Route>
        
      </Switch>
      </Layout>
    </Router>
      
    </>
  );
}

export default App;
