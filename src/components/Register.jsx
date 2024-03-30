import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);

<<<<<<< HEAD
  const {user, createUser} = useContext(AuthContext)
 


    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
=======
  const handleRegister = (event) => {
    event.preventDefault(); //typo mistake
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
     })
     .catch(error => {
      console.log(error);
     })
>>>>>>> 11751dc87089a848288f7d08d29d89c83f365fe5

    
    
  };

<<<<<<< HEAD
        createUser(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset();
         })
         .catch(error => {
          console.log(error);
         })
    }
=======
>>>>>>> 11751dc87089a848288f7d08d29d89c83f365fe5



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register!!!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={(e) => {handleRegister(e)}} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/Login" className="label-text-alt link link-hover">
                  Already have an accoutn?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
<<<<<<< HEAD
              <button  className="btn btn-primary">Register</button>
=======
              <button className="btn btn-primary">Login</button>
>>>>>>> 11751dc87089a848288f7d08d29d89c83f365fe5
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
