import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const course = useLoaderData();
//console.log(course)
  const { brand, description, image_url, price, title } = course;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px',  borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}> {title} </h1>
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img style={{ maxHeight: '600px', width: 'auto' }} src={image_url} alt="product image" />
    </div>
    <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}> $ {price} </h3>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#666', marginBottom: '10px' }}> {brand} </h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.5', color: '#444' }}> {description} </p>
    </div>
</div>

  );
};

export default ProductDetails;