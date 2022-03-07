// 글자줄임함수 (MetaMask 지갑 ID의 글자수 줄임용 함수입니다.)
// 매개변수 key : 글자수 줄임이 필요한 문구를 넣습니다.
// frontLength, endLength : 노출이 필요한 처음과 끝지점의 글자수를 선언합니다. 초과하는 문자열은 ...로 생략 표기됩니다.
// ex) wordResize('12345678901234567890', 8, 8) // return : 12345678...34567890
function wordResize(key, frontLength, endLength) {
  if (key.length >= frontLength + endLength) {
    return key.substring(0, frontLength) + '...' + key.substring(key.length - endLength, key.length);
  } else {
    return key;
  }
}

// GNB 로그인 (GNB의 metamask login 시 임시로 적용된 버튼 함수입니다.)
// 로그인 성공 시 .gnb-login 영역에 버튼을 삽입합니다.
// 버튼 안에는 metamask id 값이 적용되며, wordResize 함수를 통해 "처음8자리 + ... + 끝에서 8자리" 문자열을 리턴하여 표기되도록 설정했습니다.
function setLogin(id) {
  const gnbLogin = document.querySelector('.gnb-login');
  gnbLogin.innerHTML =
    '<button type="button" class="btn-gnb-login" onclick="sampleLogout();">' + wordResize(id, 8, 8) + '</button>';
}

// GNB 로그아웃 (임시로 적용된 로그아웃 함수입니다. 초기 버튼으로 노출되도록 지정되어 있습니다.)
function sampleLogout() {
  const gnbLogin = document.querySelector('.gnb-login');
  gnbLogin.innerHTML =
    '<button type="button" class="btn-metamask" onclick="setLogin(\'0x72f29ef34139313246a1a4s4f24de372aaf3e0\');">INSTALL METAMASK</button>';
}

// 페이지 스크롤 시 GNB 노출 여부 함수 입니다.
function navScroll() {
  const ScrollChk = window.scrollY || document.documentElement.scrollTop;
  const setScroll = document.querySelector('#root').classList;
  ScrollChk <= 0 ? setScroll.remove('nav-fixed') : setScroll.add('nav-fixed');
}

// 모바일 메뉴 노출 toggle 함수 입니다.
function mobileNavToggle() {
  const headerItem = document.querySelector('header');
  headerItem.classList.value.indexOf('mobile-nav') !== -1
    ? headerItem.classList.remove('mobile-nav')
    : headerItem.classList.add('mobile-nav');
}

// 모달 팝업 호출 시 modalPop(tagName, Boolean); 형태로 함수를 호출합니다.
function modalPop(tagName, modalBoolean) {
  let modalItem = document.querySelector(tagName);
  modalBoolean ? (modalItem.style.display = 'flex') : (modalItem.style.display = 'none');
}

// 모달 알럿 팝업을 띄우는 함수 입니다. 매개변수 comment에 알럿 문구를 입력하여 선언 시 OK 버튼이 노출되는 알럿 입니다. 짧은 문구의 comment 정도만 가능합니다.
// ex) modalAlert('Sorry, Whitelist application is ended.');
function modalAlert(comment, btnText) {
  let commentItem = document.querySelector('.modal-alert-comment');
  let btnClose = document.querySelector('.btn-alert-close');
  commentItem.innerHTML = comment;
  btnClose.innerHTML = btnText !== undefined ? btnText : 'CHECK';
  modalPop('.modal-alert', true);
}

// 영상 노출 팝업 함수입니다. 매개변수로 url(영상URL), popWid(영상 가로길이), popHei(영상 세로높이) 값을 받으며, 길이, 높이 값을 지정하지 않을 시 70rem x 70rem으로 고정됩니다.
// 영상 주소는 공유하기 주소 형태로 들어가야 합니다.
// ex)
// X : https://vimeo.com/673045195
// O : https://player.vimeo.com/video/673045195
function modalPlayer(url, popWid, popHei) {
  let modalContent =
    '<button type="button" class="btn-close" onclick="modalPop(\'.modal-player\', false); document.querySelector(\'.modal-content-player\').innerHTML=\'\';">닫기</button>' +
    '<iframe src="' +
    url +
    '" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';

  document.querySelector('.modal-content-player').innerHTML = modalContent;
  document.querySelector('.modal-content-player').style.width =
    (popWid !== undefined ? Math.floor(popWid / 10) : 70) + 'rem';
  document.querySelector('.modal-content-player').style.height =
    (popHei !== undefined ? Math.floor(popHei / 10) : 70) + 'rem';
  modalPop('.modal-player', true);
}

function playGame(gameName) {
  if (gameName === 'videoPoker') {
    document.querySelector('.game-video-poker').classList.add('active');
    document.getElementById('iframeVideoPoker').src = 'game/videoPoker/index.html';
  }
}
function endGame(gameName) {
  if (gameName === 'videoPoker') {
    document.querySelector('.game-video-poker').classList.remove('active');
    document.getElementById('iframeVideoPoker').src = '';
  }
}
function newWindowGame(gameName) {
  if (gameName === 'videoPoker') {
    document.querySelector('.game-video-poker').classList.remove('active');
    document.getElementById('iframeVideoPoker').src = '';
    window.open(
      'game/videoPoker/index.html',
      'window',
      'location=no, directories=no, resizable=no,status=no,toolbar=no, menubar=no, width=1280, height=720,left=0, top=0, scrollbars=yes'
    );
  }
}

function fullscreen(element) {
  if (document.querySelector(element).requestFullscreen) {
    document.querySelector(element).requestFullscreen();
    document.querySelector(element).classList.add('full-screen');
  }
  if (document.querySelector(element).webkitRequestFullscreen) {
    document.querySelector(element).webkitRequestFullscreen();
    document.querySelector(element).classList.add('full-screen');
  }
  if (document.querySelector(element).mozRequestFullScreen) {
    document.querySelector(element).mozRequestFullScreen();
    document.querySelector(element).classList.add('full-screen');
  }
  if (document.querySelector(element).msRequestFullscreen) {
    document.querySelector(element).msRequestFullscreen();
    document.querySelector(element).classList.add('full-screen');
  }
}

function exitFullScreen(element) {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    document.querySelector(element).classList.remove('full-screen');
  }
  if (document.webkitCancelFullscreen) {
    document.webkitCancelFullscreen();
    document.querySelector(element).classList.remove('full-screen');
  }
  if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    document.querySelector(element).classList.remove('full-screen');
  }
  if (document.msExitFullscreen) {
    document.msExitFullscreen();
    document.querySelector(element).classList.remove('full-screen');
  }
}

window.addEventListener('load', function () {
  // GNB active
  // nav의 li > a 요소에 id 값과 pageURL을 비교하여 동일한 문자열이 발견되면 해당 메뉴에 active를 시켜줍니다.
  const pageURL = window.location.href;
  const navList = document.querySelector('nav').querySelectorAll('li');
  navList.forEach(function (item) {
    if (pageURL.indexOf(item.querySelector('a').id) !== -1) {
      item.querySelector('a').classList.add('active');
    }
  });
  navScroll();
});

window.addEventListener('scroll', function () {
  navScroll();
});
