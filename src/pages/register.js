import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
	const { register } = useAuth({
		middleware: 'guest',
		redirectIfAuthenticated: '/dashboard',
	})

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')
	const [errors, setErrors] = useState([])

	const submitForm = event => {
		event.preventDefault()

		register({
			name,
			email,
			phone,
			password,
			password_confirmation: passwordConfirmation,
			setErrors,
		})
	}

	return (
		<div className="row">
			<div className="col-sm-4"></div>
			<div className="col-sm-4">
				<center className="mt-3">
					<Link href="/">
						<ApplicationLogo className="w-25 h-25 fill-current text-gray-500" />
					</Link>
				</center>
				<div className="contact-form">
					<form className="mb-5" onSubmit={submitForm}>
						{/* Name */}
						<div>
							<Label htmlFor="name">Name</Label>

							<Input
								id="name"
								type="text"
								value={name}
								className="form-control"
								onChange={event => setName(event.target.value)}
								required
								autoFocus
							/>

							<InputError messages={errors.name} className="mt-2 text-danger" />
						</div>

						{/* Email Address */}
						<div className="mt-4">
							<Label htmlFor="email">Email</Label>

							<Input
								id="email"
								type="email"
								value={email}
								className="form-control"
								onChange={event => setEmail(event.target.value)}
								required
							/>

							<InputError messages={errors.email} className="mt-2 text-danger" />
						</div>

						{/* Phone */}
						<div className="mt-4">
							<Label htmlFor="phone">Phone</Label>

							<Input
								id="phone"
								type="phone"
								value={phone}
								className="form-control"
								onChange={event => setPhone(event.target.value)}
								required
							/>

							<InputError messages={errors.phone} className="mt-2 text-danger" />
						</div>

						{/* Password */}
						<div className="mt-4">
							<Label htmlFor="password">Password</Label>

							<Input
								id="password"
								type="password"
								value={password}
								className="form-control"
								onChange={event => setPassword(event.target.value)}
								required
								autoComplete="new-password"
							/>

							<InputError
								messages={errors.password}
								className="mt-2 text-danger"
							/>
						</div>

						{/* Confirm Password */}
						<div className="mt-4">
							<Label htmlFor="passwordConfirmation">
								Confirm Password
							</Label>

							<Input
								id="passwordConfirmation"
								type="password"
								value={passwordConfirmation}
								className="form-control"
								onChange={event =>
									setPasswordConfirmation(event.target.value)
								}
								required
							/>

							<InputError
								messages={errors.password_confirmation}
								className="mt-2 text-danger"
							/>
						</div>

						<div className="d-flex justify-content-between mt-4">
							<Link
								href="/login"
								className="underline text-sm text-gray-600 hover:text-gray-900">
								Already registered?
							</Link>

							<button className="btn btn-primary rounded-0 ml-4">Register</button>
						</div>
					</form>
				</div>
			</div>
			<div className="col-sm-4"></div>
		</div>
	)
}

export default Register
