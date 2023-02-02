import Link from "next/link";
import { useAuth } from '@/hooks/auth'

const TopNav = () => {

	const { user } = useAuth({ middleware: 'guest' })

	return (
		<div id="MyElement" className="mb-5">
			{/* <!-- ***** Header Area Start ***** --> */}
			<header style={{ backgroundColor: "#000" }} className="header-area">
				<div className="container-fluid p-0">
					<div className="row">
						<div className="col-12" style={{ padding: "0" }}>
							<div className="menu-area d-flex justify-content-between">
								{/* <!-- Logo Area  --> */}
								<div className="logo-area">
									<Link href="/" className="hidden">Laundry Management System</Link>
									<Link href="/" className="anti-hidden">LMS</Link>
								</div>
								<div className="menu-content-area d-flex align-items-center">
									{/* <!-- Header Social Area --> */}
									<div className="header-social-area d-flex align-items-center">
										{!user ?
											<>
												<Link href="/login" legacyBehavior>
													<a className="display-4">
														Login
													</a>
												</Link>
												<Link href="/register" legacyBehavior>
													<a className="display-4">
														Register
													</a>
												</Link>
											</> :
											<>
												{/* Avatar Dropdown */}
												<Link href="/profile">
													{user?.name}
												</Link>
												<Link href="/logout" legacyBehavior>
													<a className="p-3 dropdown-item">
														<h6>Logout</h6>
													</a>
												</Link>
												{/* Avatar Dropdown End */}
											</>
										}
									</div>
									{/* <!-- Menu Icon --> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default TopNav