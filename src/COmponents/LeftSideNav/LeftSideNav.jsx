import { useEffect, useState } from "react";
import CommonTitle from "../CommonTitle/CommonTitle";
import { Link } from "react-router-dom";
import './LeftSideNav.css'
import Newses from "../../Shared/Newses/Newses";

const LeftSideNav = () => {

      const [categories, setCategories] = useState([]);

      useEffect(() => {
            fetch('/data/categories.json')
                  .then(res => res.json())
                  .then(data => setCategories(data))
      }, [])

      return (
            <div >
                  <CommonTitle title='All Category' />
                  <div className="my-5">
                        <div className="national-news text-center mb-5">
                              <CommonTitle title='National News' />
                        </div>
                        {
                              categories?.map(category => <Link className="category" key={category?.id}>{category?.name}</Link>)
                        }
                  </div>
                  <div className="flex flex-col items-center justify-center">
                        <Newses />
                        <Newses />
                        <Newses />
                  </div>
            </div>
      );
};

export default LeftSideNav;