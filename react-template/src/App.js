import { Link } from 'react-router-dom';

// Import Material UI components
import { Container, AppBar, Typography } from '@material-ui/core';

export default function App() {
	return (
		<Container>
			<AppBar position='static'>
				<Typography variant='h3' align='center'>Title</Typography>
			</AppBar>
			<Link to='/dashboard'>Dashboard</Link>
			<Typography variant='h3'>Hello, World!</Typography>
			<Container>
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aliquam exercitationem nihil neque atque incidunt sint ut dicta ea iure. Ipsam tempore qui consequuntur, fugit facere laborum reprehenderit molestiae suscipit ipsa autem placeat. Eligendi similique blanditiis neque temporibus iste numquam consequatur minus commodi animi, repellat, quidem tempora reiciendis magnam fugiat eaque dolorum id nobis officiis non perspiciatis libero, quod accusantium vero. Consectetur repellat dolore sequi hic vel deserunt quo culpa adipisci, sapiente, fuga nulla quibusdam cumque ipsum velit harum officia veritatis corporis sint esse ut, quisquam similique sed. In nesciunt deserunt itaque optio est eos officia explicabo atque unde labore!
				</Typography>
			</Container>
		</Container>
	);
}
