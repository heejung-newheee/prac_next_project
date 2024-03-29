import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchParams } from 'next/navigation';
const ProductInfo = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const id = searchParams.get('id');
    const images = searchParams.get('images');
    const price = searchParams.get('price');
    const product_name = searchParams.get('product_name');
    return (
        <Card className="w-[500px] m-2 p-2">
            <CardHeader>
                <CardTitle>주문 상품 정보</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap">
                    <div>{images ? <img src={images} alt="" className="w-[120px]" /> : '이미지가 없음'}</div>
                    <div>
                        <p className="text-xs text-gray-300">{category}</p>
                        <p>{product_name}</p>
                        <p className="text-lg font-bold">
                            {price}
                            <span className="text-sm">원</span>
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductInfo;
