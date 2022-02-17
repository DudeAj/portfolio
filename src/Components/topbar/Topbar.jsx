import './topbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const Topbar = () => {

  return (

    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#works" className='logo'>genius.</a>
          <div className="itemContainer">
            <PersonIcon className='icon'/>
            <span>+918979806045</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>ajay@contact.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Topbar