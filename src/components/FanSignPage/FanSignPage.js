import './FanSignPage.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Validations from '../Validations/Validations';
import axios from 'axios';

const FanSignPage = () => {

  const initialState = {

    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  }

  const [values, setValues] = useState(initialState);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (values.firstName !== '' || values.lastName !== '' || values.username !== '' || values.email !== '' || values.password !== '') {

      axios.post('http://wren.in:3200/api/sign-up/fan', {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password
      }).then(response => {
        console.log(`Posting data ${response.data}`);

        setValues(initialState);

        setErrors({});

        alert(`Data sent successfully`);

      })
        .catch(error => console.log(`Error: ${error}`));
    }
    else {
      setErrors(Validations(values));
    }
  }

  return (
    <div className="main bg-black">
      <div className="Auth-form-container">
        <div className="nav-links">
          <Link to="/fanpage" className="fanpage" >FAN SIGNUP</Link>
          <Link to="/talentpage" className="talentpage">TALENT SIGNUP</Link>
        </div>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h2 className="Auth-form-title">Create Your Fan Account</h2>
            <div className="form-group mt-3">
              <label htmlFor='firstName'>First Name*</label>
              <input
                type="text"
                id='firstName'
                className="form-control mt-1"
                placeholder="First Name"
                name='firstName'
                onChange={handleChange}
                value={values.firstName}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor='lastName'>Last Name*</label>
              <input
                type="text"
                id='lastName'
                className="form-control mt-1"
                placeholder="Last Name"
                name='lastName'
                onChange={handleChange}
                value={values.lastName}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor='username'>Username*</label>
              <input
                type="text"
                id='username'
                className="form-control mt-1"
                placeholder="username"
                name='username'
                onChange={handleChange}
                value={values.username}
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor='email'>Email*</label>
              <input
                type="email"
                id='email'
                className="form-control mt-1"
                placeholder="email"
                name='email'
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group mt-3">
              <label htmlFor='password'>Password*</label>
              <input
                type="password"
                id='password'
                className="form-control mt-1"
                placeholder="Enter password"
                name='password'
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
          </div>
        </form>
        <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            I agree to the <span>Terms and Conditions</span>
          </label>
        </div>
        <div className="d-grid gap-2 mt-2">
          <button type="submit" className="btn-class" onClick={handleFormSubmit}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default FanSignPage;