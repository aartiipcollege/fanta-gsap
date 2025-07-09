gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        markers: true
    }
})

tl.to("#fanta", {
    top: "110%",
    left: "5%",
    rotate: 360,
    scale: 0.8,
    duration: 2
}, 'first')

tl.to("#img2", {
    top: "160%",
    left: "25%",
    rotate: 360,
     scale: 0.9,
     duration: 1
}, 'first')

tl.to("#img3", {
    top: "156%",
    left : "80%",
    scale: 0.7,
     duration: 1
}, 'first')

tl.to("#img5", {
    top: "120%",
    left : "85%",
     duration: 1
}, 'first')

tl.to("#img4", {
    top: "120%",
    left : "13%",
    rotate: 230,
     duration: 1
}, 'first')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: "50% 95%",
        end: "50% 50%",
        scrub: true,
        markers: true
    }
})
tl2.to("#fanta", {
    rotate : 360,
    top: "200%",
    left: "30%",
    duration : 3,
},"second");

tl2.from("#coco", {
  rotate : 90,
  top : "110%",
  left: "-100%",
  duration : 2
},"second");
tl2.from("#pepsi", {
  rotate : 90,
  top : "110%",
  left: "100%",
  duration : 2
},"second");