# Qude 사이트 클론코딩 

- GSAP을 활용에 중점을 둔 인터랙티브 웹 클론코딩 사이트
- J.Young 강의를 통해 GSAP의 기본 개념과 활용법을 학습한 후 재구현

<br><br>
link: 
<br><br>
<img width="700" alt="image" src="https://github.com/user-attachments/assets/ea561204-c4c6-48f2-8ed4-bc4952da7cb0" />
<br><br>

## ☝️ &nbsp; 목표
GSAP의 scrollTrigger를 활용한 스크롤 애니메이션 효과 구현 방법 학습과 적용

<br><br><br>

## 🛠 &nbsp; 사용 스킬
- HTML
- CSS
- JAVASCRIPT
- GSAP

<br><br><br>

## 🎨 &nbsp; GSAP 적용 및 주요 스타일

### 1. 로고 이미지 falling animation
<br>

<img width="500" alt="image" src="https://github.com/user-attachments/assets/42255f31-f480-4913-88ad-ec232f8c0a4d" />
<br>

```js
gsap.timeline({
    scrollTrigger: {
      trigger: '.logoWrap',
      start: '100% 100%',
      end: '100% 0%',
      scrub: 1,
    }
  })
  .to('.logoWrap #j', {x:-30, y:200, rotate:20, ease:'none', duration:5}, 0)
  .to('.logoWrap #y', {x:-10, y:350, rotate:-10, ease:'none', duration:5}, 0)
  .to('.logoWrap #o', {x:0, y:100, rotate:-20, ease:'none', duration:5}, 0)
  .to('.logoWrap #u', {x:30, y:300, rotate:20, ease:'none', duration:5}, 0)
  .to('.logoWrap #n', {x:-30, y:230, rotate:-10, ease:'none', duration:5}, 0)
  .to('.logoWrap #g', {x:-10, y:200, rotate:-30, ease:'none', duration:5}, 0)

```

<br>

1️⃣ &nbsp; 타임라인을 생성해 여러 애니메이션을 시간순으로 정의하고, 공통된 scrollTriger 설정을 공유, 관리하도록 한다<br><br>
2️⃣ &nbsp; 애니메이션 생성 메서드 to()를 사용해 각 로고 요소의 목표 위치(x,y), 회전률(rotate), 이징(ease), 지속시간(duration)을 설정한다<br>
&nbsp;&nbsp;&nbsp; (끝에 숫자 0은 모든 애니메이션이 시간차없이 동시에 동작하도록 한 설정)<br><br>
❗️&nbsp;  scrub : 스크롤 연동방식 설정으로 값은 true나 숫자(1 ~ 3)<br>
&nbsp; &nbsp; true는 바로 실행되어 비교적 자연스럽지가 않고, 숫자는 값이 클수록 더 부드럽고 자연스럽게 실행된다<br><br>

<br><br><br>
<hr>

### 2. 텍스트 change animation


<img width="700" alt="image" src="https://github.com/user-attachments/assets/d4b4ca38-13bb-45cb-9f09-73dacc24d0a2" />
<br>

[ CSS ]
```css
.textAni ul{
  display: grid;
  max-width: 800px;
}
.textAni ul li{
  grid-column-start: 1;
  grid-row-start: 1;
  font-size: 60px;
  text-transform: uppercase;
  transform: translateX(30px);
  opacity: 0;
}
```

[ JS ]
```js
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
```
<br>

1️⃣ &nbsp; 각 텍스트 요소 모두 grid-column-start, grid-row-start 값을 1로 주어 같은 위치에 위치시키고, opacity 0으로 보이지 않도록 설정한다 <br><br>
2️⃣ &nbsp; 무한 반복하는 타임라인을 textAni 변수에 할당한다<br>
❗️ &nbsp; repeat: '최초 실행(1회) 이후' 반복되어야 하는 횟수를 지정하는 속성. 값은 정수여야 하고, -1이면 무한반복<br><br>
3️⃣ &nbsp; 반복문으로 각 텍스트 요소가 차례로 나타나도록 애니메이션을 설정한다<br><br>
4️⃣ &nbsp; yoyo 속성을 true로, 반복 횟수를 지정하는 repeat을 1로 설정한다<br>
❗️ &nbsp; yoyo : 반복 시 되돌아가는 동작 실행을 설정 <br>
&nbsp;&nbsp; repeat과(0이상) 함께 써야 작동한다<br>
&nbsp;&nbsp; repeat만 사용하면 한 방향으로만, yoyo를 같이 사용하면 왔다 갔다 동작이 가능<br>

<br><br><br>
<hr>

### 3. 카드 애니메이션

<img width="700" alt="image" src="https://github.com/user-attachments/assets/c41f1092-beed-45ce-acc9-7cf1d19822e6" />
<br>

```css
.con3 .textBox h3{
  font-size: 60px;
  font-weight: normal;
  line-height: 1;
  position: sticky;
  position: -webkit-sticky;
  top: 50%;
}
.con3 .listBox{
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 50px;
  perspective: 900px;
}
```

```js
  gsap.utils.toArray('.con3 .listBox li').forEach((selector, idx)=>{
    gsap.timeline({
      scrollTrigger: {
        trigger : selector,
        start: '30% 50%',
        markers: true,
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
```
<br>
1️⃣ &nbsp; 유틸리티함수를 이용해 카드 요소들('.con3 .listBox li')을 배열로 만들고, forEach문으로 각 요소에 접근한다 <br><br>
2️⃣ &nbsp; onEnter 콜백 함수로 카드의 입체감을 표현하는 애니메이션을 설정한다 <br>
❗️ &nbsp; z, rotateX 관련해 원근감을 살리기 위해서는 부모요소에(.listBox) perspective 속성을 줘야 한다<br>
❗️ &nbsp; gsap.timeline().to() 방식 대신 콜백을 사용한 이유는 스크롤 진입 시 1회만 실행되는 단순한 애니메이션이기 때문이며,
복잡한 시간 제어나 반복이 필요하지 않기 때문 <br><br>
3️⃣ &nbsp; 각 요소의 인덱스를 활용해 애니메이션 딜레이를 준다<br><br>

<br><br><br>
<hr>

### 4. 박스 flip 효과

<img width="700" alt="image" src="https://github.com/user-attachments/assets/d0f94699-9400-4f63-9796-fda7159ae2f8" />
<br>

```css
.con4 .listBox{
  margin: 100px 0;
  perspective: 900px;
}
.con4 .listBox .box{
    . . .
  position: sticky;
  position: -webkit-sticky;
  top: 10%;
  filter: brightness(1);
}
```

```js
  //con4 listBox
  gsap.utils.toArray('.con4 .listBox .box').forEach((selector)=>{
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: '0% 20%',
        end: '0% 0%',
        scrub: 1,
      }
    })
    .to(selector, {
      transform: "scale(0.9) rotateX(-10deg)", 
      transformOrign: "top",
      filter: "brightness(0.5)", 
    }, 0)
  })
```
<br>

1️⃣ &nbsp; sticky로 각 박스를 특정 위치에서 고정시키도록 설정하고, 부모요소에 perspective 값 설정 <br><br>
2️⃣ &nbsp; 유틸리티 함수, 반복문 사용으로 각 박스에 접근하여 박스의 top이 뷰포트 20%지점에 도달하면 크기, 원근감, 밝기가 변하도록 설정<br><br>

<br><br><br>
<hr>

### 5. 마우스 오버 시 관련 이미지 나타나기

<img width="700" alt="image" src="https://github.com/user-attachments/assets/594bdbfc-30a1-475a-8d43-224963881d3e" />
<br>

[ HTML ]
```html
  <ul class="listBox">
    . . .
  </ul>
  <div class="imgBox box">
    <img src="images/img0.jpg" alt="">
  </div>
```

[ CSS ]
```css
.con5 .imgBox{
  width: 350px;
  transform: scale(0);
  opacity: 0;
  position: absolute;
  z-index: 1000;
}
.con5 .imgBox img{
  width: 100%;
}
```

[ JS ]
```js
  //con5 imgBox
  let listItems = document.querySelectorAll('.con5 .listBox li');
  let imgBox = document.querySelector('.con5 .imgBox');
  let img = imgBox.querySelector('img');

  for(let i=0; i<listItems.length; i++){
    //이미지 나타나기
    listItems[i].addEventListener('mouseover', ()=>{
      img.src = `images/img${i}.jpg`;
      gsap.set(imgBox, {opacity: 0, transform: 'scale(0)'}),
      gsap.to(imgBox, {opacity: 1, transform: 'scale(1)', duration: 0.3})
    })
    //이미지 이동
    listItems[i].addEventListener('mousemove', (e)=>{
      let imgBoxX = e.pageX + 20;
      let imgBoxY = e.pageY + 20;
      imgBox.style.left = imgBoxX + 'px';
      imgBox.style.top = imgBoxY + 'px';
    })
    //이미지 사라지기
    listItems[i].addEventListener('mouseout', ()=>{
      gsap.to(imgBox, {scale: 0, opacity: 0, duration: 0.3})
    })
  }
```
<br>

1️⃣ &nbsp; imgBox를 따로 마크업해서 position absolute로 띄워준다 <br><br>
2️⃣ &nbsp; 이미지 저장명을 리스트 인덱스와 연관시켜 mouseover되면 동적으로 업데이트되도록 하고, <br>
&nbsp;&nbsp; set(), to() 메서드로 imgBox가 나타나는 애니메이션을 설정한다<br><br>
3️⃣ &nbsp; 마우스가 움직이면 이미지가 따라오도록 현재 마우스 위치를 이용해서 imgBox의 left, top 값을 설정한다 <br>
❗️&nbsp;  pageX/Y는 스크롤을 포함한 문서 전체를 기준으로 한 마우스의 위치<br><br>
5️⃣ &nbsp; mouseout일때는 다시 imgBox가 사라지는 애니메이션을 설정한다<br><br>

<br><br><br>

## 📌 &nbsp; 회고 및 배운 점 정리

1️⃣    타임라인으로 애니메이션의 흐름을 체계적으로 구성하고 정밀하게 제어하기<br><br>
2️⃣    유틸리티 함수로 gsap을 좀 더 폭넓게 사용하기 <br><br>
3️⃣    grid-column-start, grid-row-start 활용으로 같은 지점에 위치 시키기<br><br>
4️⃣    마우스 위치 관련 속성 pageX/Y로 다른 요소 위치 부여하기<br><br>
❗️    더 다양한 효과 구현을 위해 gsap메서드, 콜백함수활용 등에 대한 더욱 많은 학습이 필요함을 느꼈다<br><br>

