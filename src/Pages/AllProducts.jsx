import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../Components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("https://assignment-server-nine-olive.vercel.app/courses")
      .then((res) => res.json())
      .then((data) =>{setProducts(data);
        setSearchResult(data)
      } 
    );
      
  }, []);
  //{products.filter(d => console.log(d.title))};
  console.log(searchResult);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  const handleSearchChange = event => {
    setSearchText(event.target.value);
    const match = products.filter(product => product?.title.toLowerCase().includes(searchText.toLowerCase()));
     console.log(match);
    setSearchResult(match);
}

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Courses</h1>
      <div style={{ 'margin': '20px' }}>
                <input type="text" onChange={handleSearchChange} className="input input-bordered input-sm w-full max-w-xs" placeholder='search' />
            </div>
      <div className="my-16 flex flex-wrap gap-4">
        {searchResult.map((ball) => (
          <SingleProductCardDashboard
            key={ball._id}
            ball={ball}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;