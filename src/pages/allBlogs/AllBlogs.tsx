import { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";

const AllBlogs = () => {
  const context = useContext(myContext);
  const { mdoe } = context;
  return (
    <Layout>
      <section>
        <div>
          {/*Top Heading*/}
          <div>
            <h1>All Blogs</h1>
          </div>
          {/*Main Content*/}
          <div>
            {/*Card 1*/}
            <div>
              <div>
                {/*Blog Thumbnail*/}
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76"
                  }
                  alt="blog"
                />
                {/*Top Items*/}
                <div>
                  {/*Blog Date*/}
                  <h2>{"9 June 2024"}</h2>
                  {/*Blog Title*/}
                  <h1>{"React Project"}</h1>
                  {/*Blog Description*/}
                  <p>
                    I dont know how to remember this but gonna be crazy fun to
                    learn all new things
                  </p>
                </div>
              </div>
            </div>
            {/*Card 2*/}
            <div>
              <div>
                {/*Blog Thumbnails*/}
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/blog-fea71.appspot.com/o/blogimage%2FReact%20Introduction.png?alt=media&token=1ba7496b-2cbc-450c-ab1a-57e19882dc76"
                  }
                  alt="blogs"
                />
                {/* Top items*/}
                <div>{/*Blog Date*/}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AllBlogs;
