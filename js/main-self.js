document.addEventListener("DOMContentLoaded", (event) => {
  // menuOpen 클릭
  document.querySelector(".menuOpen").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
  });

  gsap.registerPlugin(ScrollTrigger);

  // visual logo falling ani
  gsap.timeline({
    scrollTrigger: {
      trigger: '.logoWrap',
      start: '100% 100%',
      end: '100% 0%',
      scrub: 1,
      // markers: true
    }
  })
  .to('.logoWrap #j', {x:-30, y:200, rotate:20, ease:'none', duration:5}, 0)
  .to('.logoWrap #y', {x:-10, y:350, rotate:-10, ease:'none', duration:5}, 0)
  .to('.logoWrap #o', {x:0, y:100, rotate:-20, ease:'none', duration:5}, 0)
  .to('.logoWrap #u', {x:30, y:300, rotate:20, ease:'none', duration:5}, 0)
  .to('.logoWrap #n', {x:-30, y:230, rotate:-10, ease:'none', duration:5}, 0)
  .to('.logoWrap #g', {x:-10, y:200, rotate:-30, ease:'none', duration:5}, 0)

  //footer logoWrap
  gsap.timeline({
    scrollTrigger:{
      trigger: 'footer',
      start: '0 100%',
      end: '100% 0',
      scrub: 1
    }
  })
  .to('.logoWrap', {top:'20%', ease:"none", duration:5}, 0)

  //공통 subText 
  gsap.utils.toArray('.subText').forEach((selector)=>{
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '100% 100%',
        end: '100% 100%',
        scrub: 1,
        // markers: true
      }
    })
    .fromTo(selector, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 5, ease:'none'})
  })

  //공통 title > i
  gsap.utils.toArray(".mainTextBox .title i").forEach((selector)=>{
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '100% 100%',
        end: '100% 100%',
        scrub: 1,
        // markers: true
      }
    })
    .fromTo(selector, {y: 150} ,{y: 0, duration: 10, ease: "none"}, 0)
  })

  //con1 textAni
  const textAniItems = document.querySelectorAll('.textAni ul li');
  const textAni = gsap.timeline({repeat: -1});

  for(let i=0; i<textAniItems.length; i++){
    textAni.to(textAniItems[i], {
      opacity: 1,
      x: 0,
      repeat: 1,
      yoyo: true,
      ease: "power4.out",
      duration: 1,
      delay: 0
    })
  }

  //con3 listBox
  gsap.utils.toArray('.con3 .listBox li').forEach((selector, idx)=>{
    gsap.timeline({
      scrollTrigger: {
        trigger : selector,
        start: '30% 50%',
        // markers: true,
        onEnter: ()=>{
          gsap.set(selector, {
            opacity: 0,
            rotateX: '-65deg',
            z: "-300px"
          }),
          gsap.to(selector, {
            opacity: 1,
            rotateX: 0,
            z: 0,
            delay: (idx % 3) * 0.5
          })
        }
      }
    })
  })

  //con4 listBox
  gsap.utils.toArray('.con4 .listBox .box').forEach((selector)=>{
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '0% 20%',
        end: '0% 0%',
        scrub: 1,
        // markers: true
      }
    })
    .to(selector, {
      transform: "scale(0.9) rotateX(-10deg)", 
      transformOrign: "top",
      filter: "brightness(0.5)", 
    }, 0)
  })

  //con5 imgBox
  let listItems = document.querySelectorAll('.con5 .listBox li');
  let imgBox = document.querySelector('.con5 .imgBox');
  let img = imgBox.querySelector('img');

  for(let i=0; i<listItems.length; i++){
    listItems[i].addEventListener('mouseover', ()=>{
      img.src = `images/img${i}.jpg`;
      gsap.set(imgBox, {opacity: 0, transform: 'scale(0)'}),
      gsap.to(imgBox, {opacity: 1, transform: 'scale(1)', duration: 0.3})
    })
    listItems[i].addEventListener('mousemove', (e)=>{
      let imgBoxX = e.pageX + 20;
      let imgBoxY = e.pageY + 20;
      imgBox.style.left = imgBoxX + 'px';
      imgBox.style.top = imgBoxY + 'px';
    })
    listItems[i].addEventListener('mouseout', ()=>{
      gsap.to(imgBox, {scale: 0, opacity: 0, duration: 0.3})
    })
  }

  //loading animation
  const loading = document.querySelector('.loading');
  let rotate = document.querySelectorAll('.rotate');
  let opacity = document.querySelectorAll('.opacity');
  
  setTimeout(()=>{loading.classList.add('loadAni1')}, 0),
  setTimeout(()=>{loading.classList.add('loadAni2')}, 1000),
  setTimeout(()=>loading.classList.remove('loadAni1', 'loadAni2'), 2500),
  setTimeout(()=>{rotate.forEach(el=>{el.classList.add('active')})}, 2500),
  setTimeout(()=>{opacity.forEach((el)=>{el.classList.add('active')})}, 3500)
});
