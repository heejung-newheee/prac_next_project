'use client';
import { signInUser } from '@/app/api/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInFrom() {
    const router = useRouter();
    // const form = useForm<RegisterInput>({
    //     resolver: zodResolver(registerSchema),
    //     defaultValues: {
    //         email: '',
    //         password: ''
    //     }
    // });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };
    // TODO 로그인시 NAV 리렌더링
    const loinInOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInUser({ email, password });
            router.push('/');
            router.refresh();
            console.log('onSubmit called', email, password);
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
            alert('계정정보를 확인해 주세요');
        }
    };
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>로그인</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={loinInOnSubmit}>
                    <div className="space-y-1.5">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="이메일을 입력하세요"
                                name="email"
                                value={email}
                                onChange={handleInput}
                            />
                            {email && <button type="button" onClick={() => setEmail('')}></button>}
                        </div>

                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="password">비밀번호</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="비밀번호를 입력하세요"
                                name="password"
                                value={password}
                                onChange={handleInput}
                            />
                            {password && <button type="button" onClick={() => setPassword('')}></button>}
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-between">
                        <Button type="submit">로그인</Button>
                        <Button type="button" variant="ghost" onClick={() => router.push('/signUp')}>
                            회원가입
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
