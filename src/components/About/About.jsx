import { Grid, Typography } from '@material-ui/core';
import './About.style.css';
import about from '../../assets/about.gif'

const About= () => {
    
    return (
        <div className="About">
            <Grid container spacing={2}>
                <Grid item 
                sm={12}
                md={6}>
                    <img src={about} className='aboutavatar ' alt=""/>

                </Grid>
                <Grid item 
                sm={12}
                md={6}>
                    <div >
                    <Typography variant="h3" className="aboutheading" gutterBottom>About</Typography>
                        <Typography variant="h6" style={{ color: "#ffffff",fontWeight:300}} gutterBottom>My copywriting and UX writing draws on abilities developed in the psychological sciences.</Typography>
                        <Typography variant="h6" style={{ color: "#ffffff",fontWeight:300}} gutterBottom>Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users.</Typography>
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
}
export default About