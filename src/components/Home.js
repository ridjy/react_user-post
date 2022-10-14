import React from 'react';
import {Route, Routes,Navigate, Link, BrowserRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';

function Home() {
    
    return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <BrowserRouter>
                   <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                </BrowserRouter>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                           <BrowserRouter><Link className={"nav-link"} to={"/posts"}> Posts </Link></BrowserRouter>
                           </li>
    
                           <li className="nav-item">
                           <BrowserRouter><Link className={"nav-link"} to={"/users"}> Users </Link></BrowserRouter>
                           </li>
                       </ul>
                   </div>
               </nav>
               <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Navigate replace to="/users" />} />
                   <Route path="/users" component={Users} />
                   <Route path="/posts" component={Posts} />
               </Routes>
               </BrowserRouter>
           </div>
    )
}
    
export default Home;
