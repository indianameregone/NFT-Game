import React from 'react';
import './styles.css';
import Player1 from './player1';
import Player2 from './player2';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Init from './init';
import Gallery from './gallery';



function Board(){
    return(
        <div className='img'>
            <Router>
                <Switch>
                    <Route path="/" exact >
                        <Init /> 
                    </Route>                                   
                    <Route path="/player1">
                        <Player1/>
                    </Route>
                    <Route path="/player2">
                        <Player2/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                    </Route>                    
                </Switch>                           
            </Router>
           
        </div>
        
    )
}

export default Board;