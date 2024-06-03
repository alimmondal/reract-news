import { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AllNews = () => {
  const [products, setProducts] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [postIdToDelete, setPostIdToDelete] = useState("");
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    const apiKey = "8f32b7d45db04cc2bab08310586753dd";

    fetch(`https://newsapi.org/v2/top-headlines?country=US&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setTopNews(data))
      .catch((error) => console.error("Error fetching top headlines:", error));
  }, []);
  // console.log(topNews);

  const randomArticles = topNews?.articles;
  // console.log(randomArticles);

  const removeDuplicates = () => {
    if (!randomArticles) return [];
    return randomArticles.filter(
      (article) => article?.source.id !== null && article?.urlToImage !== null
    );
  };

  const filteredArticles = removeDuplicates();
  // console.log(filteredArticles);

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-10 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {/* {currentUser.isAdmin && products.length > 0 ? ( */}
      <>
        <Table hoverable className="shadow-md">
          <Table.Head>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>News image</Table.HeadCell>
            <Table.HeadCell>Post title</Table.HeadCell>
            <Table.HeadCell>News agency</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
            <Table.HeadCell>
              <span className=""> Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {filteredArticles.map((item) => (
            <Table.Body key={item._id} className="divided-y ">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  {new Date(item.publishedAt).toLocaleDateString()}
                  {/* {new Date().toLocaleDateString()} */}
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/news/${item?.id}`}>
                    <img src={item?.urlToImage} alt="items" className="w-36" />
                  </Link>
                </Table.Cell>

                <Table.Cell className="">
                  <Link
                    className="font-medium text-gray-900 dark:text-white"
                    to={`/products/${item?.id}`}
                  >
                    {item?.title}
                  </Link>
                </Table.Cell>

                <Table.Cell>
                  <span className="">{item?.source.name}</span>
                </Table.Cell>

                <Table.Cell>
                  <Link
                    to={`/news/${item?.id}`}
                    className="font-medium hover:underline cursor-pointer"
                  >
                    See Details
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <span
                    // onClick={() => {
                    // setShowModal(true);
                    // setPostIdToDelete(item?._id);
                    // }}
                    // onClick={() => handleDelete(item?.id)}
                    className="font-medium text-red-500 hover:underline cursor-pointer"
                  >
                    Delete
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`all-news/edit/${item?.source.id}`}>
                    <span className="text-emerald-500 hover:underline">
                      Edit
                    </span>
                  </Link>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>

        {/* {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 text-sm py-7"
            >
              Show more
            </button>
          )} */}
      </>
      {/* ) : (
        <p className="">You have no Product</p>
      )} */}

      {/*Delete Modal */}
      {/* <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeletePost}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default AllNews;
{
  /* <div>
      <h1 className="text-5xl font-bold text-center">All Produts</h1>
      <div className="my-16 flex flex-wrap gap-4">
        {products.map((item) => (
          <SingleProductCardDashboard
            key={item._id}
            item={item}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div> */
}
