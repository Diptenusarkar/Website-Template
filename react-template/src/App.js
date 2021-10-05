import { Link } from 'react-router-dom';

export default function App() {
	return (
		<div>
			<header>
				<Link to='/dashboard'>Dashboard</Link>
			</header>
			<h1>Hello, World!</h1>
		</div>
	);
}
