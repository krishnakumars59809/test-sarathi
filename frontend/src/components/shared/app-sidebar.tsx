'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Boxes,
  Home,
  MessageSquare,
  Receipt,
  Users,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/src/components/ui/sidebar';
import { AppLogo } from '@/src/components/icons';
import { cn } from '@/src/lib/utils';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const menuItems = [
  { href: '/', label: 'Chat', icon: MessageSquare },
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/products', label: 'Products', icon: Boxes },
  { href: '/parties', label: 'Parties', icon: Users },
  { href: '/transactions', label: 'Transactions', icon: Receipt },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <AppLogo />
          <span className="text-lg font-semibold text-foreground">
            Vyapar Sarthi
          </span>
        </div>
        <div>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className={cn(pathname === item.href && 'bg-sidebar-accent')}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         <Separator className="my-2"/>
         <div className="flex items-center gap-3 p-2">
            <Avatar>
                <AvatarImage src="https://placehold.co/40x40.png" alt="@user" />
                <AvatarFallback>VS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="text-sm font-medium">Shop Owner</span>
                <span className="text-xs text-muted-foreground">owner@vyapar.com</span>
            </div>
         </div>
      </SidebarFooter>
    </Sidebar>
  );
}
