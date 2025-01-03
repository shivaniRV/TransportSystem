// import { useState } from "react";
// import * as Yup from "yup";
// import clsx from "clsx";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { getUserByToken, login } from "../core/_requests";
// import { toAbsoluteUrl } from "../../../../_metronic/helpers";
// import { useAuth } from "../core/Auth";

// const loginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Wrong email format")
//     .min(3, "Minimum 3 symbols")
//     .max(50, "Maximum 50 symbols")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(3, "Minimum 3 symbols")
//     .max(50, "Maximum 50 symbols")
//     .required("Password is required"),
// });

// const initialValues = {
//   email: "admin@demo.com",
//   password: "demo",
// };

// /*
//   Formik+YUP+Typescript:
//   https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
//   https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
// */
// export function Login() {
//   const [loading, setLoading] = useState(false);
//   const { saveAuth, setCurrentUser } = useAuth();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues,
//     validationSchema: loginSchema,
//     onSubmit: async (values, { setStatus, setSubmitting }) => {
//       setLoading(true);
//       try {
//         const { data: auth } = await login(values.email, values.password);
//         saveAuth(auth);
//         const { data: user } = await getUserByToken(auth.api_token);
//         setCurrentUser(user);

//         // Navigate based on role or specific condition
//         if (user.roles && user.roles.includes("Aqualure")) {
//           navigate("/aqualure"); // Navigate to Aqualure-specific page
//         } else if (user.roles && user.roles.includes("Ground")) {
//           navigate("/Ground/homepage"); // Navigate to Ground-specific page
//         } else {
//           navigate("/home"); // Default to home page
//         }
//       } catch (error) {
//         console.error(error);
//         saveAuth(undefined);
//         setStatus("The login details are incorrect");
//         setSubmitting(false);
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <form
//       className="form w-100"
//       onSubmit={formik.handleSubmit}
//       noValidate
//       id="kt_login_signin_form"
//     >
//       {/* other form contents... */}

//       <div className="text-center mb-11">
//         <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
//         <div className="text-gray-500 fw-semibold fs-6">
//           Your Social Campaigns
//         </div>
//       </div>
//       {/* begin::Heading */}

//       {/* begin::Login options */}
//       <div className="row g-3 mb-9">
//         {/* begin::Col */}
//         <div className="col-md-6">
//           {/* begin::Google link */}
//           <a
//             href="#"
//             className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
//           >
//             <img
//               alt="Logo"
//               src={toAbsoluteUrl("media/svg/brand-logos/google-icon.svg")}
//               className="h-15px me-3"
//             />
//             Sign in with Google
//           </a>
//           {/* end::Google link */}
//         </div>
//         {/* end::Col */}

//         {/* begin::Col */}
//         <div className="col-md-6">
//           {/* begin::Google link */}
//           <a
//             href="#"
//             className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
//           >
//             <img
//               alt="Logo"
//               src={toAbsoluteUrl("media/svg/brand-logos/apple-black.svg")}
//               className="theme-light-show h-15px me-3"
//             />
//             <img
//               alt="Logo"
//               src={toAbsoluteUrl("media/svg/brand-logos/apple-black-dark.svg")}
//               className="theme-dark-show h-15px me-3"
//             />
//             Sign in with Apple
//           </a>
//           {/* end::Google link */}
//         </div>
//         {/* end::Col */}
//       </div>
//       {/* end::Login options */}

//       {/* begin::Separator */}
//       <div className="separator separator-content my-14">
//         <span className="w-125px text-gray-500 fw-semibold fs-7">
//           Or with email
//         </span>
//       </div>
//       {/* end::Separator */}

//       {formik.status ? (
//         <div className="mb-lg-15 alert alert-danger">
//           <div className="alert-text font-weight-bold">{formik.status}</div>
//         </div>
//       ) : (
//         <div className="mb-10 bg-light-info p-8 rounded">
//           <div className="text-info">
//             Use account <strong>admin@demo.com</strong> and password{" "}
//             <strong>demo</strong> to continue.
//           </div>
//         </div>
//       )}

//       {/* begin::Form group */}
//       <div className="fv-row mb-8">
//         <label className="form-label fs-6 fw-bolder text-gray-900">Email</label>
//         <input
//           placeholder="Email"
//           {...formik.getFieldProps("email")}
//           className={clsx(
//             "form-control bg-transparent",
//             { "is-invalid": formik.touched.email && formik.errors.email },
//             {
//               "is-valid": formik.touched.email && !formik.errors.email,
//             }
//           )}
//           type="email"
//           name="email"
//           autoComplete="off"
//         />
//         {formik.touched.email && formik.errors.email && (
//           <div className="fv-plugins-message-container">
//             <span role="alert">{formik.errors.email}</span>
//           </div>
//         )}
//       </div>
//       {/* end::Form group */}

//       {/* begin::Form group */}
//       <div className="fv-row mb-3">
//         <label className="form-label fw-bolder text-gray-900 fs-6 mb-0">
//           Password
//         </label>
//         <input
//           type="password"
//           autoComplete="off"
//           {...formik.getFieldProps("password")}
//           className={clsx(
//             "form-control bg-transparent",
//             {
//               "is-invalid": formik.touched.password && formik.errors.password,
//             },
//             {
//               "is-valid": formik.touched.password && !formik.errors.password,
//             }
//           )}
//         />
//         {formik.touched.password && formik.errors.password && (
//           <div className="fv-plugins-message-container">
//             <div className="fv-help-block">
//               <span role="alert">{formik.errors.password}</span>
//             </div>
//           </div>
//         )}
//       </div>
//       {/* end::Form group */}

//       {/* begin::Wrapper */}
//       <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
//         <div />

//         {/* begin::Link */}
//         <Link to="/auth/forgot-password" className="link-primary">
//           Forgot Password ?
//         </Link>
//         {/* end::Link */}
//       </div>
//       {/* end::Wrapper */}
//       <div className="d-flex justify-content-between mb-10">
//         <button
//           type="submit"
//           id="kt_sign_in_submit"
//           className="btn btn-primary"
//           disabled={formik.isSubmitting || !formik.isValid}
//         >
//           {!loading && <span className="indicator-label">Continue</span>}
//           {loading && (
//             <span className="indicator-progress" style={{ display: "block" }}>
//               Please wait...
//               <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
//             </span>
//           )}
//         </button>

//         <button
//           type="button"
//           className="btn btn-primary me-3"
//           onClick={() => {
//             navigate("/aqualure"); // Navigate to Aqualure
//           }}
//           disabled={formik.isSubmitting || !formik.isValid}
//         >
//           {!loading && <span className="indicator-label">Aqualure</span>}
//           {loading && (
//             <span className="indicator-progress" style={{ display: "block" }}>
//               Please wait...
//               <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
//             </span>
//           )}
//         </button>

//         <button
//           type="button"
//           className="btn btn-secondary me-3"
//           onClick={() => {
//             navigate("Ground/homepage"); // Navigate to Ground
//           }}
//           disabled={formik.isSubmitting || !formik.isValid}
//         >
//           {!loading && <span className="indicator-label">GoGround</span>}
//           {loading && (
//             <span className="indicator-progress" style={{ display: "block" }}>
//               Please wait...
//               <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
//             </span>
//           )}
//         </button>

//         <button
//           type="button"
//           className="btn btn-info"
//           onClick={() => {
//             navigate("/"); // Navigate to SkyFeet
//           }}
//           disabled={formik.isSubmitting || !formik.isValid}
//         >
//           {!loading && <span className="indicator-label">SkyFeet</span>}
//           {loading && (
//             <span className="indicator-progress" style={{ display: "block" }}>
//               Please wait...
//               <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
//             </span>
//           )}
//         </button>
//       </div>
//       <div className="text-gray-500 text-center fw-semibold fs-6">
//         Not a Member yet?{" "}
//         <Link to="/auth/registration" className="link-primary">
//           Sign up
//         </Link>
//       </div>
//     </form>
//   );
// }
// export default Login;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { AuthService } from "../../../../api/Service/AuthServicewater";
// import { LoginBasicInfo } from "../../../../api/Model/AuthInterfaceWater";
// import SidebarPage from "../../../pages/WaterTransport/Admin_Water/AdminDashboard";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !password) {
//       setError("Both fields are required.");
//       return;
//     }

//     const loginData: LoginBasicInfo = { email, password };

//     try {
//       // Call AuthService.login to hit the API
//       const userData = await AuthService.login(loginData);

//       // Optionally, store userData or use it as needed
//       console.log(userData);

//       // Set login status to true
//       setIsLoggedIn(true);

//       // Clear error
//       setError("");
//     } catch (err) {
//       console.error("Login failed:", err);
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   const navigateToDashboard = (path: string) => {
//     console.log(`Navigating to: ${path}`);
//     navigate(path);
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       {!isLoggedIn ? (
//         <form
//           onSubmit={handleLogin}
//           style={{ maxWidth: "400px", margin: "auto" }}
//         >
//           <div style={{ marginBottom: "10px" }}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//           {error && (
//             <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
//           )}
//           <button
//             type="submit"
//             style={{
//               width: "100%",
//               padding: "10px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Login
//           </button>

//           <div className="text-gray-500 text-center fw-semibold fs-6">
//             Not a Member yet?{" "}
//             <Link to="/auth/registration" className="link-primary">
//               Sign up
//             </Link>
//           </div>
//         </form>
//       ) : (
//         <div style={{ textAlign: "center" }}>
//           <h2>Welcome! Choose your dashboard:</h2>
//           <button
//             onClick={() => navigateToDashboard("Water/Admindashboard")}
//             style={{
//               padding: "10px 20px",
//               margin: "10px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Aqualure
//           </button>
//           <button
//             onClick={() => navigateToDashboard("Ground/homepage")}
//             style={{
//               padding: "10px 20px",
//               margin: "10px",
//               backgroundColor: "#28a745",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             GoGround
//           </button>
//           <button
//             onClick={() => navigateToDashboard("/Air/Homepage")}
//             style={{
//               padding: "10px 20px",
//               margin: "10px",
//               backgroundColor: "#ffc107",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             SkyFleet
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthService } from "../../../../api/Service/AuthServicewater";

import { AirService } from "../../../../api/Service/AuthServiceAir";
import { GroundService } from "../.././/../../api/Service/AuthServiceGround";
import { LoginBasicInfo } from "../../../../api/Model/AuthInterfaceWater";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState<"water" | "air" | "ground" | "">(""); // Selected type
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!type) {
      setError("Please select a service type.");
      return;
    }

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    const loginData: LoginBasicInfo = { email, password };

    try {
      let userData;

      switch (type) {
        case "water":
          userData = await AuthService.login(loginData);
          break;
        case "air":
          userData = await AirService.login(loginData);
          break;
        case "ground":
          userData = await GroundService.login(loginData);
          break;
        default:
          throw new Error("Invalid service type selected.");
      }

      console.log("Login successful:", userData);
      setError("");
      navigate("Air/Homepage");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <form
        onSubmit={handleLogin}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            type="button"
            onClick={() => setType("water")}
            style={{
              padding: "10px 20px",
              margin: "5px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Aqualure
          </button>
          <button
            type="button"
            onClick={() => setType("ground")}
            style={{
              padding: "10px 20px",
              margin: "5px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            GoGround
          </button>
          <button
            type="button"
            onClick={() => setType("air")}
            style={{
              padding: "10px 20px",
              margin: "5px",
              backgroundColor: "#ffc107",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            SkyFleet
          </button>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <div className="text-gray-500 text-center fw-semibold fs-6">
          Not a Member yet?{" "}
          <Link to="/auth/registration" className="link-primary">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
