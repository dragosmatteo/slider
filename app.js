const dots = document.querySelectorAll(".dot");
const testimonials = document.querySelectorAll(".testimonial");

testimonials.forEach((testimonial) => {
    dots.forEach(function(btn){
        btn.addEventListener('click',(e) => {
            e.preventDefault();
            const dot = e.currentTarget.dataset.id;
            console.log(dot);
            if(dot === "dot1"){
                console.log("Dot1");
                if(testimonial.classList.contains(dot)){
                    testimonial.classList.add('active');
                    // dot.classList.add('activee');

                    testimonial.nextElementSibling.classList.remove('active');
                    testimonial.nextElementSibling.nextElementSibling.classList.remove('active');

                    // dot.nextElementSibling.classList.remove('activee');
                    // dot.nextElementSibling.nextElementSibling.classList.remove('activee');
                }
            } 
            if(dot === "dot2"){
                console.log("Dot2");
                if(testimonial.classList.contains(dot)){
                    testimonial.classList.add('active');
                    // dot.classList.add('activee');

                    testimonial.previousElementSibling.classList.remove('active');
                    testimonial.nextElementSibling.classList.remove('active');

                    // dot.previousElementSibling.classList.remove('activee');
                    // dot.nextElementSibling.classList.remove('activee');
                }
            }
            if(dot === "dot3"){
                console.log("Dot3");
                if(testimonial.classList.contains(dot)){
                    testimonial.classList.add('active')
                    // dot.classList.add('activee');

                    testimonial.previousElementSibling.classList.remove('active');
                    testimonial.previousElementSibling.previousElementSibling.classList.remove('active');

                    // dot.previousElementSibling.classList.remove('activee');
                    // dot.previousElementSibling.previousElementSibling.classList.remove('activee');
                }
            }
        });
     });
})