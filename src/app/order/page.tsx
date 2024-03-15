import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2>주문 페이지</h2>
            {/* 상품정보 */}
            <Card className="w-[500px] m-2 p-2">
                <CardHeader>
                    <CardTitle>주문 상품 정보</CardTitle>
                </CardHeader>
                <div className="flex flex-wrap">
                    <div>
                        <img src="https://sitem.ssgcdn.com/05/61/77/item/1000010776105_i1_1200.jpg" alt="" className="w-[180px]" />
                    </div>

                    <div>
                        <p>상품 타이틀</p>
                        <p>가격</p>
                    </div>
                </div>

                <CardContent></CardContent>
            </Card>
            {/* 주문자 정보 */}
            <Card className="w-[500px] m-2 p-2">
                <CardHeader>
                    <CardTitle>주문자 정보</CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">수정</Button>
                </CardFooter>
            </Card>
            {/* 배송 정보 */}
            <Card className="w-[500px] m-2 p-2">
                <CardHeader>
                    <CardTitle>배송 정보</CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">수정</Button>
                </CardFooter>
            </Card>
            {/* 쿠폰/포인트 */}
            <Card className="w-[500px] m-2 p-2">
                <CardHeader>
                    <CardTitle>쿠폰/포인트</CardTitle>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">사용</Button>
                </CardFooter>
            </Card>
        </main>
    );
}
