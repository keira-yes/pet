import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonTheme {
    TRANSPARENT = 'transparent',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({ className, theme, children, ...otherProps }) => {
    return (
        <button className={classNames(classes.button, [className, classes[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
