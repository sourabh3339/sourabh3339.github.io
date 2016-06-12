// Code goes here
/*(c) copyright sourabh chouksey
 */
$(document).ready(function() {

    var myUrl = window.location.href;
    var hashTag = myUrl.split('#')[1];
    var divcount = ['one', 'two', 'three', 'four', 'five', 'six'];
    var oneArr =['one-1','one-2','one-3','one-4','one-5','one-6'];
    var twoArr=['two-1','two-2','two-3','two-4','two-5','two-6'];
    var threeArr=['three-1','three-2','three-3','three-4','three-5','three-6'];
    switch (hashTag) {
        case 'one':
            
            for (i in oneArr) {console.log("#" + divcount[i] + "div");
                $("#" + divcount[i]).css({ "background-image": "url(imgs/" + oneArr[i] + ".jpg)" ,"background-position": "initial","background-size": "cover"});
            }
            break;
        case 'two':
            
            
            for (i in oneArr) {console.log("#" + divcount[i] + "div");
                $("#" + divcount[i]).css({ "background-image": "url(imgs/" + twoArr[i] + ".jpg)" ,"background-position": "initial","background-size": "cover"});
            }
            break;
        case 'three':
            
            
            for (i in oneArr) {console.log("#" + divcount[i] + "div");
                $("#" + divcount[i]).css({ "background-image": "url(imgs/" + threeArr[i] + ".jpg)" ,"background-position": "initial","background-size": "cover"});
            }
            break;
    }





    $('div').mouseenter(function(event) {

        console.log(getDir($(this), {
            x: event.pageX,
            y: event.pageY
        }));
        switch (getDir($(this), {
            x: event.pageX,
            y: event.pageY
        })) {
            case 0: //from up
                console.log('from up');
                $(this).children("div").on('animationend', () => {
                    //    $(this).children("div").removeClass("animate-top-in");
                });
                $(this).children("div").removeAttr('class');
                $(this).children("div").addClass('animate-top-in');
                break;
            case 1: //1st quadrant
                console.log('1st quadrant');
                $(this).children("div").on('animationend', () => {
                    //  $(this).children("div").removeClass("animate-right-in");
                });
                $(this).children("div").removeAttr('class');
                $(this).children("div").addClass('animate-right-in');
                break;
            case 2: //from down
                console.log('from down');
                $(this).children("div").on('animationend', () => {
                    //  $(this).children("div").removeClass("animate-up-in");
                });
                $(this).children("div").removeAttr('class');
                $(this).children("div").addClass('animate-up-in');
                break;
            case 3: //second quad
                console.log('second quad');
                $(this).children("div").on('animationend', () => {
                    //  $(this).children("div").removeClass("animate-left-in");
                });
                $(this).children("div").removeAttr('class');
                $(this).children("div").addClass('animate-left-in');

                break;
        }
    }).mouseleave(function(e) {
        var w = $(this).width();
        // h = $(this).height(),
        //  x = event.pageX - $(this).offset().left,
        // y = event.pageY - $(this).offset().top;

        if (event.pageX >= ($(this).offset().left + w) && event.pageY > $(this).offset().top) {
            console.log("right-out-leave");
            $(this).children("div").on('animationend', () => {
                console.log('right out leave');
                //        $(this).children("div").removeClass("animate-left-out");

            });
            $(this).children("div").removeAttr('class');
            $(this).children("div").addClass('animate-left-out');

        } else if (event.pageX <= $(this).offset().left && event.pageY > $(this).offset().top) {
            console.log("left-out-leave");
            $(this).children("div").on('animationend', () => {
                console.log('left out leave');
                //$(this).children("div").removeClass("animate-right-out");

            });
            $(this).children("div").removeAttr('class');
            $(this).children("div").addClass('animate-right-out');

        } else if (event.pageX >= $(this).offset().left && event.pageY < $(this).offset().top) {
            console.log("top-out-leave");
            $(this).children("div").on('animationend', () => {
                console.log('top out leave');
                //$(this).children("div").removeClass("animate-up-out");

            });
            $(this).children("div").removeAttr('class');
            $(this).children("div").addClass('animate-up-out');

        } else {
            console.log('bottom-out-leave');
            $(this).children("div").on('animationend', () => {
                console.log('left out leave');
                //$(this).children("div").removeClass("animate-top-out");

            });
            $(this).children("div").removeAttr('class');
            $(this).children("div").addClass('animate-top-out');
        }

    });

    //reference from stack overflow
    function getDir($el, coordinates) {

        // the width and height of the current div
        var w = $el.width(),
            h = $el.height(),

            // calculate the x and y to get an angle to the center of the div from that x and y.
            // gets the x value relative to the center of the DIV and "normalize" it
            x = (coordinates.x - $el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
            y = (coordinates.y - $el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),

            // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
            // first calculate the angle of the point,
            // add 180 deg to get rid of the negative values
            // divide by 90 to get the quadrant
            // add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
            direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

        return direction;

    }

});
