import { Link } from "react-router-dom";

// Import MaterialUI components
import { makeStyles, Container, AppBar, Typography, Card, CardContent } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles ({
    flexy: {
        display: 'flex',
    },
    cardContainer: {
        width: '45vw',
        height: '45vh',
        display: 'inline-block',
    }
});

export default function Dashboard () {
    const classes = useStyles();
    return (
        <Container>
            <AppBar>
                <Typography variant='h3' align='center'>Dashboard</Typography>
            </AppBar>
            <br />            
            <br />
            <br />
            <Link to='/'>Home</Link>
            <div className='classes.flexy'>
                <Card className={classes.cardContainer}>
                    <CardContent>
                        <Typography variant='h5' align='center'>Activities</Typography>
                        <img src='https://source.unsplash.com/random' alt='random image' />
                    </CardContent>
                </Card>
                <Card className={classes.cardContainer}>
                    <CardContent>
                        <Typography variant='h5' align='center'>Demographics</Typography>
                        <img src='https://source.unsplash.com/random' alt='random image' />
                    </CardContent>
                </Card>
            </div>
        </Container>
    )
}