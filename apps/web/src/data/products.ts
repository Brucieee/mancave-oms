// products.ts
"use client"
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabaseUrl = 'https://ysuydfdtwhnssryeucop.supabase.co';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdXlkZmR0d2huc3NyeWV1Y29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNzYwODMsImV4cCI6MjAxNDc1MjA4M30.vkZABARM0zrNgDEbYa7-VqzSWUNU11R6PX8tvWVecYU'; // Replace with your actual API key

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseApiKey);

export interface Product {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  qty: number;
  image_url: string;
}

export async function fetchProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();

  return data as Product | null;
}

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('Error fetching data from Supabase:', error.message);
    return [];
  }

  return data as Product[];
}

