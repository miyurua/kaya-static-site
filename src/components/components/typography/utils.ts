export const handleFontWeight = (weight: any) => {
    switch (weight) {
        case 'regular':
            return '400';
        case 'medium':
            return '500';
        case 'semiBold':
            return '600';
        case 'bold':
            return '700';
        default:
            return '400';
    }
};

export const handleColor = (color: string | undefined) => {
    if (color) {
        return color;
    } else {
        return '#131820'
    }

};
