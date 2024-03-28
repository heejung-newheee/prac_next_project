import { RegisterInput } from '@/components/auth/SignUpForm';
import { UserUpdateType } from '@/lib/supabase/database.types';
import { supabase } from '@/lib/supabase/supabase';

export const signUpUser = async (values: RegisterInput) => {
    const { name, email, phone, role, password } = values;

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
    if (error !== null) throw new Error(error.message);
};

export const signInUser = async (values: RegisterInput) => {
    const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password
    });
    if (error !== null) throw new Error(error.message);
};

export const signOut = async () => {
    await supabase.auth.signOut();
};
