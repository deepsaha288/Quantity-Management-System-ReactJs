import React from 'react'
import '../units/Unit.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import image1 from '../images/assets/image1.svg'
import image2 from '../images/assets/image2.svg'
import image3 from '../images/assets/image3.svg'

const Unit = (props) => {
     
    const handelUnit =(value)=>{
        console.log(value,props)
        props.handleConverter(value)
    }
   
    return (
        <div className="choose-content">
            <div className="choose-type">
             <p className="pragraph">CHOOSE TYPE</p>
            </div>
            <Grid container className="grid-container" spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing>
                        <Grid item className="box1" onClick ={()=>handelUnit('length')}>
                            <Paper className="paper1" >
                                <img className="paperContainer1" src={image1} />
                                Length
                         </Paper>
                        </Grid>
                        <Grid item className="box2" onClick ={()=>handelUnit('temperature')}>
                            <Paper className="paper2">
                                <img className="paperContainer2" src={image2} />
                                Temperature
                        </Paper>
                        </Grid>
                        <Grid item className="box3"onClick ={()=>handelUnit('volume')}>
                            <Paper className="paper3">
                                <img className='paperContainer3' src={image3} />
                                Volume
                           </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}
export default Unit; 