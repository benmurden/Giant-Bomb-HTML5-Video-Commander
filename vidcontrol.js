$('.av-video-player').keydown(function (e) {
    var vid = $('video')[0];
    if (vid !== undefined) {
        if (e.which === 37) {
            if (e.shiftKey) {
                e.preventDefault();
                medSkipBack(vid);
            } else {
                e.preventDefault();
                smallSkipBack(vid);
            }
        } else if (e.which === 39) {
            if (e.shiftKey) {
                e.preventDefault();
                medSkipForward(vid);
            } else {
                e.preventDefault();
                smallSkipForward(vid);
            }
        }
    }
});

var smallSkipBack = function(vid) {
    var vidNow = vid.currentTime;
    vid.currentTime = vidNow - 10;
};

var smallSkipForward = function (vid) {
    var vidNow = vid.currentTime;
    vid.currentTime = vidNow + 10;
};

var medSkipBack = function (vid) {
    var vidNow = vid.currentTime;
    vid.currentTime = vidNow - 60;
};

var medSkipForward = function (vid) {
    var vidNow = vid.currentTime;
    vid.currentTime = vidNow + 60;
};
