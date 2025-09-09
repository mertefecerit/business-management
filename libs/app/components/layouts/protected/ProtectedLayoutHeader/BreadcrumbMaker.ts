import MenuItems, {FlattenMenuItems} from "@/libs/app/components/layouts/protected/ProtectedLayoutSidebar/MenuItems";

interface BreadcrumbItem {
    href: string;
    label: string;
    isLast: boolean;
}

const BreadcrumbMaker = (pathname:string) => {

    const flatRoutes = FlattenMenuItems(MenuItems());
    const segments = pathname.split("/").filter(Boolean);

    const breadcrumbs: BreadcrumbItem[] = [];

    segments.forEach((_, index) => {
        // Bu seviyeye kadar olan path'i oluştur
        const currentPath = '/' + segments.slice(0, index + 1).join('/');

        // Bu path'e karşılık gelen menu item'i bul
        const menuItem = flatRoutes.find(item => item.href === currentPath);

        if (menuItem) {
            breadcrumbs.push({
                href: currentPath,
                label: menuItem.label,
                isLast: index === segments.length - 1
            });
        } else {
            // Eğer exact match bulamazsa, segment'i capitalize ederek label oluştur
            // Bu durumda dynamic route'lar için fallback sağlar
            const label = segments[index]
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            breadcrumbs.push({
                href: currentPath,
                label: label,
                isLast: index === segments.length - 1
            });
        }
    });
    return breadcrumbs;
}

export default BreadcrumbMaker;