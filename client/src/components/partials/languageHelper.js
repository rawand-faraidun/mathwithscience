/**
 * includes all methods for the app language
 * 
 * @return {Class} : contains functions to help with website language
 */
class languageHelper {

    // initiating cookie check
    constructor() {

        // checking if the website has a valid language cookie, if not it will create one
        if (!languageHelper.vailedLanguageCookie()) {
            localStorage.setItem('language', 'en')
        }
    }


    /**
     * getting cookie language symbol
     * 
     * @return {String} cookie language symbol
     */
    static getLanguageSymbol() {
        return localStorage.getItem('language')
    }


    /**
     * checking if the website has a valid language cookie or not
     * 
     * @return {boolean} true if the website has a valid language cookie, false otherwise
     */
    static vailedLanguageCookie() {
        return this.getLanguageSymbol() === 'en' || this.getLanguageSymbol() === 'kr'
    }


    /**
     * cheking if a symbol is used in the website as language symbol or not
     * 
     * @param {string} symbol : the symbol that needs to be checked
     * @return {boolean} true if the parameter symbol was a language symbol, false otherwise
     */
    static vailedLanguageSymbol(symbol) {
        return symbol === 'en' || symbol === 'kr'
    }


    /**
     * getting other language symbol from cookie
     * 
     * @return {String} other language symbol from cookie
     */
    static getOtherLanguageSymbol() {
        return this.getLanguageSymbol() === 'en' ? 'kr' : 'en'
    }


    /**
     * detecting if the element wants kurdish class name or not
     * 
     * @return {String} 'kurdish' or an empty string
     */ 
    static getClass() {
        return this.getLanguageSymbol() === 'kr' ? 'kurdish' : ''
    }


    /**
     * detecting if the element wants rtl direction or not
     * 
     * @return {String} 'rtl' or an empty string
     */
    static getDirection() {
        return this.getLanguageSymbol() === 'kr' ? 'rtl' : ''
    }
}



export default languageHelper