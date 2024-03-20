import { RegisterInput } from '@/components/auth/SignUpForm';
import { UserUpdateType } from '@/lib/supabase/database.types';
import { supabase } from '@/lib/supabase/supabase';

export const signUpUser = async (formData: RegisterInput) => {
    const { name, email, phone, role, password } = formData;

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                phone,
                role
            }
        }
    });

    if (error !== null) throw new Error(error.message);

    const user = {
        id: data.user?.id,
        name,
        email,
        phone,
        role
    };

    await userUpdate(user);
};

export const userUpdate = async (user: UserUpdateType) => {
    const { error } = await supabase.from('users').insert(user);
};
