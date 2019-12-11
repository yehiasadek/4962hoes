import React from 'react';
import './App.css';

class AboutUS extends React.Component {

    render () {
        return(

            <div>
                <br></br>
                <br></br>
                <img src={"./davidisUGLY.jpg"} width="240px" height="240px" alt="picture of Dave man" Title="Dave in model state"/>
                
                <center> <strong>About Us</strong></center>
            
                <p>  Here at GamerSweet, we strive for greatness in the social gaming industry. </p>
                <p>
                    <p>We are constantly researching and innovating new technology and thinking of way we
                    can incorperate it into GamerSweet so that our users can have the best experience possible on our platform.</p>

                </p>
                <br></br>
                <h1><center>Our Team</center></h1>
                <h3>David Oppong</h3>  
               
                <h3>Rolando Barredo </h3>
                <h3>Reynaldo Cabral</h3>
                <h3>Yehia Sadek</h3>
                <br></br>
                <br></br>
                <h1><strong>Our Mission Statement</strong></h1>
                <h3>(enter mission statement)</h3>

            </div>
            
        );
    }
}

export default AboutUS;

