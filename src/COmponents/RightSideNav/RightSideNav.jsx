import CommonTitle from "../CommonTitle/CommonTitle";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import img1 from '../../assets/qZone1.png';
import img2 from '../../assets/qZone2.png';
import img3 from '../../assets/qZone3.png';
import './RightSideNav.css'

const RightSideNav = () => {
      return (
            <div>
                  <div className="mb-6">
                        <CommonTitle title='Login With' />
                        <div className="mt-5">
                              <button className="border hover:border-primary hover:text-primary text-center py-3 w-full rounded-lg flex items-center justify-center gap-2 mb-3"><FaGoogle /> Login With Google</button>
                              <button className="border hover:border-primary hover:text-primary text-center py-3 w-full rounded-lg flex items-center justify-center gap-2 mb-3"><FaGithub /> Login With Github</button>
                        </div>
                  </div>
                  <div>
                        <CommonTitle title='Find Us On' />
                        <div className="mt-4">
                              <a className="flex items-center gap-2 text-[#706F6F] text-base font-medium p-4 border rounded-t-lg" href="#"><FaFacebook className="text-blue-600" />Facebook</a>
                              <a className="flex items-center gap-2 text-[#706F6F] text-base font-medium p-4 border-x" href="#"><FaTwitter className="text-blue-600" />Twitter</a>
                              <a className="flex items-center gap-2 text-[#706F6F] text-base font-medium p-4 border rounded-b-lg" href="#"><FaInstagram className="text-blue-600" />Instagram</a>
                        </div>
                  </div>

                  {/* Q zone */}
                  <div className="bg-[#F3F3F3] px-2 py-4 mt-5">
                        <CommonTitle title='Q-Zone' />
                        <div className="flex flex-col">
                              <img className="mt-4" src={img1} alt="" />
                              <img src={img2} alt="" />
                              <img src={img3} alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default RightSideNav;