'use client';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { ProductType } from '@/lib/supabase/database.types';
import { supabase } from '@/lib/supabase/supabase';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        try {
            const { data: productsData, error } = await supabase.from('products').select();
            if (error) throw new Error();
            console.log('Products data:', productsData);
            setProducts(productsData); // 상태 변수에 데이터를 설정합니다.
        } catch (err) {
            console.log('데이터를 불러오지 못했습니다', err);
            return null;
        }
    };
    return (
        <main className="flex flex-wrap min-h-screen items-center p-24">
            {products.map((item) => (
                <Card key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 p-2 cursor-pointer">
                    <Image
                        src={item.images ? item.images[0] : '이미지 준비중'}
                        alt="이미지"
                        width={400}
                        height={300}
                        className="pb-3"
                    />
                    <CardTitle className="text-lg">{item.product_name}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                    <div>
                        <p className="font-bold">{item.price}</p>
                    </div>
                </Card>
            ))}
        </main>
    );
}
