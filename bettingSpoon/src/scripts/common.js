// 글자줄임함수 (MetaMask 지갑 ID의 글자수 줄임용 함수입니다.)
// 매개변수 key : 글자수 줄임이 필요한 문구를 넣습니다. 
// frontLength, endLength : 노출이 필요한 처음과 끝지점의 글자수를 선언합니다. 초과하는 문자열은 ...로 생략 표기됩니다.
// ex) wordResize('12345678901234567890', 8, 8) // return : 12345678...34567890
function wordResize(key,frontLength,endLength){
  if(key.length >= frontLength + endLength){
    return key.substring(0,frontLength) + '...' + key.substring(key.length - endLength, key.length);
  } else {
    return key;
  }
}

// GNB 로그인 (GNB의 metamask login 시 임시로 적용된 버튼 함수입니다.)
// 로그인 성공 시 .gnb-login 영역에 버튼을 삽입합니다.
// 버튼 안에는 metamask id 값이 적용되며, wordResize 함수를 통해 "처음8자리 + ... + 끝에서 8자리" 문자열을 리턴하여 표기되도록 설정했습니다.
function setLogin(id){
  const gnbLogin = document.querySelector('.gnb-login');
  gnbLogin.innerHTML = '<button type="button" class="btn-gnb-login" onclick="sampleLogout();">' + wordResize(id, 8, 8) + '</button>';
}

// GNB 로그아웃 (임시로 적용된 로그아웃 함수입니다. 초기 버튼으로 노출되도록 지정되어 있습니다.)
function sampleLogout(){
  const gnbLogin = document.querySelector('.gnb-login');
  gnbLogin.innerHTML = '<button type="button" class="btn-metamask" onclick="setLogin(\'0x72f29ef34139313246a1a4s4f24de372aaf3e0\');">INSTALL METAMASK</button>';
}

// 페이지 스크롤 시 GNB 노출 여부 함수 입니다.
function navScroll() {
  const ScrollChk = window.scrollY || document.documentElement.scrollTop;
  const setScroll = document.querySelector('#root').classList;
  ScrollChk <= 0 ? setScroll.remove('nav-fixed') : setScroll.add('nav-fixed');
}

window.addEventListener('load', function () {
  // GNB active
  // nav의 li > a 요소에 id 값과 pageURL을 비교하여 동일한 문자열이 발견되면 해당 메뉴에 active를 시켜줍니다.
  const pageURL = window.location.href;
  const navList = document.querySelector('nav').querySelectorAll('li');
  navList.forEach(function(item) {
    if(pageURL.indexOf(item.querySelector('a').id) !== -1){
      item.querySelector('a').classList.add('active');
    }
  });
  navScroll();

});

window.addEventListener('scroll', function () {
  navScroll();
});