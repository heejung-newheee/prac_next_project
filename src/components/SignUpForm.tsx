'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

import { cn } from '@/lib/utils';
import { registerSchema } from '@/validators/signUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { z } from 'zod';
import { useToast } from './ui/use-toast';

type RegisterInput = z.infer<typeof registerSchema>;
export default function SignUpForm() {
    const [step, setStep] = useState(0);
    const { toast } = useToast();

    const form = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            role: ''
        }
    });
    function onSubmit(values: RegisterInput) {
        const { password, confirmPassword } = values;
        if (password !== confirmPassword) {
            toast({
                title: '비밀번호가 일치하지 않습니다.',
                variant: 'destructive',
                duration: 1000
            });
            return;
        }
        alert(JSON.stringify(values, null, 4));
        console.log(values);
    }
    return (
        <Card className="w-[350px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <CardHeader>
                <CardTitle>회원가입</CardTitle>
                <CardDescription>필수 정보를 입력해 볼게요.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        {/* step 1 */}
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>이름</FormLabel>
                                            <FormControl>
                                                <Input placeholder="홍길동" {...field} />
                                            </FormControl>
                                            <FormDescription>실명을 입력해주세요.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
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
                                            <FormDescription>메일 양식에 맞게 입력해주세요.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>연락처</FormLabel>
                                            <FormControl>
                                                <Input placeholder="01000000000" {...field} />
                                            </FormControl>
                                            <FormDescription>'-'없이 숫자만 입력해주세요</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>역할</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="역할을 선택해주세요" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="admin">관리자</SelectItem>
                                                    <SelectItem value="user">일반사용자</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* step 2 */}
                        <div className="grid w-full items-center gap-4">
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
                                            <FormDescription>최소 6자리 이상, 영문, 숫자, 특수문자를 포함</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>비밀번호 확인</FormLabel>
                                            <FormControl>
                                                <Input type={'password'} {...field} />
                                            </FormControl>
                                            <FormDescription>비밀번호와 동일하게 적어주세요</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className={cn({ hidden: step === 0 })} type="submit">
                    계정 등록하기
                </Button>
                <Button
                    type="button"
                    className={cn({ hidden: step === 1 })}
                    onClick={() => {
                        form.trigger(['phone', 'email', 'name', 'role']);
                        const phoneState = form.getFieldState('phone');
                        const emailState = form.getFieldState('email');
                        const usernameState = form.getFieldState('name');
                        const roleState = form.getFieldState('role');

                        if (!phoneState.isDirty || phoneState.invalid) return;
                        if (!emailState.isDirty || emailState.invalid) return;
                        if (!usernameState.isDirty || usernameState.invalid) return;
                        if (!roleState.isDirty || roleState.invalid) return;

                        setStep(1);
                    }}>
                    다음 단계로
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                    type="button"
                    variant={'ghost'}
                    className={cn({ hidden: step === 0 })}
                    onClick={() => {
                        setStep(0);
                    }}>
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    이전 단계로
                </Button>
            </CardFooter>
        </Card>
    );
}
