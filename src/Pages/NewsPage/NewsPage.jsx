import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { useEffect, useState } from "react";
import CommonTitle from "../../COmponents/CommonTitle/CommonTitle";
import RightSideNav from "../../COmponents/RightSideNav/RightSideNav";
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../../COmponents/Navbar/Navbar";

const NewsPage = () => {

      const [news, setNews] = useState({});

      const newses = useLoaderData();
      const { id } = useParams();
      const navigate = useNavigate();

      useEffect(() => {
            const matchedNews = newses?.find(news => news?._id === id);
            setNews(matchedNews);
      }, [id, newses]);

      const { title, image_url, details } = news;

      const handleBack = () => {
            navigate(-1)
      }

      return (
            <div>
                  <Header />
                  <Navbar/>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-10">
                        <div className="lg:col-span-3">
                              <CommonTitle title='Dragon News' />
                              <div className='mt-5 news-card'>

                                    <div className='p-4'>
                                          <img className='mb-6 w-full' src={image_url} alt="" />
                                          <h1 className='card-title'>{title}</h1>
                                          <span className='card-details mb-5'>{details}</span>

                                          <button className="slider-btn flex items-center gap-2 mt-7"><IoIosArrowBack />All news in this category</button>

                                          <button onClick={handleBack} className="text-[#D72050] border border-[#D72050] px-5 py-2 flex items-center gap-2 mt-7"><IoIosArrowBack />Go back</button>
                                    </div>

                              </div>
                        </div>
                        <div className="">
                              <RightSideNav />
                        </div>
                  </div>
            </div>
      );
};

export default NewsPage;