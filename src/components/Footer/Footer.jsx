import './Footer.style.css'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import useWebAnimations, { fadeInDown } from "@wellyshen/use-web-animations";
import waving1 from '../../assets/waving1.gif'
import waving2 from '../../assets/waving2.gif'
import waving3 from '../../assets/waving3.gif'
import waving4 from '../../assets/waving4.gif'
import waving5 from '../../assets/waving5.gif'
const Footer = () => {
    const wavingAvatars = [ waving1, waving2, waving3, waving4, waving5 ];
    const { ref: icon} = useWebAnimations({
        ...fadeInDown,
        onReady: ({ animation }) => setInterval(() => animation.play(), 5000),
        
    });
    return (
        <div className="footercontainer">
                <div className="avatars">
                {[0,1,2,3,4].map( i => (
                    <img key={i} src={wavingAvatars[i]} alt="" className="avatar" />
                ))}
            </div>
            <p>Made By Zeeshan Jawed| Copyright © 2021</p>
            <ul ref={icon} >
                <li>
                <Tooltip title="jawedzeeshan1@gmail.com">
                <a href="mailto:jawedzeeshan1@gmail.com" target="_blank" rel="noreferrer">
                <IconButton aria-label="email"  >
                    <EmailIcon className="icon"  />
                </IconButton>
                </a>
            </Tooltip>
                </li>
                <li>
                <Tooltip title="GitHub">
                <a href="https://github.com/Zeeshan-Jawed" target="_blank" rel="noreferrer">
                <IconButton aria-label="GitHub" >
                    <GitHubIcon className="icon"   />
                </IconButton>
                </a>
            </Tooltip>         
                </li>
                <li>
                <Tooltip title="LinkedIn">
                <a href="https://www.linkedin.com/in/zeeshan-jawed/" target="_blank" rel="noreferrer">
                <IconButton aria-label="LinkedInIcon" >
                    <LinkedInIcon className="icon" />
                </IconButton>
                </a>
            </Tooltip>
                </li>
            </ul>
        </div>
    )
}
export default Footer