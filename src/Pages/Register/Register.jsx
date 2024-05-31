import { Link } from "react-router-dom";
import Navbar from "../../COmponents/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

      const { createUser, userUpdate } = useContext(AuthContext);

      const handleSubmit = (e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const name = form.get('name')
            const email = form.get('email')
            const password = form.get('password')
            const photoUrl = form.get('photoUrl')

            // create user
            createUser(email, password)
                  .then(result => {

                        // update user
                        userUpdate(name, photoUrl)
                              .then(() => {
                                    toast.success('User Created Successfully!!')
                              })
                              .catch(error => {
                                    toast.error(error.message)
                              })
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })

      }

      return (
            <div>
                  <Navbar />
                  <div className="flex justify-center items-center my-10">
                        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                              <form className="space-y-6" onSubmit={handleSubmit}>
                                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register to our platform</h5>
                                    <div>
                                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your name" required />
                                    </div>
                                    <div>
                                          <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                                          <input type="url" name="photoUrl" id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Photo Url" required />
                                    </div>
                                    <div>
                                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div className="flex items-start">
                                          <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                                </div>
                                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept our <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">teams and conditions</a></label>
                                          </div>

                                    </div>
                                    <button type="submit" className="w-full text-white bg-[#403F3F] hover:bg-[#403F3F] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                          Already have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Register;