import React from 'react'
import '../header/Style.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import image1 from '../images/assets/image1.svg'
import image2 from '../images/assets/image2.svg'
import image3 from '../images/assets/image3.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    Grid:{
        display:'flex'
    },
    paper: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center', 
        height: 140,
        width:  150,
        boxShadow:"0 2px 5px 2px rgb(165 148 156/30%)"
    },
    control: {
        padding: theme.spacing(2),
    },
    paperContainer:{
        backgroundRepeat:'no-repeat'
    }
}));


const Body = () => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    return (
        <div className="choose-content">
            <div className="choose-type">
                <p className="pragraph">CHOOSE TYPE</p>
            </div>
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        <Grid item>
                            <Paper className={classes.paper} >
                                <img className={classes.paperContainer} src={image1}/>
                                Length
                  </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                            <img className={classes.paperContainer} src={image2}/>
                                Temperature
                  </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                            <img className={classes.paperContainer} src={image3}/>
                                Volume
                  </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default Body;