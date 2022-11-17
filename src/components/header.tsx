import "../css/header.css";
import { Link } from "react-router-dom";
import React from 'react';
import accContext from "../authContext";
import ExitButton from '../components/exitButton';



function Header() {
    const isLogin = React.useContext(accContext);   

    return (
        <header>
            <div className="offcanvas offcanvas-start" id="demo">
                        <div className="offcanvas-header">
                            <h1 className="offcanvas-title">Ваши Курсы</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="side-bar-part">
                                <Link className="side-bar-link" to="/curs">
                                        aaaaaaaaaaaaaaaaaaаааааааааа
                                </Link>
                            </div>
                            <div className="side-bar-part">
                                <Link className="side-bar-link" to="/curs">
                                    aaaaaaaaaaaaa
                                </Link>
                            </div>
                            <div className="side-bar-part">
                                <Link className="side-bar-link" to="/curs">
                                        aaaaaaaaaaaaaaaaaaаааааааааа
                                </Link>
                            </div>
                            <div className="side-bar-part">
                                <Link className="side-bar-link" to="/curs">
                                        aaaaaaaaaaaaaaaaaaаааааааааа
                                </Link>
                            </div>
                            <div className="side-bar-part">
                                <Link className="side-bar-link" to="/curs">
                                        aaaaaaaaaaaaaaaaaaаааааааааа
                                </Link>
                            </div>
                        </div>
                    </div>
            <div className="cont">
                <div className="logo-all">     
                    <div className="context-menu">
                        
                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="offcanvas" data-bs-target="#demo">亖</button>
                    </div>
                    
                    <Link className="home-link" to="/">
                        <div className="logo">
                            <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="logo-img" />
                        </div>
                    </Link>    
                    <Link className="home-link" to="/">
                        <div className="logo-text">
                            <span>
                                Класс
                            </span>
                        </div>
                    </Link>    
                    
                </div>
                <nav>
                    <ul>
                        {isLogin?.auth === true && <li><button  type="button" className="btn btn-outline-secondary">+</button></li>}
                        
                        {isLogin?.auth === false && <Link className="home-link" to="/login"><li> <button type="button"className="btn btn-outline-secondary" >Вход</button></li> </Link>}
                        {isLogin?.auth === true && <li> <ExitButton /> </li> }
                    </ul>
                </nav>
            </div>
        </header>

    );
}


export default Header;