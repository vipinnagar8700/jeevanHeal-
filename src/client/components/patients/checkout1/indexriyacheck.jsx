import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IMG01 from '../../../assets/images/patient2.jpg';
import Header from "../../header"
import Footer from "../../footer"

const Checkout = (props) => {
	
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [payment, setPayment] = useState('450');
	const [specialist, setSpecialist] = useState('');
	const [patientId, setPatientId] = useState('');
	const [doctorId, setDoctorId] = useState('');
	const [time, setTime] = useState('10:30');
	const [date, setDate] = useState('01/02-2023');
	
	useEffect(() => {
		if(localStorage.getItem("appointmentData")) {
			const appointmentData = JSON.parse(localStorage.getItem("appointmentData"));
			setDoctorId(appointmentData.id)
			setSpecialist(appointmentData.special)
		}
		if(localStorage.getItem("login2")) {
			const getUser = JSON.parse(localStorage.getItem("login2")).user;
			setFname(getUser.name);
			setLname(getUser.lname);
			setEmail(getUser.email);
			setPhone(getUser.phone);
			setPatientId(getUser.id);
		}else{
			setFname('');
			setLname('');
			setEmail('');
			setPhone('');
		}
	  }, []);
		const Jobbtn = async (e) => {
		  e.preventDefault();
	  
		  const tokenGet = localStorage.getItem("login2");
		  const token = JSON.parse(tokenGet).token;
		  console.log(token)
	  
		  const formData = new FormData();
		  formData.append("name", fname);
		  formData.append("email", email);
		  formData.append("phone", phone);
		  formData.append("card_number", cardNumber);
		  formData.append("payment", payment);
		  formData.append("time", time);
		  formData.append("date", date);
		  formData.append("specialist", specialist);
		  formData.append("patient_id", patientId);
		  formData.append("doctor_id", doctorId);
		  const res = await fetch("https://jeevan.studiomyraa.com/api/appointment_booking", {
			method: "POST",
			body: formData,
			headers: {
				"Accept" : "application/json",
			  Authorization: "Bearer " + token,
			},
		  });
		  const data = await res.json();
		  console.log(data);
		  if (data.status === "Success") {
			window.alert("Form Successfully");
			console.log("Form Successfully");
			 navigate("/doctor/doctor-dashboard");
		  } else {
			window.alert("Invalid Registration");
			console.log("Invalid Registration");
		  }
		};
	  
	
	//   alert(id);

	const handleChange = () => {
		props.history.push("/patient/booking-success");
	}
	const appointmentData = JSON.parse(localStorage.getItem("appointmentData"));
	
	// const userLogged = JSON.parse(localStorage.getItem("login2"));

	return (
		<div>
			<Header {...props} />
			<div className="content">
				<div className="container">
					<div className="row">
						<div className="col-md-7 col-lg-8">
							<div className="card">
								<div className="card-body">
									<form action="/patient/booking-success">
										<div className="info-widget">
											<h4 className="card-title">Personal Information</h4>
											<div className="row">
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label>First Name</label>
														<input className="form-control" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
													</div>
												</div>
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label>Last Name</label>
														<input className="form-control" type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
													</div>
												</div>
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label>Email</label>
														<input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
													</div>
												</div>
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label>Phone</label>
														<input className="form-control" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
													</div>
												</div>
											</div>
											<div className="exist-customer">Existing Customer?
												<Link to="/patient/checkout">Click here to login</Link></div>
										</div>
										<div className="payment-widget">
											<h4 className="card-title">Payment Method</h4>
											<div className="payment-list">
												<label className="payment-radio credit-card-option">
													<input type="radio" name="radio" defaultChecked  />
													<span className="checkmark"></span>
													Credit card
												</label>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group card-label">
															<label htmlFor="card_name">Name on Card</label>
															<input className="form-control" id="card_name" type="text" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group card-label">
															<label htmlFor="card_number">Card Number</label>
															<input className="form-control" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} id="card_number"
																placeholder="1234  5678  9876  5432" type="text" />
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="expiry_month">Expiry Month</label>
															<input className="form-control" id="expiry_month" placeholder="MM" type="text" />
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="expiry_year">Expiry Year</label>
															<input className="form-control" id="expiry_year" placeholder="YY" type="text" />
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="cvv">CVV</label>
															<input className="form-control" id="cvv" type="text" />
														</div>
													</div>
												</div>
											</div>
											<div className="payment-list">
												<label className="payment-radio paypal-option">
													<input type="radio" name="radio" />
													<span className="checkmark"></span>
													Paypal
												</label>
											</div>

											<div className="terms-accept">
												<div className="custom-checkbox">
													<input type="checkbox" id="terms_accept" />
													<label htmlFor="terms_accept">I have read and accept <a href="#0">Terms &amp; Conditions</a></label>
												</div>
											</div>

											<div className="submit-section mt-4">
												<button type="submit"
													className="btn btn-primary submit-btn"
													onClick={Jobbtn}>Confirm and Pay</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-5 col-lg-4 theiaStickySidebar">
							<div className="card booking-card">
								<div className="card-header">
									<h4 className="card-title">Booking Summary</h4>
								</div>
								<div className="card-body">
									<div className="booking-doc-info">
										<Link to="/patient/doctor-profile" className="booking-doc-img">
											<img src={`https://jeevan.studiomyraa.com/public/uploads/images/${appointmentData.img}`} alt="User" />
											
										</Link>
										<div className="booking-info">
											<h4><Link to="/patient/doctor-profile">{appointmentData.fullname}</Link></h4>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">35</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> {appointmentData.city}, {appointmentData.state}</p>
											</div>
										</div>
									</div>
									<div className="booking-summary">
										<div className="booking-item-wrap">
											<ul className="booking-date">
												<li>Date <span>16 Nov 2019</span></li>
												<li>Time <span>10:00 AM</span></li>
											</ul>
											<ul className="booking-fee">
												<li>Consulting Fee <span>$100</span></li>
												<li>Booking Fee <span>$10</span></li>
												<li>Video Call <span>$50</span></li>
											</ul>
											<div className="booking-total">
												<ul className="booking-total-list">
													<li>
														<span>Total</span>
														<span className="total-cost">$160</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer {...props} />
		</div>
	);
}


export default Checkout;