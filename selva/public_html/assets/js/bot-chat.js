/*jQuery Global */
var botChat = {

    init: function () {    
        this.initializeRangeSlider();         
        this.eventHandler();  

    },
    
    /**
     * create instance for all global variable and load initialy
     * 
     * @returns {undefined}
     */
    loadDefaultValues: function () {
    
    },
    /**
     * initalize Range slider
     * 
     * @returns {undefined}
     */
    initializeRangeSlider: function () {
        if (jQuery() && jQuery().rangeslider) {
           jQuery('input[type="range"]').rangeslider({
                polyfill: false,
                // Callback function
                onSlide: function (position, value) {
                }     });               
           
        } else {
            setTimeout(botChat.initializeRangeSlider, 30);
        }
    },
    /**
     * Listen the all evnent
     * 
     * @returns {undefined}
     */
    eventHandler: function () {
       jQuery('[name=points-increment]').on('click', botChat.pointsIncrement);
        jQuery('[name=points-decrement]').on('click', botChat.pointsDecrement);
    },
    
    
    /**
     * Increment points on points slider
     * 
     * @param {type} e
     * @returns {undefined}
     */
    pointsIncrement: function (e) {
        jQuery('input[type="range"]').val(parseInt(jQuery('input[type="range"]').val()) + 1).change();
    },
    /**
     * Decrement points on points slider
     * 
     * @param {type} e
     * @returns {undefined}
     */
    pointsDecrement: function (e) {
        jQuery('input[type="range"]').val(parseInt(jQuery('input[type="range"]').val()) - 1).change();
    },    
    /**
     * Onchange the slider event
     * 
     * @param {type} e
     * @returns {undefined}
     */
    onChangeSlider: function (e) {
       
    },

};
jQuery(document).ready(function () {
    botChat.init();
});