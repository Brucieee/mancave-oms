"use client"
import { useEffect, useState } from 'react';
import { fetchProductById, Product } from 'data/products';

interface ProductDetailPageProps {
  id: number;
}

export default function ProductDetailPage({ id }: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        const data = await response.json();
        console.log('API Response:', data); 
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchData();
  
    console.log('Product State:', product);
  }, [id, product]);
  

console.log('Product State:', product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-4 mt-4">
      {product.name && (
        <>
          <h2 className="text-2xl font-semibold tracking-tight">{product.name}</h2>
          <p className="text-sm text-muted-foreground">{product.description}</p>

          {product.image_url && (
            <div className="my-4">
              <img src={product.image_url} alt={product.name} className="w-full h-auto" />
            </div>
          )}

          <div className="flex justify-between my-4">
            <div>
              <p className="text-lg font-semibold">Quantity:</p>
              <p>{product.qty}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Price:</p>
              <p>{product.price}</p>
            </div>
          </div>
        </>
      )}


    </div>
  );
}
