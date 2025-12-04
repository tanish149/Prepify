import logo from '../assets/chef-logo.svg'
function Header(){
    return(
    <div className="header">
        <img src={logo} alt='Chef Logo'/>
        <h1>Prepify</h1>
    </div>
    )
}
export default Header;