import cn from 'classnames';

type PageLayoutContentsProps = {
  className?: string;
  children: React.ReactNode;
};

function PageLayoutContents({ className, children }: PageLayoutContentsProps) {
  return <article className={cn('w-full flex-1 px-4', className)}>{children}</article>;
}

export default PageLayoutContents;