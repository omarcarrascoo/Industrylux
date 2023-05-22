import '../assets/css/style.css'
import logo from '../assets/imgs/INDUSTRYLUX.jpg'
import { FaSearchLocation } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
const Header = () =>{
    return(
        <>
        <header className="mainHeader">
            <div className="container">
                <div className="mainHeaderLogo">
                   <Link to="/"> <img src={logo} alt="Logo Industrylux" /></Link>
                </div>
                <div className="searchBar">
                    <form className='searchBarContainer' action="POST">
                        <input type="text" name='Characteristics' placeholder='Search for a place... '/>
                        <FaSearchLocation />
                    </form>
                </div>
                    <nav className="mainNav">
                        <ul><li><Link to="/">Propiedades </Link></li><li><Link to="/contacto">Contacto</Link></li><li><Link to="/en/Properities">English</Link></li></ul>
                    </nav>
                </div>
        </header>
        <main className="outlet">
            <Outlet/>
        </main>
        </>
    )
};

export default Header;