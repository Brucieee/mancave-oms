"use client"
// products-client.tsx
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { fetchProductById, fetchProducts, Product } from 'data/products';
import { Badge } from "@mcsph/ui/components/badge";
import { Button } from "@mcsph/ui/components/button";

function ProductsClientComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1); // State for quantity selection

  useEffect(() => {
    const fetchProductData = async () => {
      // Extract product ID from the search params or pathname
      const productId = searchParams.get('productId') || pathname.split('/').pop();

      if (productId) {
        // Fetch single product by ID
        const singleProduct = await fetchProductById(productId);
        setProduct(singleProduct);
      } else {
        // Fetch all products
        const allProducts = await fetchProducts();
        setProducts(allProducts);
      }
    };

    fetchProductData();
  }, [pathname, searchParams]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px', height: '100vh' }}>
      {product ? (
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1000px' }}>
          <div style={{ width: '700px', height: '500px', border: '4px solid #000', overflow: 'hidden', marginRight: '40px' }}>
            <img
              src={product.image_url}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
          <div style={{ width: '700px', border: '4px solid #000', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '15px' }}>{product.name}</h2>
            <Badge style={{ color: '#000', margin: '0 0 15px 0', fontSize: '1.2em' }}>Price: ₱{product.price.toFixed(2)}</Badge>
            <p style={{ fontSize: '1.5em', marginBottom: '15px', opacity: 0.8 }}>{product.description}</p>
            {/* Quantity selector */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
              <Button onClick={decreaseQuantity}>-</Button>
              <Badge style={{ color: '#000', margin: '0 10px', fontSize: '1.5em' }}>{quantity}</Badge>
              <Button onClick={increaseQuantity}>+</Button>
            </div>
            {/* Button */}
            <Button style={{ fontSize: '1.5em', marginBottom: '15px' }}>Add to Cart</Button>
          </div>
        </div>
      ) : (
        <div>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>All Products</h2>
          {/* Display a list of all products */}
          <ul style={{ padding: '0', listStyle: 'none' }}>
            {products.map((p) => (
              <li key={p.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '40px', maxWidth: '1000px' }}>
                <div style={{ width: '700px', height: '500px', border: '4px solid #000', overflow: 'hidden', marginRight: '40px' }}>
                  <img
                    src={p.image_url}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <div style={{ width: '700px', border: '4px solid #000', padding: '20px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2em', marginBottom: '15px' }}>{p.name}</h3>
                  <Badge style={{ color: '#000', margin: '0 0 15px 0', fontSize: '1.2em' }}>Price: ₱{p.price.toFixed(2)}</Badge>
                  <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>{p.description}</p>
                  <Button style={{ fontSize: '1.5em' }}>View Details</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductsClientComponent;