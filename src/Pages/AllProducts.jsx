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


  const handleDeleteProduct = (id) => {
    setSearchResult(searchResult.filter((product) => product._id !== id));
  };

  const handleSearchChange = event => {
    setSearchText(event.target.value);
    const match = products.filter(product => product?.title.toLowerCase().includes(searchText.toLowerCase()));
  
    setSearchResult(match);
}

  return (
    <div>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>All Courses</h1>
      <div style={{ 'margin': '20px', 'text-align': 'center' }}>
                <input type="text" onChange={handleSearchChange} className="input input-bordered input-sm w-full max-w-xs" placeholder='search by title' />
            </div>
            <div className="my-16 flex flex-wrap gap-4">
        {searchResult.map((course) => (
          <SingleProductCardDashboard
            key={course._id}
            course={course}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;