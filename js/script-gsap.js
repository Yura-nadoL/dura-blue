// scroll mousemove gsap =============================================================================================================================================================================================================================================================================================================
// scroll ===========================================
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


// отключаем скролл на laptop, mobile, только на ПК
if (ScrollTrigger.isTouch !== 1) {
   ScrollSmoother.create({
      content: '.content', // блок который будет плавать
      inner: '.inner', // в нутреяя оболочка
      smooth: 1.5, // скорость скролла
      effects: true, //эффекты
   })

   // обращаемся к блокам
   // gsap.fromTo('.header', { opacity: 1 }, {
   //    opacity: 0,
   //    scrollTrigger: {
   //       trigger: '.header', // указываем обьект
   //       start: '120', // скакой точки исчезнит
   //       end: '800', //скакой точки появиться
   //       scrub: true, //возвращает обьект
   //    }
   // })

   // обращаемся к блоку left
   // создаем цикл что бы обратится каждому item что бы он выходил 
   // let ItemsL = gsap.utils.toArray('.blog__left .blog__item')

   // ItemsL.forEach(item => {
   //    gsap.fromTo(item, { x: -500, opacity: 0 }, {
   //       opacity: 1, x: 0,
   //       scrollTrigger: {
   //          trigger: item, //указываем обьект цикла
   //          start: '-850', // скакой точки исчезнит
   //          end: '-100', //скакой точки появиться
   //          scrub: true, //возвращает обьект
   //       }
   //    })
   // })
}
