'use client';

import Link from 'next/link';

import { getAuthSession, signOut } from '@/app/api/auth';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import type { Session } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: 'Alert Dialog',
//         href: '/docs/primitives/alert-dialog',
//         description: 'A modal dialog that interrupts the user with important content and expects a response.'
//     },
//     {
//         title: 'Hover Card',
//         href: '/docs/primitives/hover-card',
//         description: 'For sighted users to preview content available behind a link.'
//     }
// ];
export default function Nav() {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean | string>(false);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const sessionData = await getAuthSession();
                if (sessionData) {
                    setSession(sessionData);
                    setIsLogin(true);
                    setIsAdmin(sessionData.user.user_metadata.role === 'admin');
                }
            } catch (error) {
                console.error('Error fetching session:', error);
            }
        };
        fetchSession();
    }, []);
    const handleClickLogout = async () => {
        try {
            await signOut();
            setIsLogin(false);
            if (isAdmin === 'admin') setIsAdmin(false);
            router.push('/');
            router.refresh();
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
        }
    };
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>홈</NavigationMenuLink>
                    </Link>
                    {isLogin ? (
                        <>
                            <Link href="/signIn" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    onClick={handleClickLogout}>
                                    로그아웃
                                </NavigationMenuLink>
                            </Link>
                            {isAdmin && (
                                <Link href="/admin" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        관리자 메뉴
                                    </NavigationMenuLink>
                                </Link>
                            )}
                        </>
                    ) : (
                        <>
                            <Link href="/signIn" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>로그인</NavigationMenuLink>
                            </Link>
                            <Link href="/signUp" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    회원가입
                                </NavigationMenuLink>
                            </Link>
                        </>
                    )}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

// const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
//     ({ className, title, children, ...props }, ref) => {
//         return (
//             <li>
//                 <NavigationMenuLink asChild>
//                     <a
//                         ref={ref}
//                         className={cn(
//                             'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//                             className
//                         )}
//                         {...props}>
//                         <div className="text-sm font-medium leading-none">{title}</div>
//                         <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
//                     </a>
//                 </NavigationMenuLink>
//             </li>
//         );
//     }
// );
// ListItem.displayName = 'ListItem';
