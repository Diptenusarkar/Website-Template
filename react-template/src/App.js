import { Link } from 'react-router-dom';

// Import Material UI components
import { Container, Typography, Button } from '@material-ui/core';

export default function App() {
	return (
		<Container>
			<Button>
				<Link to='/dashboard'>Dashboard</Link>
			</Button>
			<Typography variant='h3'>Hello, World!</Typography>
		</Container>
	);
}
