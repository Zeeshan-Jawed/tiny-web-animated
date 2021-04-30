import { Grid, Typography } from '@material-ui/core';
import './Review.style.css'
import persona from '../../assets/persona.svg'
import persona1 from '../../assets/persona1.svg'
const Review=()=>{
    return(
        <div className="reviewcontainer">
            <div className="title" >
                <Typography variant="h5" style={{ color: '#ffffff'}}>
                    Reviews
                </Typography>
                </div>
            <div className="review">
                <div  className="reviewbox">
                   <img src={persona1} alt=""/>
                    <div className="detail">
                    <Typography variant="subtitle1" color="textPrimary"> Rosawin Siri </Typography>
                    <Typography variant="subtitle2" color="textSecondary">Digital Marketing Manager – 4mation Technologies</Typography>
                    <Typography variant="subtitle1" color="textPrimary">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, explicabo."
                            </Typography>
                    
                   </div>
                </div>
                <div  className="reviewbox">
                   <img src={persona} alt=""/>
                    <div className="detail">
                    <Typography variant="subtitle1" color="textPrimary"> Rosawin Siri </Typography>
                    <Typography variant="subtitle2" color="textSecondary">Digital Marketing Manager – 4mation Technologies</Typography>
                    <Typography variant="subtitle1" color="textPrimary">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, explicabo."
                            </Typography>
                    
                   </div>
                </div>
            </div>
            
        </div>
    )
}
export default Review;