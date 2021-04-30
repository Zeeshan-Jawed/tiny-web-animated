import './Feature.style.css'
import frontlayer from '../../assets/frontlayer.svg'
import intro from '../../assets/intro.svg'
import brain from '../../assets/brain.svg'
import useWebAnimations,{swing} from "@wellyshen/use-web-animations";

import { Grid, Typography } from '@material-ui/core';
const Feature = () => {
    
    const { ref: brainRef } = useWebAnimations({
        keyframes: { transform: ["translateY(20px)", "translateY(-20px)"] },
        animationOptions: { duration: 1500, iterations: Infinity, direction: 'alternate', easing: "ease-in-out", },
    });
    const { ref: layerRef } = useWebAnimations({
        id: 'layer',
        keyframes: { opacity: [ 0 , 1, 1, ] },
        animationOptions: { duration: 1000, iterations: Infinity, direction: 'alternate', easing: 'steps(3, end)'},
    });
    return (
        <div className="contain">
            <Grid container spacing={2}>
                <Grid item 
                sm={12}
                md={5}>
                    <div  >
                        <Typography variant="h1" style={{ color: "#ffffff", fontWeight: "500",textAlign:'center' }} gutterBottom>CORTEX
                        COPYWRITER</Typography>
                        <Typography variant="subtitle1" style={{ color: '#ffffff', textAlign:'center',fontSize:'20px'}}>Enhance your communications with psychology-based copywriting and UX writing</Typography>
                        
                    </div>
                   
                </Grid>
                <Grid item 
                sm={12}
                md={7}>
                    <div className="rightContainer">
                    <img src={brain} alt=""  ref={brainRef} className="brain"/>
                     <img src={frontlayer} alt=""  ref={layerRef } className="frontlayer"/>
                     <img src={intro} alt=""   className="intro"/>
                    </div>
                     
                </Grid>
                
                
            </Grid>
        </div>
    )
}
export default Feature