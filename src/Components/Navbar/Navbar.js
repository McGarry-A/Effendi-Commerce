import './Navbar.css'
import {BsBagCheck} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>MENS</li>
                    <li className='nav-item'>WOMENS</li>
                    <li className='nav-item'>CHILDREN</li>
                    <li className='nav-item'>HOME</li>
                </ul>
            </nav>
            <div className='logo-div'>
                <span className='logo-item'>E</span>
                <span className='logo-item'>F</span>
                <span className='logo-item'>F</span>
                <span className='logo-item'>E</span>
                <span className='logo-item'>N</span>
                <span className='logo-item'>D</span>
                <span className='logo-item'>I</span>
            </div>
            <div className='nav-icons'>
                <ul className='nav-icon-list'>
                    <li className='nav-icon-item'><BsBagCheck size="1.2em"/></li>
                    <li className='nav-icon-item'><BiUser size="1.4em"/></li>
                </ul>
            </div>
        </header>
        )
}

export default Navbar