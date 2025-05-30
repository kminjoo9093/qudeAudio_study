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

<br><br<br>

### 2. 텍스트 change animation

<img width="700" alt="image" src="https://github.com/user-attachments/assets/d4b4ca38-13bb-45cb-9f09-73dacc24d0a2" />


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

1️⃣ &nbsp; 각 텍스트 요소 모두 grid-column-start, grid-row-start 값을 1로 주어 같은 위치에 위치시키고, opacity 0으로 보이지 않도록 설정한다 <br><br>
2️⃣ &nbsp; 무한반복하는 타임라인을 textAni 변수에 할당한다<br><br>
❗️ &nbsp; repeat: '최초 실행(1회) 이후' 반복되어야 하는 횟수를 지정<br>
&nbsp;&nbsp; 값은 정수여야 하고, -1이면 무한반복<br><br>
3️⃣ &nbsp; 반복문으로 각 텍스트 요소가 차례로 나타나도록 애니메이션을 설정한다<br><br>
4️⃣ &nbsp; yoyo 속성을 true로, 반복 횟수를 지정하는 repeat을 1로 설정한다<br>
❗️ &nbsp; yoyo : 반복 시 되돌아가는 동작 실행을 설정 <br>
&nbsp;&nbsp; repeat과(0이상) 함께 써야 작동한다<br>
&nbsp;&nbsp; repeat만 사용하면 한 방향으로만, yoyo를 같이 사용하면 왔다 갔다 동작이 가능<br>

<br><br><br>

## 3. 카드 애니메이션

<img width="700" alt="image" src="https://github.com/user-attachments/assets/c41f1092-beed-45ce-acc9-7cf1d19822e6" />

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






