import { useEffect, useState } from "react";
import CommonTitle from "../../COmponents/CommonTitle/CommonTitle";
import LeftSideNav from "../../COmponents/LeftSideNav/LeftSideNav";
import Navbar from "../../COmponents/Navbar/Navbar";
import Slider from "../../COmponents/Slider/Slider";
import Header from "../../Shared/Header/Header";
import NewsDetails from "../../COmponents/NewsDetails/NewsDetails";
import RightSideNav from "../../COmponents/RightSideNav/RightSideNav";
import CreateAmazingNews from "../../COmponents/CreateAmazingNews/CreateAmazingNews";

const Home = () => {

      const [newses, setNewses] = useState([]);
      const [showAll, setShowAll] = useState(false);

      useEffect(() => {
            fetch('/data/news.json')
                  .then(res => res.json())
                  .then(data => setNewses(data))
      }, [])

      const handleShowAllNews = () => {
            setShowAll(!showAll)
      }

      const displayNews = showAll ? newses : newses?.slice(0, 5);

      return (
            <div>
                  <Header />
                  <Slider />
                  <Navbar />
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-10">
                        <div className="">
                              <LeftSideNav />
                        </div>
                        <div className="lg:col-span-2">
                              <CommonTitle title='Dragon News Home' />
                              {
                                    displayNews?.map(news => <NewsDetails
                                          key={news?._id}
                                          news={news}
                                    ></NewsDetails>)
                              }
                              <div className="flex justify-center">
                                    <button onClick={handleShowAllNews} className="slider-btn my-6">{showAll ? 'Show Less News' : 'Show All News'}</button>
                              </div>
                        </div>
                        <div className="">
                              <RightSideNav />
                              {/* crete news */}
                              <CreateAmazingNews />
                        </div>
                  </div>
            </div>
      );
};

export default Home;