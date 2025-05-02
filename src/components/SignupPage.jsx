import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaBriefcase, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignupStyling.css';

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    occupation: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const occupationOptions = [
    { value: 'full-time', label: 'Full-time Employee', icon: <FaUserTie /> },
    { value: 'part-time', label: 'Part-time Employee', icon: <FaBriefcase /> },
    { value: 'student', label: 'Student', icon: <FaGraduationCap /> },
    { value: 'freelancer', label: 'Freelancer', icon: <FaUser /> }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]+$/;

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = 'Only letters allowed';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = 'Only letters allowed';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // if (!formData.password) {
    //   newErrors.password = 'Password is required';
    // } else if (formData.password.length < 8) {
    //   newErrors.password = 'Password must be at least 8 characters';
    // }

    if (!formData.occupation) {
      newErrors.occupation = 'Please select your occupation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/Login', { state: { signupSuccess: true } });
      } else {
        setErrors({ apiError: data.message || 'Signup failed' });
      }
    } catch (error) {
      setErrors({ apiError: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <span className="money-icon">💰</span>
            <h1>Budget Track</h1>
          </div>
          <h2>Create Your Account</h2>
          <p>Start managing your finances today</p>
        </div>

        {errors.apiError && (
          <div className="error-message">
            {errors.apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="name-fields">
            <div className="form-group">
              <label htmlFor="firstName" className="input-label">
                <FaUser className="input-icon" />
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`form-input ${errors.firstName ? 'input-error' : ''}`}
                placeholder="First Name"
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="input-label">
                <FaUser className="input-icon" />
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`form-input ${errors.lastName ? 'input-error' : ''}`}
                placeholder="Last Name"
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="input-label">
              <FaEnvelope className="input-icon" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="your@email.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="input-label">
              <FaLock className="input-icon" />
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'input-error' : ''}`}
                placeholder="At least 8 characters"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label className="input-label">
              <FaBriefcase className="input-icon" />
              Occupation
            </label>
            <div className="occupation-options">
              {occupationOptions.map((option) => (
                <div 
                  key={option.value}
                  className={`occupation-option ${formData.occupation === option.value ? 'selected' : ''}`}
                  onClick={() => handleChange({
                    target: {
                      name: 'occupation',
                      value: option.value
                    }
                  })}
                >
                  <span className="occupation-icon">{option.icon}</span>
                  {option.label}
                </div>
              ))}
            </div>
            {errors.occupation && <span className="error-text">{errors.occupation}</span>}
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
            {!isLoading && <FaArrowRight className="button-icon" />}
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login" className="auth-link">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;