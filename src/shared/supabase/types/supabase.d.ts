export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
    public: {
        Tables: {
            board: {
                Row: {
                    content: string | null;
                    created_at: string;
                    id: number;
                    title: string | null;
                    user_id: string | null;
                };
                Insert: {
                    content?: string | null;
                    created_at?: string;
                    id?: number;
                    title?: string | null;
                    user_id?: string | null;
                };
                Update: {
                    content?: string | null;
                    created_at?: string;
                    id?: number;
                    title?: string | null;
                    user_id?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'board_user_id_fkey';
                        columns: ['user_id'];
                        isOneToOne: false;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
            like: {
                Row: {
                    id: number;
                    liked_id: string;
                    user_id: string | null;
                };
                Insert: {
                    id?: number;
                    liked_id: string;
                    user_id?: string | null;
                };
                Update: {
                    id?: number;
                    liked_id?: string;
                    user_id?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'like_liked_id_fkey';
                        columns: ['liked_id'];
                        isOneToOne: false;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'like_user_id_fkey';
                        columns: ['user_id'];
                        isOneToOne: false;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
            review: {
                Row: {
                    content: string | null;
                    created_at: string;
                    id: number;
                    rating: number | null;
                    reviewed_id: string | null;
                    title: string | null;
                    user_id: string | null;
                };
                Insert: {
                    content?: string | null;
                    created_at?: string;
                    id?: number;
                    rating?: number | null;
                    reviewed_id?: string | null;
                    title?: string | null;
                    user_id?: string | null;
                };
                Update: {
                    content?: string | null;
                    created_at?: string;
                    id?: number;
                    rating?: number | null;
                    reviewed_id?: string | null;
                    title?: string | null;
                    user_id?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'review_reviewed_id_fkey';
                        columns: ['reviewed_id'];
                        isOneToOne: false;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'review_user_id_fkey';
                        columns: ['user_id'];
                        isOneToOne: false;
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
            tutor_info: {
                Row: {
                    class_info: string | null;
                    created_at: string;
                    id: number;
                    location_1: string | null;
                    location_2: string | null;
                    price: number | null;
                    update: string | null;
                    user_id: string | null;
                };
                Insert: {
                    class_info?: string | null;
                    created_at?: string;
                    id?: number;
                    location_1?: string | null;
                    location_2?: string | null;
                    price?: number | null;
                    update?: string | null;
                    user_id?: string | null;
                };
                Update: {
                    class_info?: string | null;
                    created_at?: string;
                    id?: number;
                    location_1?: string | null;
                    location_2?: string | null;
                    price?: number | null;
                    update?: string | null;
                    user_id?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'tutor_info_user_id_fkey';
                        columns: ['user_id'];
                        isOneToOne: false;
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

export type Tables<
    PublicTableNameOrOptions extends keyof (Database['public']['Tables'] & Database['public']['Views']) | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] & Database[PublicTableNameOrOptions['schema']]['Views'])
        : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions['schema']]['Tables'] & Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] & Database['public']['Views'])
    ? (Database['public']['Tables'] & Database['public']['Views'])[PublicTableNameOrOptions] extends {
          Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database } ? keyof Database[PublicTableNameOrOptions['schema']]['Tables'] : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
          Insert: infer I;
      }
        ? I
        : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database } ? keyof Database[PublicTableNameOrOptions['schema']]['Tables'] : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
          Update: infer U;
      }
        ? U
        : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database } ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums'] : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
    : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never;
