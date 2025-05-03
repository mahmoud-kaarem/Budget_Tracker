import '../styles/TopBar.css';
import website_logo from'../assets/WebSiteLogo.png'
function TopBar() {
  return (
    <div className="TopBar">
        <img src={website_logo}  alt='website-logo' className='website-logo' />
        <h1 className='website_name'>Budget Tracker</h1>
        <a href='/logout' className='logout_button'>LogOut</a>
    </div>
  );
}

export default TopBar;