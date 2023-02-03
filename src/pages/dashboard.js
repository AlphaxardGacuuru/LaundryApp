import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const Dashboard = () => {

	const { user } = useAuth({ middleware: 'auth' })

	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<center>
					<h2 className="mt-4">You're logged in</h2>

					<h3 className="mt-4">Welcome to Kenya's best Laundry Management System</h3>

					<Link href="/" className="btn btn-primary btn-lg rounded-0 px-3 mt-5">View available Laundresses</Link>
					<br />

					<Link href="/profile" className="btn btn-primary btn-lg rounded-0 px-3 mt-5">View your profile</Link>
				</center>
			</div>
			<div className="col-sm-1"></div>
		</div>
	)
}

export default Dashboard
