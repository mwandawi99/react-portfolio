import LogoTitle from '../../assets/images/logo-M.png'
import { Link } from 'react-router-dom'
import './index.scss';
import Sidebar from '../Sidebar'

const Home = () => {
    <Sidebar/>
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                 <img src={LogoTitle} alt="developer" /> 
                 ohammad W.
                 <br />
                 Software Engineer
                 </h1>
                 <h2>Full Stack Developer / Analytics Expert </h2>
                 <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home
