import * as React from 'react';

export type IconTypes = 'font' | 'image';

export type IconAnimations = 'spin'
| 'spin-pulse'
| 'wrench'
| 'ring'
| 'vertical'
| 'horizontal'
| 'flash'
| 'bounce'
| 'float'
| 'pulse'
| 'tada'
| 'passing'
| 'passing-reverse'
| 'burst'
| 'falling'
| 'shake'
;

export type IconAnimationTypes = 'always' | 'duration' | 'hover' | 'parent-hover';

export interface IconProps {
    type?: IconTypes;
    size?: number | string;
    name: string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    hidden?: boolean;
    animation?: IconAnimations;
    animationType?: IconAnimationTypes;
    animationDuration?: number;
    innerName?: string;
    innerSize?: number | string;
    innerColor?: string;
    innerHidden?: boolean;
    innerClasName?: string;
    innerStyle?: React.CSSProperties;
    innerAnimation?: IconAnimations;
    innerAnimationType?: IconAnimationTypes;
    innerAnimationDuration?: boolean;
    stackRatio?: number[];
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default class Icon extends React.Component<IconProps, React.ComponentState> {}

declare module 'polestar-icons';