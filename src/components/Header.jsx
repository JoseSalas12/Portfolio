import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import Work from "./Work";
import HamburgerMenu from "./HamburgerMenu";

function Header(){
    return(
        <> 
        <header id="header" className="w-full fixed top-0 left-0 z-50 mt-4 px-7 bg-transparent">
            <div className="w-full max-w-full flex items-center justify-between mx-auto py-1.25 px-1.5 rounded-full bg-surface shadow-box lg:max-w-7xl lg:bg-transparent lg:py-0 lg:pl-0 lg:pr-7 lg:shadow-none">
                <Navbar/>
                <Work/>
                <div className="hidden order-3 py-1.75 px-8 rounded-full bg-surface shadow-none lg:flex lg:shadow-box">
                    <SocialLinks/>
                </div>
                <HamburgerMenu/>
                
                
            </div>
        </header>
        </>
    )
}

export default Header