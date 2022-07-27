const toTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}
const isDarkModeOn = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const navScroll = (section) => {
    const location = document.getElementById(section)
    location.scrollIntoView({behavior:"smooth", block: "end"})
}
