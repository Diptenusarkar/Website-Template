import { Link } from "react-router-dom";

// Import MaterialUI components
import { Container, Typography, Button } from "@material-ui/core";

export default function Dashboard () {
    return (
        <Container>
            <Button>
                <Link to='/'>Home</Link>
            </Button>
            <Typography variant='h3'>Dashboard</Typography>
        </Container>
    )
}