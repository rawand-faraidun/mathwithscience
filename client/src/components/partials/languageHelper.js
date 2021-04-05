// this file contains 2 functions that help any element to have properties
class languageHelper {


    // checking if the website has a valid language cookie or not
    /**
     * @return {boolean} true if the website has a valid language cookie, false otherwise
     */
    static vailedLanguageCookie() {
        return localStorage.getItem('language') === 'en' || localStorage.getItem('language') === 'kr';
    }


    // cheking if a symbol is used in the website as language symbol or not
    /**
     * @return {boolean} true if the parameter symbol was a language symbol, false otherwise
     */
    static vailedLanguageSymbol(symbol) {
        return symbol === 'en' || symbol === 'kr';
    }


    // getting cookie language symbol
    /**
     * @return {String} cookie language symbol
     */
    static getLanguageSymbol() {
        return localStorage.getItem('language');
    }


    // detecting if the element wants kurdish class name or not
    /**
     * @return {String} 'kurdish' or an empty string
     */
    static getClass() {
        return localStorage.getItem('language') === 'kr' ? 'kurdish' : '';
    }


    // detecting if the element wants rtl direction or not
    /**
     * @return {String} 'rtl' or an empty string
     */
    static getDirection() {
        return localStorage.getItem('language') === 'kr' ? 'rtl' : '';
    }
}


export default languageHelper;