import React, { useState, useEffect } from 'react';
import SidebarNav from '../sidebar';
import { Product1 } from "./image"
import FeatherIcon from 'feather-icons-react';
const AddPurchase = (props) => {

  const [category, setCategory] = useState([])
  const getData = () => {
    fetch('https://jeevan.studiomyraa.com/api/medicene_category')
      .then((res) => res.json())
      .then((json) => setCategory(json.data))
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    getData()
  }, [])

  const [category_id, setCategory_id] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [exp_date, setExp_date] = useState("");
   const [selectedImg, setSelectedImg] = useState();

  const Jobbtn = async (e) => {
    e.preventDefault();
    const tokenGet = localStorage.getItem("login2");
    const token = JSON.parse(tokenGet).token;
    console.log(token)

    const formData = new FormData();
    formData.append("img", selectedImg);
    formData.append("category_id", category_id);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("exp_date", exp_date);

    const res = await fetch("https://jeevan.studiomyraa.com/api/add_purchase", {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    const data = await res.json();
    if (data.status === 'success') {
      window.alert(data.message);
      navigate("/");
    } else {
      window.alert("Invalid Registration");
    }
  }

  return (
    <>
      <SidebarNav />
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Add Product */}
            <div className="row">
              <div className="col-md-8">
                <h5 className="mb-3">Add Product</h5>
                <form method="post" className="supplier-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className="focus-label">
                          Product Name <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-focus">
                        <select className="form-control floating categorySelect" style={{paddingTop: "0px", appearance: "auto"}} onChange={(e) => setCategory_id(e.target.value)} >
                          <option value="Category">Category</option>
                          {category && category.length > 0 && category.map((userObj, index) => (
                            <option key={userObj.id} value={userObj.id}>{userObj.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <label className="focus-label">
                          Price <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <label className="focus-label">
                          Quantity <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" value={exp_date} onChange={(e) => setExp_date(e.target.value)} />
                        <label className="focus-label">
                        Expire Date <span className="text-danger">*</span>
                        </label>
                      </div>
                    </div>
                   
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="change-photo-btn  bg-grey">
                          <div>
                            <FeatherIcon icon="upload" />
                            <p>Upload File</p>
                            {/* {img} */}
                          </div>
                          {/* <input type="file" className="upload" /> */}
                          <input
                            type="file"
                            name="img"
                            className="upload"
                            onChange={(e) => setSelectedImg(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button type="submit" onClick={Jobbtn} className="btn btn-primary save-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Add Product */}
        </div>
        {/* /Page Wrapper */}
      </>

    </>
  )
}


export default AddPurchase; 