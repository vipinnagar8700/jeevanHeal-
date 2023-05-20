import { Category } from "@material-ui/icons";
import Cookies from "js-cookie";
import axios from 'axios';
var rolea = "pharmacy";
// registeration
export const phar = (values) => {
    console.log(rolea, "tfgvhdbsn")
    const { name, email, password, role } = values;
    console.log(values, "role value goty it");
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("role", role);
    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/pharmacy_registration", requestOptions)

        .then((result) => {
            return result.json();
        })
        .catch(error => console.log('error', error));




}
export const add_medicine_category = () => {



    var formdata = new FormData();
    formdata.append("name", "Skin care");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://jeevan.studiomyraa.com/api/add_medicene_category", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export const medicine_category = () => {
    var formdata = new FormData();
    formdata.append("title", "Find Doctors");
    formdata.append("url", "https://jeevan.studiomyraa.com");

    var requestOptions = {
        method: 'GET',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://jeevan.studiomyraa.com/api/medicene_category", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
export const delete_medicine_category = () => {
    var formdata = new FormData();
    formdata.append("title", "Find Doctors");
    formdata.append("url", "https://jeevan.studiomyraa.com");

    var requestOptions = {
        method: 'DELETE',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://jeevan.studiomyraa.com/api/delete_category/5", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


// Update data 
export const edit_action_medicene = (id, name) => {
    console.log(id, name);
    let token = Cookies.get("pharmToken")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("category_id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/edit_action_medicene", requestOptions)

        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const edit_medicine_category = () => {
    var formdata = new FormData();
    formdata.append("title", "Find Doctors");
    formdata.append("url", "https://jeevan.studiomyraa.com");

    var requestOptions = {
        method: 'GET',
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/edit_medicene_category/4", requestOptions)

        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


// Product



// Add Product
export const addProduct = (values) => {

    const { categoryName, productName, price, quantity, discount, description, image } = values;
    console.log(image.name);
    let token = Cookies.get("pharmToken")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    console.log(token);


    var formdata = new FormData();
    formdata.append("category_id", categoryName);
    formdata.append("product_name", productName);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("discount", discount);
    formdata.append("description", description);
    formdata.append("img", image);



    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/add_product", requestOptions)


        .then((result) => {
            console.log(result);
            return result.json();
        })
        .catch(error => console.log('error', error));

};



// edit product
export const LoadJobData = async (p_id) => {
    const res = await axios.get(`https://jeevan.studiomyraa.com/api/edit_product/` + p_id);
    return res.data.results;

};
// Update  data in the Product

export const updateProduct = (product_name, category_id, price, quantity, discount, description, img, p_id) => {
    console.log(product_name, category_id, price, quantity, discount, description, img, p_id, "data dekhna ke lia");
    // Update data 
    let token = Cookies.get("pharmToken")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("category_id", category_id);
    formdata.append("product_name", product_name);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("discount", discount);
    formdata.append("description", description);
    formdata.append("img", img, `/C:/Users/Vipin Nagar/Downloads/${img.name}`);


    formdata.append("product_id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/edit_product_action", requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));

}


// Add Purchase

export const addPurchase = (values) => {
    const { name, categoryName, price, quantity, exp_date, image } = values;
    console.log(image.name);
    let token = Cookies.get("pharmToken")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    console.log(token);


    var formdata = new FormData();
    formdata.append("category_id", categoryName);
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("exp_date", exp_date);
    formdata.append("img", image);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/add_purchase", requestOptions)
        .then((result) => {
            console.log(result);
            return result.json();
        })
        .catch(error => console.log('error', error));

}

// edit purchase
export const edit_PurchaseData = async (p_id) => {
    var myHeaders = new Headers();
    let token = Cookies.get("pharmToken")
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`https://jeevan.studiomyraa.com/api/edit_purchase/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));

};

export const updatePurchase = (name, category_id, price, quantity, exp_date, img, p_id) => {
    console.log(name, category_id, price, quantity, exp_date, img, p_id, "data dekhna ke lia");
    // Update data 
    let token = Cookies.get("pharmToken")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("category_id", category_id);
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("exp_date", exp_date);
    formdata.append("img", img, `"/C:/Users/Vipin Nagar/Pictures/${img.name}`);
    formdata.append("purchase_id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/edit_purchase_action", requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));

}


// Edit supplier


// Add Supplier

export const addSupplier = (values) => {

    const { name, email, phone, company, address, img } = values;
    let token = Cookies.get("pharmToken")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("company", company);
    formdata.append("address", address);
    formdata.append("img", img);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/add_supplier", requestOptions)
        .then((result) => {
            console.log(result);
            return result.json();
        })
        .catch(error => console.log('error', error));
}


export const edit_supplierData = (p_id) => {
    let token = Cookies.get("pharmToken")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`https://jeevan.studiomyraa.com/api/get_single_supplier/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

// Update Supplier

export const updateSupplier = (id, name, email, phone, company, address, img) => {

    console.log(name, email, company, phone, address, img, id, "data dekhna ke lia");
    // Update data 
    let token = Cookies.get("pharmToken")
    console.log(token)
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("company", company);
    formdata.append("address", address);
    formdata.append("img", img, `"/C:/Users/Vipin Nagar/Pictures/${img.name}`);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/update_supplier", requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));

}

export const deleteSupplier = (id) => {
    let token = Cookies.get("pharmToken")
    console.log(token)
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://jeevan.studiomyraa.com/api/delete_supplier/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}