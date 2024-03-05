'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';

export default function SignUpForm() {
    return (
        <Card className="w-[350px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <CardHeader>
                <CardTitle>계정을 생성합니다</CardTitle>
                <CardDescription>필수 정보를 입력해 볼게요.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">이름</Label>
                            <Input id="name" placeholder="홍길동" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">이메일</Label>
                            <Input id="email" placeholder="example@example.com" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="phone">연락처</Label>
                            <Input id="phone" placeholder="01000000000" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">역할</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="역할을 선택해주세요" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="admin">관리자</SelectItem>
                                    <SelectItem value="user">일반사용자</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>
                    다음 단계로
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </CardFooter>
        </Card>
    );
}
