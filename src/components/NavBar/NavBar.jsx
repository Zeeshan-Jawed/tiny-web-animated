import { Typography } from '@material-ui/core';
import './NavBar.style.css'
const NavBar=()=>{
    return(
        <div className="NavBar">
                <Typography variant="h6" style={{ color: "#ffffff" }} gutterBottom>
                        Tiny Web</Typography>
        </div>
    )
}

export default NavBar;