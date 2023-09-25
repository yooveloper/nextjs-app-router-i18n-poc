import cn from 'classnames';
import React, { SVGProps } from 'react';

export type IconProps = {
    size?: 'sm' | 'md' | 'lg';
    width?: number | string;
    height?: number | string;
    color?: string;
    strokeColor?: string;
    className?: string;
    children: React.ReactNode;
} & SVGProps<SVGSVGElement>;

const ICON_SIZE = {
    sm: 16,
    md: 24,
    lg: 32,
} as const;

const ICON_COLOR: { [key: string]: string } = {
    black: 'fill-black',
    white: 'fill-white',
    'primary-300': 'fill-primary-300',
    'grey-700': 'fill-grey-700',
  } as const;
  
  const STROKE_COLOR: { [key: string]: string } = {
    black: 'stroke-black',
    'primary-500': 'stroke-primary-500',
    'secondary-900': 'stroke-secondary-900',
  } as const;

const IconBase = ({
    size = 'md',
    width,
    height,
    color = 'black',
    strokeColor = '',
    className,
    children,
    ...rest
}: IconProps) => {
    return (
        <svg className={cn(ICON_COLOR[color], STROKE_COLOR[strokeColor], className)}
            width={width ? width : ICON_SIZE[size]}
            height={height ? height : ICON_SIZE[size]}
            {...rest}
        >
            {children}
        </svg>
    )
}

export default IconBase;