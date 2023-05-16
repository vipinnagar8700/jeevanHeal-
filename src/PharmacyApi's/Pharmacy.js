import Cookies from "js-cookie";
export const phar = (values) => {
    const { name, email, password } = values;

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    return fetch("https://jeevan.studiomyraa.com/api/register", requestOptions)

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