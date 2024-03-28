'use client';
import { signInUser } from '@/app/api/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { signInSchema } from '@/validators/signIn';
import { registerSchema } from '@/validators/signUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
export type SigninRegisterInput = z.infer<typeof signInSchema>;
export default function SignInFrom() {
    const router = useRouter();
    const form = useForm<SigninRegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const [loading, setLoading] = useState(false); // 상태 추가

    const onSubmit = async (values: SigninRegisterInput) => {
        console.log('dd');
        setLoading(true); // 로딩 상태 설정
        try {
            await signInUser(values);
            router.push('/');
            console.log('onSubmit called', values);
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
            alert('계정정보를 확인해 주세요');
        } finally {
            setLoading(false); // 로딩 상태 해제
        }
    };
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>로그인</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-1.5">
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>이메일</FormLabel>
                                            <FormControl>
                                                <Input placeholder="example@example.com" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>비밀번호</FormLabel>
                                            <FormControl>
                                                <Input type={'password'} {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="flex justify-between">
                            <Button type="submit" disabled={loading}>
                                로그인
                            </Button>
                            {/* 로딩 상태에 따라 버튼 비활성화 */}
                            <Button type="button" variant="ghost" onClick={() => router.push('/signUp')}>
                                회원가입
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
