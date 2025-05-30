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

<img width="1670" alt="image" src="https://github.com/user-attachments/assets/0dcbd00f-3f51-4a61-992f-50d18adbb25d" />




