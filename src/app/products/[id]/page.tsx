'use client';
import { productInfo } from '@/app/api/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { ProductType } from '@/lib/supabase/database.types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
interface ProductDetailProps {
    params: {
        id: string;
    };
}
export default function ProductDetail(props: ProductDetailProps) {
    const router = useRouter();
    const [productData, setProductData] = useState<ProductType>();

    useEffect(() => {
        console.log(props);
        const fetchData = async () => {
            try {
                const data = await productInfo(props.params.id);
                setProductData(data);
            } catch (error) {
                console.error('Error fetching product info:', error);
            }
        };
        fetchData();
    }, [props.params.id]); // props.params.id가 변경될 때마다 다시 호출
    // const onClickBuy = (id: string) => {
    //     router.push(`/order`);
    // };
    console.log(productData);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {productData ? (
                <div className="flex flex-wrap">
                    <Carousel className="max-w-96 mx-20 mb-20">
                        <CarouselContent>
                            {productData.images &&
                                productData.images.map((_, index) => (
                                    <CarouselItem key={productData?.id}>
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                                                {productData.images ? (
                                                    <Image
                                                        src={productData.images[index]}
                                                        alt=""
                                                        height={900}
                                                        width={900}
                                                        layout="responsive"
                                                    />
                                                ) : null}
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                    <div className="">
                        <div className="">
                            <p className="text-xs text-gray-300">{productData.category}</p>
                            <h3 className="text-lg font-bold">{productData.product_name}</h3>
                            <p>{productData.description}</p>
                            <p className="text-lg font-bold">{productData.price}</p>
                        </div>
                        <div className="flex pt-3 gap-2">
                            <Button variant="outline">장바구니</Button>
                            <Button>
                                <Link
                                    href={{
                                        pathname: '/order',
                                        query: {
                                            category: productData.category,
                                            id: productData.id,
                                            images: productData.images,
                                            price: productData.price,
                                            product_name: productData.product_name
                                        }
                                    }}>
                                    구매하기
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>상품페이지 중비중입니다</p>
            )}
        </main>
    );
}
