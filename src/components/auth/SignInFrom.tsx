'use client';
import { signInUser } from '@/app/api/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { registerSchema } from '@/validators/signUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, useForm } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { RegisterInput } from './SignUpForm';

export default function SignInFrom() {
    const form = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = async (values: RegisterInput) => {
        const { name, email, phone, role, password, confirmPassword } = values;

        console.log('onSubmit called', values);
        alert(JSON.stringify(values, null, 4));
        signInUser(values);
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
                            <Button variant="ghost">회원가입</Button>
                            <Button type="submit">로그인</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
