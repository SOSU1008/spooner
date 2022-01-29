
// 유지보수를 고려하여 mintList, gradeDetail 배열의 정보를 추가 및 수정 시 계산식이 적용되도록 처리 하였습니다.
const mintList = [1, 2, 3, 4];
const gradeDetail =
    [
        {
            "gradeName": "A CLASS",
            "price": 100,
            "revenue": 12.94747572,
            "returnRate": 13
        },
        {
            "gradeName": "K CLASS",
            "price": 10,
            "revenue": 1.257754784,
            "returnRate": 13
        },
        {
            "gradeName": "Q CLASS",
            "price": 5,
            "revenue": 0.616546463,
            "returnRate": 12
        },
        {
            "gradeName": "J CLASS",
            "price": 1,
            "revenue": 0.123309293,
            "returnRate": 12
        },
        {
            "gradeName": "10 CLASS",
            "price": 0.2,
            "revenue": 0.024661859,
            "returnRate": 12
        }
    ];

function setBenefitInfo() {
    let gradeSelect = document.getElementById('gradeSelect').value;
    let mintSelect = Number(document.getElementById('mintSelect').value);
    let priceBox = document.getElementById('priceBox');
    let returnRateBox = document.getElementById('returnRateBox');
    let revenueBox = document.getElementById('revenueBox');
    let gradeInfoBox = document.getElementById('gradeInfoBox');
    let price = 0; revenue = 0; returnRate = 0; gradeInfo = '';

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
    } else {
        priceBox.innerHTML = '-';
        returnRateBox.innerHTML = '-';
        revenueBox.innerHTML = '-';
        gradeInfoBox.innerHTML = '-';
    }
}

function navScroll() {
    const ScrollChk = window.scrollY || document.documentElement.scrollTop;
    const setScroll = document.querySelector('#root').classList;
    ScrollChk <= 0 ? setScroll.remove('nav-fixed') : setScroll.add('nav-fixed');
}

function mobileNavToggle() {
    const headerItem = document.querySelector('header');
    (headerItem.classList.value.indexOf('mobile-nav') !== -1) ? headerItem.classList.remove('mobile-nav') : headerItem.classList.add('mobile-nav');
}

window.addEventListener('scroll', function () {
    navScroll();
    gradeDetail.forEach(function (data) {
        document.getElementById('gradeSelect').innerHTML += '<option value="' + data.gradeName + '">' + data.gradeName + '</option>';
    });
    mintList.forEach(function (data) {
        document.getElementById('mintSelect').innerHTML += '<option value="' + data + '">' + data + '</option>';
    });
});