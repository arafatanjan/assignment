import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ course }) => {
  const { _id, title, brand, price, description, image_url } = course;
  
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative">
        <img src={image_url} alt={title} className="object-cover w-full h-60" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="py-4 px-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <h3 className="text-lg text-gray-700">{brand}</h3>
        <h3 className="text-lg font-semibold mt-2">{price}</h3>
        <p className="text-sm text-gray-700 mt-2">
          {description.split(' ').slice(0, 15).join(' ')}
          {description.split(' ').length > 15 ? '...' : ''}
        </p>
        <div className="flex items-center justify-center mt-3">
          <Link to={`/products/${_id}`} className="btn btn-primary text-sm px-3 py-1">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
