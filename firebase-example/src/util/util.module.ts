
export const preventDefault = (e: Event) => {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
}

export const disableTouchMove = () => {
    window.addEventListener('touchmove', preventDefault, { passive: false });
}

export const enableTouchMove = () => {
    window.removeEventListener('touchmove', preventDefault);
}