const tl =gsap.timeline({
    default:{
        duration:.75,
        ease: "power3.in"
    }
})
tl.fromTo(".hero-box",{
    y:"5%"
},
{
    duration:2,
    y:0
}
)
tl.fromTo(".head",{
    y:"-140%"
},
{

    duration:3,
    y:0
}
)
