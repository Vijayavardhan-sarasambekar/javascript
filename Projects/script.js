let rect = document.querySelector("#center")

rect.addEventListener('mousemove',(e)=>{
    let rect_elem=rect.getBoundingClientRect();
    let rect_mouse_pointer=e.clientX-rect_elem.left;

    if(rect_mouse_pointer<rect_elem.width / 2){
        let color=gsap.utils.mapRange(0 , rect_elem.width / 2 , 255 , 0 , rect_mouse_pointer)
        gsap.to(rect,{
            backgroundColor : `rgb(${color},0,0)`
        }); 
    }
    else{
        let color=gsap.utils.mapRange(rect_elem.width / 2 , rect_elem.width , 0 , 255 , rect_mouse_pointer)
        gsap.to(rect,{
            backgroundColor : `rgb(0,0,${color})`
        });
    }
    
});

rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor:"white",
    })
});