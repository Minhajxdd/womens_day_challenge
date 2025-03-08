export const landingMain = `
<section class="bg-white text-gray-900 overflow-hidden relative mt-[-30px]">
  <!-- Enhanced animated background elements -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-pink-200 animate-pulse"></div>
    <div class="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-red-100 animate-ping" style="animation-duration: 8s"></div>
    <div class="absolute bottom-10 left-1/4 w-32 h-32 rounded-full bg-purple-100 animate-bounce" style="animation-duration: 6s"></div>
    <div class="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-pink-100 animate-pulse" style="animation-duration: 4s"></div>
    <div class="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-red-50 animate-spin" style="animation-duration: 10s"></div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative z-10">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl transition-all duration-700 hover:scale-105 animate-fadeIn"
        style="animation-duration: 1.5s"
      >
        Celebrating Women Who Inspire
        <span class="sm:block animate-slideUp" style="animation-delay: 0.5s"> Empowering Change Every Day </span>
      </h1>
      
      <p class="mx-auto mt-6 max-w-2xl text-xl text-gray-600 transition-all duration-500 hover:text-gray-800 animate-fadeIn" style="animation-delay: 0.8s">
        Honoring the strength, resilience, and achievements of women who transform our world through leadership, innovation, and compassion.
      </p>
      

    </div>
  </div>

  <style>
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes slideUp {
      0% { transform: translateY(20px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    .animate-fadeIn {
      opacity: 0;
      animation: fadeIn 1s forwards;
    }
    .animate-slideUp {
      opacity: 0;
      animation: slideUp 1s forwards;
    }
  </style>
</section>
`


{/* <div class="mt-10 flex flex-wrap justify-center gap-8">
<a
  class="block w-full md:w-64 rounded-lg border-none bg-gradient-to-r from-pink-500 to-red-500 px-10 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-pink-600 hover:to-red-600 focus:outline-none animate-fadeIn"
  style="animation-delay: 1.2s"
  href="#"
>
  Join Our Movement
</a>
<a
  class="block w-full md:w-64 rounded-lg bg-transparent px-10 py-4 text-base font-medium text-pink-600 transition-all duration-300 hover:text-pink-800 hover:underline hover:scale-105 focus:outline-none animate-fadeIn"
  style="animation-delay: 1.5s"
  href="#"
>
  Discover Stories
</a>
</div> */}