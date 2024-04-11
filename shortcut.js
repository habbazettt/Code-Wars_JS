function shortcut (string) {
    const regex = /[aiueo]/g
    return string.replace(regex, '')
}