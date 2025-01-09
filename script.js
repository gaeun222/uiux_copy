console.clear();

// ==== 김태균 ====
function Menu__init() {
  $("nav>ul>li").mouseover(function () {
    $(".sub-menu, .menuBg").stop().slideDown();
  });
  $("nav>ul>li").mouseleave(function () {
    $(".sub-menu, .menuBg").stop().slideUp();
  });
}

// popup
function Popup__init() {
  $(".l-popup__button--close").click(function () {
    $(".l-popup__buttons").hide();
  });
}

function Icon__init() {
  $(".icon").click(function () {
    if ($(".icon").hasClass("openmenu")) {
      $(".icon").removeClass("openmenu");
    } else {
      $(".icon").addClass("openmenu");
    }
  });
  const icon = document.getElementById("menuIcon");
  const menu = document.getElementById("all-menu");

  // 아이콘 클릭 이벤트
  icon.addEventListener("click", () => {
    menu.classList.toggle("active"); // 메뉴 클래스 토글
  });
}

function this_lang__init() {
  $(".head_top .links .lang .this_lang a").on("click", function (e) {
    e.preventDefault(); // 기본 동작(링크 이동) 방지

    // 부모 요소 '.lang'에 'on' 클래스 토글
    const $lang = $(this).closest(".lang");
    $lang.toggleClass("on");

    // 다른 언어 선택 메뉴의 활성화 상태 해제 (옵션)
    $(".head_top .links .lang").not($lang).removeClass("on");
  });

  // 페이지 외부 클릭 시 'on' 클래스 제거
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".head_top .links .lang").length) {
      $(".head_top .links .lang").removeClass("on");
    }
  });

  let isExpanded = false; // 상태를 저장하는 변수

  $(".lang").on("click", function () {
    if (isExpanded) {
      // 높이를 줄이기
      $(this).animate({ height: "21px" }, 300);
    } else {
      // 높이를 늘리기
      $(this).animate({ height: "35px" }, 300);
    }
    isExpanded = !isExpanded; // 상태 반전
  });
}

Menu__init();
Popup__init();
Icon__init();
this_lang__init();

// ==== 김가은 ====
// best product 탭
// 예제 검색하여 적용시켰습니다.
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
   
    e.preventDefault();

    tabContent.forEach((content) => {
   
      content.classList.remove("active");
    });

    tabItem.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});

//  스와이퍼
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 6.7,
      spaceBetween: 18,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


// === 최진영 ===
// 패밀리사이트
$(".family-site ul").hide();

function FamilySite__init() {
	$(".family-site").click(function() {
		let $this = $(this);

		if ( $this.hasClass("hover") ) {
			$this.removeClass("hover rotate");
			$this.children("ul").stop().slideUp(300);
			$this.removeClass("on");
		} else {
			$this.addClass("hover rotate");
			$this.children("ul").stop().slideDown(300);
			$this.addClass("on");
		}
	});
}

FamilySite__init();