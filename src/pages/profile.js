import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

const profile = () => {

	const router = useRouter()

	const { user } = useAuth({ middleware: 'auth', redirectIfAuthenticated: '/dashboard', })

	const [message, setMessage] = useState("")
	const [error, setError] = useState("")
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [type, setType] = useState("")

	const [formData, setFormData] = useState()

	useEffect(() => {
		// Declare new FormData object for form data
		setFormData(new FormData())
	}, [])

	// Update user
	const onSubmit = (e) => {
		e.preventDefault()

		// Add form data to FormData object
		name && formData.append("name", name);
		phone && formData.append("phone", phone);
		type && formData.append("type", type);
		formData.append("_method", 'put');

		// Send data to UsersController
		// Get csrf cookie from Laravel inorder to send a POST request
		axios.get('sanctum/csrf-cookie').then(() => {
			axios.post(`/api/users/${user?.id}`, formData)
				.then((res) => {
					setMessage(res.data)
					setTimeout(() => router.reload(), 1000)
				})
				.catch(err => setError("Failed"))
		})
	}

	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<div className="contact-form mt-5">
					<h1>Hey {user?.name}</h1>

					{message && <h6 className="text-success">{message}</h6>}
					{error && <h6 className="text-danger">{error}</h6>}
					<form onSubmit={onSubmit}>
						<br />
						<br />

						<label htmlFor="">Name</label>

						<input type="name"
							className="form-control"
							placeholder={user?.name}
							onChange={(e) => setName(e.target.value)} />

						<label htmlFor="">Phone</label>

						<input type="phone"
							className="form-control"
							placeholder={user?.phone}
							onChange={(e) => setPhone(e.target.value)} />

						<label htmlFor="">Type</label>

						<select name="type"
							placeholder={user?.type}
							className="form-control"
							onChange={(e) => setType(e.target.value)}>
							<option value="normal">Normal</option>
							<option value="laundress" selected={user?.type == "laundress" && true}>Laundress</option>
						</select>
						<br />
						<br />

						<div className="d-flex justify-content-between">
							<Link href="/" className="btn btn-light rounded-0">Cancel</Link>
							<button className="btn btn-primary rounded-0">Save</button>
						</div>
					</form>
				</div>
			</div>
			<div className="col-sm-1"></div>
		</div>
	)
}

export default profile