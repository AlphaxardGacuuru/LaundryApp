import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'

export default function Home(props) {

	const { user } = useAuth({ middleware: 'guest' })

	const [users, setUsers] = useState(props.users)
	const [search, setSearch] = useState("")

	var userResults = users
		.filter((item) => item.type == "laundress" &&
			item.name != user?.name &&
			item.name.match(search)
		)

	useEffect(() => {
		// Get Users
		axios.get('api/users')
			.then((res) => setUsers(res.data))
	}, [])


	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10 mt-3">
				{/* <-- Search Form --> */}
				<div className="contact-form">
					<input
						name="search"
						className="form-control"
						placeholder="Search Laundresses"
						onChange={(e) => {
							var regex = new RegExp(e.target.value, 'gi');
							setSearch(regex)
						}} />
				</div>
				{/* Search Form End */}

				<table className="table mt-3">
					<thead>
						<tr>
							<th>Name</th>
							<th>Location</th>
						</tr>
					</thead>
					<tbody>
						{userResults
							.map((user, key) => (
								<tr key={key}>
									<td>{user.name}</td>
									<td>{user.location}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			<div className="col-sm-1"></div>
		</div>
	)
}

// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	var users

	// Fetch Karaokes
	await axios.get(`/api/users`)
		.then((res) => users = res.data)

	// Pass data to the page via props
	return { props: { users } }
}
