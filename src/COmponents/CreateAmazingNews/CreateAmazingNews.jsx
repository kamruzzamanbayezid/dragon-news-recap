import bgImg from '../../assets/bg.png';

const CreateAmazingNews = () => {
      return (
            <div>
                  {/* crete news */}
                  <div className="border mt-6 flex flex-col items-center justify-center py-16 px-8" style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                  }}>
                        <h1 className="create-news-title">Create an Amazing Newspaper</h1>
                        <p className="create-news-para">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className="slider-btn">Learn More</button>
                  </div>
            </div>
      );
};

export default CreateAmazingNews;