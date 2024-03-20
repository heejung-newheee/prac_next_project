'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors }
    } = useForm();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>로그인 페이지 입니다</div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>로그인</CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={handleSubmit(async (data) => {
                            await new Promise((r) => setTimeout(r, 1000));
                            alert(JSON.stringify(data));
                        })}>
                        <div className="space-y-1.5">
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">이메일</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="example@example.com"
                                        {...register('email', {
                                            // 필수입력
                                            required: '이메일은 필수 입력입니다.',
                                            // 특정형식을 이용해서 정규식 검증 가능
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: '형식이 올바르지 않습니다'
                                            }
                                        })}
                                    />
                                    {/* <small>{errors.email.message}</small> */}
                                </div>
                            </div>

                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">비밀번호</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="******"
                                        {...register('password')}
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="flex justify-between">
                            <Button variant="ghost">회원가입</Button>
                            <Button type="submit" disabled={isSubmitting}>
                                로그인
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}
