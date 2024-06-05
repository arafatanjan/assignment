
import SingleProduct from "./SingleProducts";


const Products = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font text-center my-8 text-black bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent shadow-md transition duration-300 ease-in-out transform hover:scale-105">Our courses</h1>

      <div className="flex flex-wrap gap-2 px-6 justify-center items-center">
      {
        data?.slice(0, 8).map((course) => (
          <SingleProduct key={course._id} course={course} />
        ))
      }
    </div>
    </div>
  );
};

export default Products;