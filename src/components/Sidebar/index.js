import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to ='/'>
            <img src={Logo} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="silver"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="silver"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="silver"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/lautaro-graciani">
                    <FontAwesomeIcon icon={faLinkedin} color="#004e89" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/lautarograc">
                    <FontAwesomeIcon icon={faGithub} color="#004e89" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://calendar.google.com/calendar/u/0?cid=aW5qdGk4MDhqb2hudGhmMDRwdW91dTd0NWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
                    <FontAwesomeIcon icon={faCalendar} color="#004e89" />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar