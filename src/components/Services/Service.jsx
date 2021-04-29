import './Service.style.css'
import UX from '../../assets/ux.svg'
import Copy from '../../assets/copyw.svg'
import Content from '../../assets/content.svg'
import useWebAnimations, { tada, swing, heartBeat } from "@wellyshen/use-web-animations";

import { Grid, Typography } from '@material-ui/core';
const Service = () => {
    const { ref: service1Ref } = useWebAnimations({
        ...tada,
        autoPlay: false,
        onReady: ({ animation }) => setInterval(() => animation.play(), 3000),
    });
    const { ref: service2Ref } = useWebAnimations({
        ...swing,
        autoPlay: false,
        onReady: ({ animation }) => setInterval(() => animation.play(), 3000),
    });
    const { ref: service3Ref } = useWebAnimations({
        ...heartBeat,
        autoPlay: false,
        onReady: ({ animation }) => setInterval(() => animation.play(), 3000),
    });
    return (
        <div className="container">
            <Grid container spacing={7}>
                <Grid item 
                sm={12}
                md={6}>
                    <img src={UX} alt="" ref={service1Ref}  className="Service"/>

                </Grid>
                <Grid item 
                sm={12}
                md={6}>
                    <div className="service1Ref" >
                        <Typography variant="h2" style={{ color: "#ffffff", fontWeight: "400" }} gutterBottom>UX Writing</Typography>
                        <Typography variant="subtitle1" style={{ color: '#ffffff' }}>I develop clear and useful text in product interfaces to help users reach a specific goal,
                        whether that's completing a form or tapping a button.
                        This includes every type of content from on-screen help systems,
                      user onboarding and in-app messages to push notifications and tooltips.</Typography>
                        <ul>
                            <li>Microcopy</li>
                            <li>Taxonomy & Labeling</li>
                            <li>Chatbots</li>
                            <li>User Research</li>
                            <li>Content Style Guide</li>
                            <li>Prototype</li>
                           
                        </ul>
                    </div>
                </Grid>
                <Grid item md={6} 
                sm={12} >
                    <div className="service2Ref" >
                        <Typography variant="h2" style={{ color: "#ffffff", fontWeight: "400" }} gutterBottom>Website Copywriting</Typography>
                        <Typography variant="subtitle1" style={{ color: '#ffffff' }}>Your website is a dialogue
                         with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me 
                        to craft the perfect user journey online. Let me draw the map that guides users every step of
                         the way from discovery, to consideration, to conversion.</Typography>
                        <ul>
                            <li>Information Architecture</li>
                            <li>Wireframes</li>
                            <li>Competitor Analysis</li>
                            <li>Sales Letter</li>
                            <li>Landing Page</li>
                            <li>Off-page SEO</li>
                           
                        </ul>
                    </div>
                </Grid>
                <Grid item md={6} sm={12}>
                    <img src={Copy} alt="" ref={service2Ref} className="Service" />

                </Grid>
                <Grid item md={6} sm={12}>
                    <img src={Content} alt="" ref={service3Ref} className="Service"/>

                </Grid>
                <Grid item md={6} sm={12}>
                    <div className="service1Ref" >
                        <Typography variant="h2" style={{ color: "#ffffff", fontWeight: "400" }} gutterBottom>Content Writing</Typography>
                        <Typography variant="subtitle1" style={{ color: '#ffffff' }}>Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</Typography>
                        <ul>
                            <li>Headlines & Taglines</li>
                            <li>Case Studies</li>
                            <li>Content Strategy</li>
                            
                           
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Service