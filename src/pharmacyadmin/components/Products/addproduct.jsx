import React, { useState, useEffect, useRef } from 'react';
import SidebarNav from '../sidebar';
import { Product1 } from "./image"
import { useFormik } from "formik";
import * as yup from 'yup'
import FeatherIcon from 'feather-icons-react';
const AddProduct = (props) => {

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
  const [product_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImg, setSelectedImg] = useState();

  const Jobbtn = async (e) => {
    e.preventDefault();
    // let jobData = { category_id, product_name, price, quantity, discount, description, img };
    const formData = new FormData();
    formData.append("img", selectedImg);
    formData.append("category_id", category_id);
    formData.append("product_name", product_name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("discount", discount);
    formData.append("description", description);
    const res = await fetch("https://jeevan.studiomyraa.com/api/add_product", {
      method: 'POST',
      body: formData
    })
    const data = await res.json();
    if (data.status === 'success') {
      window.alert(data.message);
      navigate("/");
    } else {
      window.alert("Invalid Registration");
    }
  }


  const fileRef = useRef(null)

  // Imp
  const schema = yup.object().shape({
    productName: yup.string().required(),
    category: yup.string().required(),
    price: yup.string().required(),
    quality: yup.string().required(),
    discount: yup.string().required(),
    description: yup.string().required(),
  })


  const HandleClick = (values) => {
    console.log("form data", values)

  }

  console.log("form data", values)

  const { handleSubmit, setFieldValue, values, handleChange, errors, handleBlur, touched, isValid, dirty } = useFormik({
    initialValues: {
      productName: "",
      price: "",
      quality: "",
      category:"",
      discount: "",
      description: "",
      image: null,
    },
    onSubmit: HandleClick,
    validationSchema: schema,
    validateOnMount: true
  });


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
                <form className="supplier-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" name="productName"
                          value={values.productName}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          Product Name <span className="text-danger">*</span>
                        </label>
                        {
                          touched.productName && errors.productName && <div className='text-danger'>{errors.productName}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-focus">
                        <select className="form-control floating categorySelect" style={{ paddingTop: "0px", appearance: "auto" }} onChange={(e) => setCategory_id(e.target.value)} >
                          <option value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur} >Category</option>
                          {category && category.length > 0 && category.map((userObj, index) => (
                            <option key={userObj.id} value={userObj.id}>{userObj.name}</option>
                          ))}
                        </select>
                        {
                          touched.category && errors.category && <div className='text-danger'>{errors.category}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" name="price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          Price <span className="text-danger">*</span>
                        </label>
                        {
                          touched.price && errors.price && <div className='text-danger'>{errors.price}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text"
                          className="form-control floating"
                          name="quality"
                          value={values.quality}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label className="focus-label">
                          Quantity <span className="text-danger">*</span>
                        </label>
                        {
                          touched.quality && errors.quality && <div className='text-danger'>{errors.quality}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" name="discount"
                          value={values.discount}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        <label className="focus-label">
                          Discount <span className="text-danger">*</span>
                        </label>
                        {
                          touched.discount && errors.discount && <div className='text-danger'>{errors.discount}</div>
                        }
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group form-focus">
                        <textarea
                          className="form-control bg-grey floating"
                          defaultValue={""}
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          onBlur={handleBlur}

                        />
                        <label className="focus-label">
                          Descriptions <span className="text-danger">*</span>
                        </label>
                        {
                          touched.description && errors.description && <div className='text-danger'>{errors.description}</div>
                        }
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

                          <input name='image'  type="file"  ref={fileRef}/>

                        </div>
                      </div>
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
          {/* /Add Product */}
        </div>
        {/* /Page Wrapper */}
      </>

    </>
  )
}


export default AddProduct; 