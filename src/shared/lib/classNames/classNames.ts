type Mods = Record<string, boolean | string>;

export const classNames = (className: string, classes: string[] = [], mods: Mods = {}): string => {
    return [
        className,
        ...classes.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key]) => key),
    ].join(' ');
};
