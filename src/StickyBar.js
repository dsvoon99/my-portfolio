class StickyBar {
    constructor() {
        this.scrollTimer = null;
        this.mouseenter = false;
        var self = this;
        $(window).scroll(function () {
            $(window).scroll(function() {
                clearTimeout(self.scrollTimer);
                self.scrollTimer = setTimeout(function() {
                    $('.navbar__fixed').removeClass('navbar__fixed--visible');
                }, 2000)
                $('.navbar__fixed').mouseenter(function() {
                    if(self.mouseenter) {
                        return;
                    }
                    clearTimeout(self.scrollTimer);
                    this.mouseenter = true;
                })
                $('.navbar__fixed').mouseleave(function() {
                    if(!this.mouseenter) {
                        return;
                    }
                    self.scrollTimer = setTimeout(function() {
                        $('.navbar__fixed').removeClass('navbar__fixed--visible');
                    }, 2000)
                    this.mouseenter = false
                })
                if ($(window).scrollTop() > 1000) {
                    $('.navbar__fixed').addClass('navbar__fixed--visible');
                }
                if ($(window).scrollTop() < 1001) {
                    $('.navbar__fixed').removeClass('navbar__fixed--visible');
                }
            })
        });
    }
}

export default StickyBar;