import React ,{createContext, useState} from 'react';
import AppContainer from './appcontainer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import config from 'config';
import Booking from './Context/Booking.js';
import PharmacyUser  from './Context/PharmacyUser.js';
import Registerauth from './Context/Registerauth.js';

export const Appcontext = createContext()

const AppRouter = (props) => {

    const [isAuth, setIsAuth] = useState("user")
    return(
     <Registerauth>
        <Booking>
   
        <Router type="application/json" basename={`${config.publicPath}`}>

           

            <Appcontext.Provider value={{isAuth, setIsAuth}}>
                <Route render={(props)=> <AppContainer {...props}/>} />
            </Appcontext.Provider>
            
        </Router>
     
        </Booking>
        </Registerauth>
    );
    
}


export default AppRouter;