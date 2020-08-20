class MyProjectSelector {
    constructor() {
        var pointer = 0;
        var idsHidden = [1,2];
        var classes = [".myproject__class--md", ".myproject__class--ml", ".myproject__class--cc"];
        $.each(idsHidden, function(i,v) {
            $(`#${v}`).addClass("myproject__content--hide");
        })
        $(".myproject__arrow--right").click(function() {
            pointer++;
            if(pointer >= classes.length) {
                pointer = 0 
            }
            $(classes[pointer]).fadeIn();
            $(`#${pointer}`).removeClass("myproject__content--hide");
            $.each(classes, function(i, c) {
                if(i != pointer) {
                    $(c).hide();
                    $(`#${i}`).addClass("myproject__content--hide");
                }
            })
        })

        $(".myproject__arrow--left").click(function() {
            pointer--;
            if(pointer < 0) {
                pointer = classes.length - 1;
            }
            $(classes[pointer]).fadeIn();
            $(`#${pointer}`).removeClass("myproject__content--hide");
            $.each(classes, function(i, c) {
                if(i != pointer) {
                    $(c).hide();
                    $(`#${i}`).addClass("myproject__content--hide");
                }
            })
        })
    }
}

export default MyProjectSelector;