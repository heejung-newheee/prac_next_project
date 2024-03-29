'use client';
import ProductInfo from '@/components/orderInfo/ProductInfo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UserUpdateType } from '@/lib/supabase/database.types';
import type { Session } from '@supabase/auth-helpers-nextjs';
import { Suspense, useEffect, useState } from 'react';
import { getAuthSession, getUser } from '../api/auth';

export default function Order() {
    const [user, setUser] = useState<UserUpdateType | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const sessionData = await getAuthSession();
                if (sessionData) {
                    const email = sessionData.user?.email;
                    if (email) {
                        const userData = await getUser(email);
                        setUser(userData);
                    }
                } // getUser 호출 수정
            } catch (error) {
                console.error('Error fetching session:', error);
            }
        };
        fetchUser();
        console.log('user', user);
    }, []);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2>주문 페이지</h2>
            {/* 상품정보 */}
            <Suspense>
                <ProductInfo />
            </Suspense>
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
