//변수설정
let btnCall = document.querySelector('.btnCall');
let manuMo = document.querySelector('.menuMo');

btnCall.addEventListener('click', (e) => {
	e.preventDefault();
	//a태그가 가지고 있는 기본 이벤트를 막아줌(링크이동금지)
	btnCall.classList.toggle('on');
	manuMo.classList.toggle('on');
});
