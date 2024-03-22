'use client';

import Link from 'next/link';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

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
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>SHOP</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem key={component.title} title={component.title} href={component.href}>
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>홈</NavigationMenuLink>
                    </Link>
                    <Link href="/signIn" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>로그인</NavigationMenuLink>
                    </Link>
                    <Link href="/signUp" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>회원가입</NavigationMenuLink>
                    </Link>
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
