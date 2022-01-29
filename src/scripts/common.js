// 유지보수를 고려하여 mintList, gradeDetail 배열의 정보를 추가 및 수정 시 계산식이 적용되도록 처리 하였습니다.
const mintList = [1, 2, 3, 4];
const gradeDetail = [
  {
    gradeName: 'A CLASS',
    price: 100,
    revenue: 12.94747572,
    returnRate: 13,
  },
  {
    gradeName: 'K CLASS',
    price: 10,
    revenue: 1.257754784,
    returnRate: 13,
  },
  {
    gradeName: 'Q CLASS',
    price: 5,
    revenue: 0.616546463,
    returnRate: 12,
  },
  {
    gradeName: 'J CLASS',
    price: 1,
    revenue: 0.123309293,
    returnRate: 12,
  },
  {
    gradeName: '10 CLASS',
    price: 0.2,
    revenue: 0.024661859,
    returnRate: 12,
  },
];

// benefit 영역에 select된 값을 기준으로 수익율 정보를 계산해주는 함수입니다.
function setBenefitInfo() {
  let gradeSelect = document.getElementById('gradeSelect').value;
  let mintSelect = Number(document.getElementById('mintSelect').value);
  let priceBox = document.getElementById('priceBox');
  let returnRateBox = document.getElementById('returnRateBox');
  let revenueBox = document.getElementById('revenueBox');
  let gradeInfoBox = document.getElementById('gradeInfoBox');
  let price = 0;
  revenue = 0;
  returnRate = 0;
  gradeInfo = '';

  if (gradeSelect !== 'default' && mintSelect !== 0) {
    for (let i = 0; i < gradeDetail.length; i++) {
      if (gradeDetail[i].gradeName === gradeSelect) {
        price = gradeDetail[i].price;
        benefit = gradeDetail[i].benefit;
        returnRate = gradeDetail[i].returnRate;
        revenue = gradeDetail[i].revenue;
        gradeInfo = mintSelect + ' ' + gradeDetail[i].gradeName;
      }
    }
    priceBox.innerHTML = Number((price * mintSelect).toFixed(2));
    returnRateBox.innerHTML = returnRate;
    revenueBox.innerHTML = revenue * mintSelect;
    gradeInfoBox.innerHTML = gradeInfo;
  }
}

// whiteList 함수
let qClassMint;
let jClassMint;
let tenClassMint;
function onChangeWhiteList() {
  qClassMint = Number(document.getElementById('qClassMint').value);
  jClassMint = Number(document.getElementById('jClassMint').value);
  tenClassMint = Number(document.getElementById('10ClassMint').value);
}

function checkWhiteList() {
  if (qClassMint && jClassMint && tenClassMint) {
    console.log('전부 입력 됨');
  } else {
    alert('수량을 선택해주세요.');
  }
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

window.addEventListener('load', function () {
  // 페이지 로드 시 mintList, gradeDetail 값을 기준으로 benefit 영역의 selectbox 에 목록을 그려줍니다.
  gradeDetail.forEach(function (data) {
    document.getElementById('gradeSelect').innerHTML +=
      '<option value="' + data.gradeName + '">' + data.gradeName + '</option>';
  });
  mintList.forEach(function (data) {
    document.getElementById('mintSelect').innerHTML +=
      '<option value="' + data + '">' + data + '</option>';
  });
  mintList.forEach(function (data) {
    document.getElementById('qClassMint').innerHTML +=
      '<option value="' + data + '">' + data + '</option>';
  });
  mintList.forEach(function (data) {
    document.getElementById('jClassMint').innerHTML +=
      '<option value="' + data + '">' + data + '</option>';
  });
  mintList.forEach(function (data) {
    document.getElementById('tenClassMint').innerHTML +=
      '<option value="' + data + '">' + data + '</option>';
  });
});

window.addEventListener('scroll', function () {
  navScroll();
});
