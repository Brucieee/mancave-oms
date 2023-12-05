"use client"
import { useEffect, useState } from 'react';
import { fetchProducts, Product } from 'data/products';
import { ScrollArea, ScrollBar } from '@mcsph/ui/components/scroll-area';
import Link from 'next/link';

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mx-4 mb-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Top Products</h2>
          <p className="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
        </div>
      </div>

      <div className="relative mx-4">
        <ScrollArea>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 pb-4">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-300 p-4 rounded-md cursor-pointer">
                <Link href={`/products/${product.id}`}>
                  <div className="relative h-[250px]">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h2 className="mt-2">{product.name}</h2>
                  <p>{product.description}</p>
                  <p>Quantity: {product.qty}</p>
                  <p>Price: {product.price}</p>
                </Link>
              </div>
            ))}
          </div>
          {/* Remove the ScrollBar component to hide the horizontal scrollbar */}
        </ScrollArea>
      </div>
    </>
  );
}
