import React, { useEffect, useState } from 'react';
import DoctorSidebar from '../sidebar/index';
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import IMG01 from '../../../assets/images/doctor-thumb-02.jpg';
import IMG02 from '../../../assets/images/feature-01.jpg';
import IMG03 from '../../../assets/images/feature-02.jpg';
import ReactTagsInput from './tags.jsx';
import Education from './education';
import Experience from './experience';
import Award from './award';
import Memberships from './membership';
import { DropzoneArea } from 'material-ui-dropzone'
import Registration from './registration';
import Select2 from 'react-select2-wrapper';
import Header from '../../patients/dashboard/header'
import Footer from '../../footer'
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { getcookie } from '../../../../Helper/Cookie';
import { getlocalstroeage } from '../../../../Helper/localstorage';
import { Updatedocter, fetchdoctor } from '../../../../API/fetch_doctor';

const ProfileSetting = (props) => {

	const {userId, id} = useParams();
	// const navigate = useNavigate();
	


	let[docterdetail,setdoterdetail]=useState(false)
	

	const [fullname, setFullname] = useState(docterdetail.fullname);
	const [id_no, setId_no] = useState("");
	const [gender, setGender] = useState("");
	const [dob, setDob] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [about, setAbout] = useState("");
	const [reg_no, setReg_no] = useState("");
	const [holder_name, setHolder_name] = useState("");
	const [exp_month, setExp_month] = useState("");
	const [exp_year, setExp_year] = useState("");
	const [cvv, setCvv] = useState("");
	const [card_number, setCard_number] = useState("");
	const [digree, setDigree] = useState("");
	const [prize, setPrize] = useState("");
	const [special, setSpecial] = useState("");
	const[url,seturl]=('')

	useEffect(() => {
		fetchdoctor().then((data)=>{
         setdoterdetail(data.results
			)
		})
	}, [])
	const handlesubmit=(e)=>{
		e.preventDefault()
		setdoterdetail({...docterdetail,id:docterdetail.id})
		Updatedocter(docterdetail).then((data)=>{
			alert(data.message)
		})
	}

	if(!docterdetail){
		return <h1>Loading.....</h1>                                                                                                                                                
	}

	console.log(docterdetail,"dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
	



		
	const handledob=(e)=>{
		const{name,value}=e.target
        setdoterdetail({...docterdetail,[name]:e.target.value})
		
		
	}

	const handlefile=(e)=>{
		alert(name)
		const{name}=e.target
		

		setdoterdetail({...docterdetail,[name]:e.target.files[0]})
		
	}

	console.log(docterdetail.img,docterdetail.reg_img,"efnewjfhu\we");

	
	


 




	

	return (
		<div>
			<Header {...props} />
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Profile Settings</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<StickyBox offsetTop={20} offsetBottom={20}>
								<DoctorSidebar />
							</StickyBox>
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9">


							<div className="card">
								<div className="card-body">
									<h4 className="card-title">Basic Information</h4>
									<div className="row form-row">
										<div className="col-md-12">
											<div className="form-group">

										
											<div className="change-avatar">
													<div className="profile-img">
															</div>
													<div className="upload-img">
														<div className="change-photo-btn">
															<span><i className="fa fa-upload"></i> Upload Photo</span>
															<input type="file" className="upload" name='img' onClick={handlefile}/>
														</div>
														<small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
													</div>
												</div> 
											</div>
										</div>
										{/* <div className="col-md-6">
											<div className="form-group">
												<label>Uername<span className="text-danger">*</span></label>
												<input type="text" className="form-control" readOnly />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label>Email <span className="text-danger">*</span></label>
												<input type="email" className="form-control" readOnly />
											</div>
										</div> */}
										<div className="col-md-6">
											<div className="form-group">
												<label>Fullname<span className="text-danger">*</span></label>
												<input type="text" className="form-control"
                                                         name="fullname"
													value={docterdetail.fullname}
													onChange={handledob}

												/>
											</div>
										</div>
										 <div className="col-md-6">
											 <div className="form-group">
												<label>id_no<span className="text-danger">*</span></label>

												{/* doctor id */}

												{/* <input type="hidden" className="form-control"
                                                     name="id"
                                                     value={docterdetail.id}
													 onChange={handledob}
													 */}
												
												 

												<input type="text" className="form-control"
                                                     name="id_no"
                                                     value={docterdetail.id_no}
													 onChange={handledob}
													
												
												 />
												
											</div>
										</div> 
										
										<div className="col-md-6">
											<div className="form-group">
												<label>Gender</label>

												<input type="text" className="form-control"
                                                      name="gender"
													value={docterdetail.gender}
													onChange={handledob}
												/>


												{/* <select className="select form-control">
													<option>Select</option>
													<option>Male</option>
													<option>Female</option>
												</select> */}
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group mb-0">
												<label>Dob</label>
												<input type="text" className="form-control"
                                                   name="dob"
													value={docterdetail.dob}
													onChange={handledob}

												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* <div className="card">
								<div className="card-body">
									<h4 className="card-title">About</h4>
									<div className="form-group mb-0">
										<label>Biography</label>
										<textarea className="form-control" rows="5"></textarea>
									</div>
								</div>
							</div> */}

							{/* <div className="card">
								<div className="card-body">
									<h4 className="card-title">Clinic Info</h4>
									<div className="row form-row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Clinic Name</label>
												<input type="text" className="form-control" />
											</div>
										</div> 
										<div className="col-md-6">
											<div className="form-group">
												<label>Clinic Address</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<label>Clinic Images</label>
												<div>
													<DropzoneArea
														onChange={handleChange}
													/>
												</div>
											</div>
											<div className="upload-wrap">
												<div className="upload-images">
													<img src={IMG02} alt="Upload Image" />
													<a href="#" className="btn btn-icon btn-danger btn-sm"><i className="far fa-trash-alt"></i></a>
												</div>
												<div className="upload-images">
													<img src={IMG03} alt="Upload Image" />
													<a href="#" className="btn btn-icon btn-danger btn-sm"><i className="far fa-trash-alt"></i></a>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div> */}

							<div className="card contact-card">
								<div className="card-body">
									<h4 className="card-title">Contact Details</h4>
									<div className="row form-row">
										<div className="col-md-6">
											<div className="form-group">
												<label>Address</label>
												<input type="text" className="form-control"
												name='address'
													value={docterdetail.address}
													onChange={handledob}

												/>
											</div>
										</div>

									

										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">City</label>
												<input type="text" className="form-control"
                                                      name='city'
													value={docterdetail.city}
													onChange={handledob}

												/>
											</div>
										</div>

										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">State</label>
												<input type="text" className="form-control"
												 name='state'
												 value={docterdetail.state}
                                                 onChange={handledob}
												
												 />
											</div>
										</div>
										 <div className="col-md-6">
											<div className="form-group">
												<label className="control-label">About</label>
												<input type="text" className="form-control" 
												name='about'
													value={docterdetail.about}
													onChange={handledob}
												/>
												
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">Reg_no</label>
												<input type="text" className="form-control"
												name='reg_no'
												value={docterdetail.reg_no}
                                                onChange={handledob}
												 />
												
											</div>
										</div> 

										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">Holder_name</label>
												<input type="text" className="form-control"
												name='holder_name'
												value={docterdetail.holder_name}
												onChange={handledob}
												 />
												
											</div>
										</div> 

										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">Exp_month</label>
												<input type="text" className="form-control"
												name='exp_month'
												value={docterdetail.exp_month}
												onChange={handledob}
												 />
												
											</div>
										</div> 



										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">Exp_year</label>
												<input type="text" className="form-control"
												name='exp_year'
												value={docterdetail.exp_year}
												onChange={handledob}
												 />
												
											</div>
										</div> 


										
										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">Cvv</label>
												<input type="text" className="form-control"
												name='cvv'
												value={docterdetail.cvv}
												onChange={handledob}
												 />
												
											</div>
										</div> 


										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">Card_number</label>
												<input type="text" className="form-control"
												name='card_number'
												value={docterdetail.card_number}
												onChange={handledob}
												 />
												
											</div>
										</div> 


										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">Digree</label>
												<input type="text" className="form-control"
												name='digree'
												value={docterdetail.digree}
												onChange={handledob}
												 />
												
											</div>
										</div> 



										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">prize</label>
												<input type="text" className="form-control"
												name='prize'
												value={docterdetail.prize}
                                                onChange={handledob}
												 />
												
											</div>
										</div>



										<div className="col-md-6">
											<div className="form-group">
												<label className="control-label">special</label>
												<input type="text" className="form-control"
												name='special'
												value={docterdetail.special}
                                                onChange={handledob}
												 />
												
											</div>
										</div> 



										 <div className="col-lg-12">
                      <div className="form-group">
                        <div className="upload-pic">
                          <div className="upload-pics">
                          
                            <input type="file" id="imgInp"   name='reg_img' onClick={handlefile} />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="photo-norms">
                          <h5>
                            Logo Should be minimum 152 * 152 Supported File
                            format JPG,PNG,SVG
                          </h5>
                        </div>
                      </div>
                    </div> 



					<div className="col-lg-12">
                      <div className="form-group">
                        <div className="upload-pic" >
                          <div className="upload-pics">
        
                            <input type="file" id="imgInp"  name='id_img' onClick={handlefile}  />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="photo-norms">
                          <h5>
                            Logo Should be minimum 152 * 152 Supported File
                            format JPG,PNG,SVG
                          </h5>
                        </div>
                      </div>
                    </div> 







									</div>
								</div>
							</div>

							{/* <div className="card">
								<div className="card-body">
									<h4 className="card-title">Pricing</h4>

									<div className="form-group mb-0">
										<div id="pricing_select">
											<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="price_free" name="rating_option" className="custom-control-input" defaultValue="price_free" defaultChecked />
												<label className="custom-control-label" htmlFor="price_free">Free</label>
											</div>
											<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="price_custom" name="rating_option" defaultValue="custom_price" className="custom-control-input" />
												<label className="custom-control-label" htmlFor="price_custom">Custom Price (per hour)</label>
											</div>
										</div>

									</div>

									<div className="row custom_price_cont" id="custom_price_cont" style={{ display: 'none' }}>
										<div className="col-md-4">
											<input type="text" className="form-control" id="custom_rating_input"
												name="custom_rating_count" defaultValue="" placeholder="20" />
											<small className="form-text text-muted">Custom price you can add</small>
										</div>
									</div>

								</div>
							</div> */}

							{/* <div className="card services-card">
								<div className="card-body">
									<h4 className="card-title">Services and Specialization</h4>
									<div className="form-group">
										<label>Services</label>
										<ReactTagsInput key='tag1' />
									</div>
									<div className="form-group mb-0">
										<label>Specialization </label>
										<ReactTagsInput key='tag2' />
										<small className="form-text text-muted">Note : Type & Press  enter to add new specialization</small>
									</div>
								</div>
							</div> */}

							{/* <Education /> */}
							{/* <Experience /> */}
							{/* <Award /> */}
							{/* <Memberships />	 */}
							{/* <Registration />	 */}


							<div className="submit-section submit-btn-bottom">
								<button  type="submit" className="btn btn-primary submit-btn"  onClick={handlesubmit} >Save Changes</button>
							</div>

						</div>
					</div>

				</div>

			</div>
			<Footer {...props} />
		</div>

	);

}


export default ProfileSetting;