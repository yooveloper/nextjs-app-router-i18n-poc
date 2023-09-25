import Link from "next/link";
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
  href: string;
  locale: string;
  pathname: string;
  children: React.ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, locale, pathname, children, ...rest }) => {
  const router = usePathname();
  const isActive = router === href
  const textColor = isActive ? 'text-white' : 'text-neutral-400';

  return (
    <Link href={href}>
      <div className={textColor}>
        {children}
      </div>
    </Link>
  )
}

export default ActiveLink;