import { supabase } from '@/lib/supabase/supabase';

export const productInfo = async (id: string) => {
    const { data, error } = await supabase.from('products').select().eq('id', id).single();
    if (error) throw error;
    return data;
};
