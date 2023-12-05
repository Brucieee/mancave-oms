// [id].tsx
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Detail | Man Cave Supplies PH, Inc.',
};

const DynamicProductDetailPage = dynamic(() => import('app/products/[id]/products-client'), { ssr: false });

export default DynamicProductDetailPage;
