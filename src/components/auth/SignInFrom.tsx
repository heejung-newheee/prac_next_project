'use client';
import { signInUser } from '@/app/api/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { registerSchema } from '@/validators/signUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { RegisterInput } from './SignUpForm';

export default function SignInFrom() {
    const router = useRouter();
    const form = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = async (values: RegisterInput) => {
        console.log('dd');
        const { name, email, phone, role, password, confirmPassword } = values;
        try {
            await signInUser(values);
            router.push('/');
            router.refresh();
            console.log('onSubmit called', values);
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
            alert('비밀번호가 일치하지 않습니다.');
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
                            <Button type="submit">로그인</Button>
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
