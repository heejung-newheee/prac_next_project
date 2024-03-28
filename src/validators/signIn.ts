import { z } from 'zod';
import { passwordRegex } from './signUp';

export const signInSchema = z.object({
    email: z.string().email({ message: '이메일을 확인해 주세요.' }),
    password: z.string().regex(passwordRegex, '비밀번호를 확인해 주세요.')
});
