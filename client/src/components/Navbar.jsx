import {MdNotifications, MdSettings} from 'react-icons/md';
import {FaEnvelope} from 'react-icons/fa';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <span className="logo">Notify</span>
            <div className="navbar__icons">
                <div className="navbar__icon">
                    <MdNotifications />
                    <div className="counter">2</div>
                </div>
                <div className="navbar__icon">
                    <FaEnvelope />
                    <div className="counter">2</div>
                </div>
                <div className="navbar__icon">
                    <MdSettings />
                    <div className="counter">2</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;