export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
    public: {
        Tables: {
            point: {
                Row: {
                    created_at: string;
                    history: string | null;
                    id: string;
                    point: number | null;
                    user_id: string | null;
                };
                Insert: {
                    created_at?: string;
                    history?: string | null;
                    id?: string;
                    point?: number | null;
                    user_id?: string | null;
                };
                Update: {
                    created_at?: string;
                    history?: string | null;
                    id?: string;
                    point?: number | null;
                    user_id?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'public_point_user_id_fkey';
                        columns: ['user_id'];
                        isOneToOne: false;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
            products: {
                Row: {
                    category: string | null;
                    created_at: string;
                    description: string | null;
                    id: string;
                    images: string[] | null;
                    price: number | null;
                    product_name: string | null;
                };
                Insert: {
                    category?: string | null;
                    created_at?: string;
                    description?: string | null;
                    id?: string;
                    images?: string[] | null;
                    price?: number | null;
                    product_name?: string | null;
                };
                Update: {
                    category?: string | null;
                    created_at?: string;
                    description?: string | null;
                    id?: string;
                    images?: string[] | null;
                    price?: number | null;
                    product_name?: string | null;
                };
                Relationships: [];
            };
            users: {
                Row: {
                    address: string | null;
                    created_at: string;
                    email: string | null;
                    id: string;
                    name: string;
                    phone: string | null;
                    role: string | null;
                };
                Insert: {
                    address?: string | null;
                    created_at?: string;
                    email?: string | null;
                    id: string;
                    name: string;
                    phone?: string | null;
                    role?: string | null;
                };
                Update: {
                    address?: string | null;
                    created_at?: string;
                    email?: string | null;
                    id?: string;
                    name?: string;
                    phone?: string | null;
                    role?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'public_users_id_fkey';
                        columns: ['id'];
                        isOneToOne: true;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
    PublicTableNameOrOptions extends
        | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
              Database[PublicTableNameOrOptions['schema']]['Views'])
        : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
          Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
          Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
        : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
          Insert: infer I;
      }
        ? I
        : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
        : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
          Update: infer U;
      }
        ? U
        : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
        : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type UserUpdateType = Database['public']['Tables']['users']['Insert'];
export type ProductType = Database['public']['Tables']['products']['Row'];
