const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

// Shery.mouseFollower();
// Shery.makeMagnet(".magnet-target");

Shery.mouseFollower();
Shery.makeMagnet(".magnet-target");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./asstes/video/0.mp4", "./asstes/video/2.mp4", "../asstes/video/3.mp4"],
});


Shery.hoverWithMediaCircle("#page1 .container", {
    videos: ["./asstes/video/0.mp4", "./asstes/video/2.mp4", "../asstes/video/3.mp4"],
  });


  
