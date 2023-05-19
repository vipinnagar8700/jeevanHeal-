import React, { Component, useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Link, useHistory, useParams } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { edit_supplierData } from "../../../PharmacyApi's/Pharmacy";


const EditSupplier = (props) => {
  let history = useHistory();
  let { p_id } = useParams();
  console.log(p_id);

  const [editProductData, setEditProductData] = useState(false);
  console.log(editProductData, "Ya uppar vala edit product ha ");
  const { id,name, email,company,address, img } = editProductData;
  console.log(id,name, email,company,address, img,"DAta Got it");

  useEffect(() => {

    let data = edit_supplierData(p_id);
    if (data) {
      data.then((data) => {
        setEditProductData(data);
        console.log(data);
      })
    }
  }, []);
  // if (!editProductData) {
  //   return <h1>...........Loading</h1>
  // }
  return (
    <>
      <SidebarNav />
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Edit Supplier */}
            <div className="row">
              <div className="col-md-8">
                <h5 className="mb-3">Edit Supplier</h5>
                <form method="post" className="supplier-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" hidden className="form-control floating" />
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">
                          Name <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">
                          Email <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">
                          Phone <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">
                          Company <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group form-focus">
                        <textarea
                          className="form-control bg-grey floating"

                        />
                        <label className="focus-label">
                          Address <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-photo-btn  bg-grey">
                          <div>
                            <i><FeatherIcon icon="upload" /></i>
                            <p>Upload File</p>
                          </div>
                          <input type="file" className="upload" />
                        </div>
                      </div>
                      {/* <img style={{height:100,width:100,borderRadius:12}} src={`https://jeevan.studiomyraa.com/public/uploads/images/${img}`} alt="" /> */}

                    </div>
                    <div className="col-md-4">
                      <button type="submit" className="btn btn-primary save-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Edit Supplier */}
        </div>
        {/* /Page Wrapper */}
      </>

    </>
  )
}


export default EditSupplier; 