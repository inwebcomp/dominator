export default class Translator {
    constructor(translations) {
        this.translations = translations
    }

    get(key, replacements = null) {
        let message = this.translations[key] ? this.translations[key] : key

        if (replacements !== null) {
            message = Translator._applyReplacements(message, replacements)
        }

        return message
    }

    static _sortReplacementKeys(a, b) {
        return b.length - a.length
    }

    static _applyReplacements(message, replacements) {
        let keys = Object.keys(replacements).sort(Translator._sortReplacementKeys)

        keys.forEach(function (replace) {
            message = message.replace(new RegExp(':' + replace, 'gi'), function (match) {
                let value = replacements[replace]

                // Capitalize all characters.
                let allCaps = match === match.toUpperCase()
                if (allCaps) {
                    return value.toUpperCase()
                }

                // Capitalize first letter.
                let firstCap = match === match.replace(/\w/i, function (letter) {
                    return letter.toUpperCase()
                })
                if (firstCap) {
                    return value.charAt(0).toUpperCase() + value.slice(1)
                }

                return value
            })
        })
        return message
    }
}