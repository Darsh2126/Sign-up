const Validations = (values) => {

    const errors = {};

    if (!values.firstName) {
        errors.firstName = "First Name is required";
    }

    if (!values.lastName) {
        errors.lastName = "Last Name is required";
    }

    if (!values.username) {
        errors.username = "User Name is required";
    } else if (!/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/.test(values.userName)) {
        errors.username = "You have to add atleast one uppercase one lowercase letter and one number";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "You have not entered a valid email address";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(values.password)) {
        errors.password = "Password must be at least 7 characters long with special characters and numbers";
    }

    return errors;
}

export default Validations