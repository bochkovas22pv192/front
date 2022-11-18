import React from 'react';
import '../css/home.css';
import { Link } from "react-router-dom";
import accContext from "../authContext";
import CursBaner from '../components/cursBaner';
function Home() {


    const isLogin = React.useContext(accContext);
return (
    <div>
    {/* <div>
        <div className="sub-header">
            <div className="cont">
                <nav>
                    <ul>
                        <li>Список заданий</li>
                        <li>Список курсов</li>
                    </ul>
                </nav>
            </div>
        </div>
     </div> */}
     <main className="cont">
     {isLogin?.auth === false && <img className='main-img' src="https://thumbs.dreamstime.com/b/programaci%C3%B3n-codificaci%C3%B3n-de-concepto-plano-54998068.jpg"  alt="main-img" />}       
     {isLogin?.auth === true && 
        <section className="curs-list">
            <CursBaner />
            <CursBaner />
            <CursBaner />
            <CursBaner />
            <CursBaner />
            <CursBaner />
            
        </section>
    }
 </main>
 </div>
)
}

export default Home;