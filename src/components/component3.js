export const component3 = `
    <section class=" py-24 relative xl:mr-0 lg:mr-5 mr-0 overflow-hidden">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <!-- Decorative elements - updated with feminine theme colors -->
        <div class="absolute inset-0 z-0 opacity-5">
            <div class="absolute top-20 left-20 w-64 h-64 rounded-full bg-pink-100 animate-pulse" style="animation-duration: 6s"></div>
            <div class="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-rose-50 animate-pulse" style="animation-duration: 8s"></div>
        </div>
        
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1 relative z-10">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2 class="text-rose-700 text-4xl font-extrabold font-manrope leading-normal lg:text-start text-center fade-in" style="animation-delay: 0.2s">
                                
                                Marie Curie

                            </h2>
                            <p class="text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center fade-in" style="animation-delay: 0.4s">

                                Marie Curie (1867–1934) was a physicist and chemist who discovered radium and polonium. She won two Nobel Prizes in Physics and Chemistry for her work on radioactivity. Born in Poland, she became the first female professor at the University of Paris. Her discoveries greatly advanced medical treatments and science.
                            
                            </div>
                    </div>
                    
                
                </div>
                
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
                <div class="relative sm:w-[564px] w-full sm:h-[646px] h-full fade-in-right">
                    <div class="absolute top-0 right-0 w-full h-full bg-rose-100 rounded-3xl transform translate-x-3 translate-y-3"></div>
                    <div class="relative w-full h-full bg-white rounded-3xl shadow-lg border border-rose-200 overflow-hidden">
                        <img class="w-full h-full object-cover hover:scale-[1.03] transition-all duration-700 ease-in-out" 
                            src="https://www.sapaviva.com/wp-content/uploads/2017/06/9S.-Marie-Curie-1867-1934-1-1918x1918.jpg" 
                            alt="mariquiry image" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes fadeInLeft {
            0% { transform: translateX(-30px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInRight {
            0% { transform: translateX(40px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        
        .fade-in {
            animation: fadeIn 1.2s forwards ease-out;
            opacity: 0;
        }
        .fade-in-left {
            animation: fadeInLeft 1.2s forwards ease-out;
            opacity: 0;
        }
        .fade-in-right {
            animation: fadeInRight 1.2s forwards ease-out;
            opacity: 0;
        }
        .fade-in-up {
            animation: fadeInUp 1.2s forwards ease-out;
            opacity: 0;
        }

        /* Intersection Observer Animation Classes */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>

    <script>
        // Improved scroll animation with better timing
        document.addEventListener('DOMContentLoaded', function() {
            // Apply initial animations
            setTimeout(() => {
                document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up').forEach(el => {
                    el.style.animationPlayState = 'running';
                });
            }, 100);
            
            // Scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // Apply to all elements with reveal class
            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
            
            // Add reveal class to elements dynamically on page load
            setTimeout(() => {
                const animatedElements = document.querySelectorAll('.section-content');
                animatedElements.forEach((el, index) => {
                    el.classList.add('reveal');
                    el.style.transitionDelay = \`\${index * 0.15}s\`;
                    observer.observe(el);
                });
            }, 300);
        });
    </script>
</section>
`