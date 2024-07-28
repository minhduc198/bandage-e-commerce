"use strict";
var Menu = /** @class */ (function () {
    function Menu() {
        this.hamburgerMenu = document.querySelector(".hamburger-menu");
        this.menuMobile = document.querySelector(".menu-mobile");
        this.outsideMenu = document.querySelector(".outer");
    }
    Menu.prototype.openMenu = function () {
        var _this = this;
        var _a;
        (_a = this.hamburgerMenu) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var _a, _b;
            (_a = _this.menuMobile) === null || _a === void 0 ? void 0 : _a.classList.remove("-mt-[392px]");
            (_b = _this.menuMobile) === null || _b === void 0 ? void 0 : _b.classList.remove("opacity-0");
        });
    };
    Menu.prototype.closeMenu = function () {
        var _this = this;
        var _a;
        (_a = this.outsideMenu) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var _a, _b;
            (_a = _this.menuMobile) === null || _a === void 0 ? void 0 : _a.classList.add("-mt-[392px]");
            (_b = _this.menuMobile) === null || _b === void 0 ? void 0 : _b.classList.add("opacity-0");
        });
    };
    return Menu;
}());
var menu = new Menu();
menu.openMenu();
menu.closeMenu();
var Slider = /** @class */ (function () {
    function Slider() {
        this.slideShow = document.querySelector(".list");
        this.slides = document.querySelectorAll(".slide");
        this.chevronRight = document.querySelector(".bx-chevron-right");
        this.chevronLeft = document.querySelector(".bx-chevron-left");
        this.clickSlide = document.querySelectorAll(".click-slide");
    }
    Slider.prototype.onShowSlide = function () {
        var _this = this;
        var _a, _b;
        if (this.slides) {
            //
            var current_1 = 0;
            var numberOfSlide_1 = this.slides.length - 2;
            this.clickSlide[current_1].style.opacity = "0.8";
            var handleSlideShow_1 = function () {
                current_1++;
                _this.clickSlide[current_1 - 1].style.opacity = "0.4";
                if (current_1 > numberOfSlide_1) {
                    current_1 = 0;
                }
                _this.clickSlide[current_1].style.opacity = "0.8";
                var offsetX = -1440 * current_1;
                if (_this.slideShow) {
                    _this.slideShow.style.transform = "translateX(".concat(offsetX, "px)");
                }
            };
            var handleEventSlideShow_1 = setInterval(handleSlideShow_1, 4000);
            //
            (_a = this.chevronRight) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                clearInterval(handleEventSlideShow_1);
                current_1++;
                _this.clickSlide[current_1 - 1].style.opacity = "0.4";
                if (current_1 > numberOfSlide_1) {
                    current_1 = 0;
                }
                _this.clickSlide[current_1].style.opacity = "0.8";
                if (_this.slideShow) {
                    _this.slideShow.style.transform = "translateX(".concat(-1440 * current_1, "px)");
                }
                handleEventSlideShow_1 = setInterval(handleSlideShow_1, 4000);
            });
            //
            (_b = this.chevronLeft) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
                clearInterval(handleEventSlideShow_1);
                _this.clickSlide[current_1].style.opacity = "0.4";
                current_1--;
                if (current_1 < 0) {
                    current_1 = numberOfSlide_1;
                }
                _this.clickSlide[current_1].style.opacity = "0.8";
                if (_this.slideShow) {
                    _this.slideShow.style.transform = "translateX(".concat(-1440 * current_1, "px)");
                }
                handleEventSlideShow_1 = setInterval(handleSlideShow_1, 4000);
            });
            //
            this.clickSlide.forEach(function (btn, index) {
                _this.clickSlide.forEach(function (_, index1) {
                    btn.addEventListener("click", function () {
                        clearInterval(handleEventSlideShow_1);
                        if (index === index1) {
                            current_1 = index1;
                            _this.clickSlide[index1].style.opacity = "0.8";
                            if (_this.slideShow) {
                                _this.slideShow.style.transform = "translateX(".concat(-1440 * current_1, "px)");
                            }
                        }
                        else {
                            _this.clickSlide[index1].style.opacity = "0.4";
                        }
                        handleEventSlideShow_1 = setInterval(handleSlideShow_1, 4000);
                    });
                });
            });
        }
    };
    return Slider;
}());
// const slideShow = new Slider();
// slideShow.onShowSlide();
var AboutUsVideo = /** @class */ (function () {
    function AboutUsVideo() {
        this.video = document.querySelector("#video");
        this.btnPlayVideo = document.querySelector("#btn-play-video");
    }
    AboutUsVideo.prototype.togglePlayBtn = function () {
        var _this = this;
        var _a;
        (_a = this.video) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var _a;
            (_a = _this.btnPlayVideo) === null || _a === void 0 ? void 0 : _a.classList.add("toggle-play");
            setTimeout(function () {
                var _a;
                (_a = _this.btnPlayVideo) === null || _a === void 0 ? void 0 : _a.classList.remove("toggle-play");
            }, 1000);
        });
    };
    return AboutUsVideo;
}());
// const aboutUsVideo = new AboutUsVideo();
// aboutUsVideo.playVideo();
// aboutUsVideo.togglePlayBtn();
