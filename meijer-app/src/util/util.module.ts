import scssVariables from './../sassStyles/_variables.module.scss';

export const preventDefault = (e: Event) => {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
}

export const disableScroll = () => {
    // window.onwheel = preventDefault;
    // window.ontouchmove = preventDefault;
    window.addEventListener('touchmove', preventDefault, { passive: false });
}

export const enableScroll = () => {
    window.onwheel = null;
    window.removeEventListener('touchmove', preventDefault);
}

export const setDarkTheme = () => {
    document.documentElement.style.setProperty("--background-color", scssVariables.backgroundColorDark);
    document.documentElement.style.setProperty("--font-color", scssVariables.fontColorDark);
}


export const setLightTheme = () => {
    document.documentElement.style.setProperty("--background-color", scssVariables.backgroundColor);
    document.documentElement.style.setProperty("--font-color", scssVariables.fontColor);
}