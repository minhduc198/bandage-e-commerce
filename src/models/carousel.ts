class Carousel {
  slideShow: HTMLElement | null;
  slides: NodeListOf<HTMLElement> | null;
  chevronRight;
  chevronLeft;
  clickSlide: NodeListOf<HTMLElement>;

  constructor() {
    this.slideShow = document.querySelector('.list');
    this.slides = document.querySelectorAll('.slide');
    this.chevronRight = document.querySelector('.bx-chevron-right');
    this.chevronLeft = document.querySelector('.bx-chevron-left');
    this.clickSlide = document.querySelectorAll('.click-slide');
  }

  onShowSlide() {
    if (this.slides) {
      //
      let current = 0;
      let numberOfSlide = this.slides.length - 2;
      this.clickSlide[current].style.opacity = '0.8';

      const handleSlideShow = (): void => {
        current++;
        this.clickSlide[current - 1].style.opacity = '0.4';

        if (current > numberOfSlide) {
          current = 0;
        }

        this.clickSlide[current].style.opacity = '0.8';

        const offsetX = -1440 * current;

        if (this.slideShow) {
          this.slideShow.style.transform = `translateX(${offsetX}px)`;
        }
      };

      let handleEventSlideShow = setInterval(handleSlideShow, 4000);
      //

      this.chevronRight?.addEventListener('click', () => {
        clearInterval(handleEventSlideShow);
        current++;
        this.clickSlide[current - 1].style.opacity = '0.4';

        if (current > numberOfSlide) {
          current = 0;
        }

        this.clickSlide[current].style.opacity = '0.8';

        if (this.slideShow) {
          this.slideShow.style.transform = `translateX(${-1440 * current}px)`;
        }
        handleEventSlideShow = setInterval(handleSlideShow, 4000);
      });

      //

      this.chevronLeft?.addEventListener('click', () => {
        clearInterval(handleEventSlideShow);
        this.clickSlide[current].style.opacity = '0.4';
        current--;

        if (current < 0) {
          current = numberOfSlide;
        }

        this.clickSlide[current].style.opacity = '0.8';

        if (this.slideShow) {
          this.slideShow.style.transform = `translateX(${-1440 * current}px)`;
        }
        handleEventSlideShow = setInterval(handleSlideShow, 4000);
      });

      //

      this.clickSlide.forEach((btn, index) => {
        this.clickSlide.forEach((_, index1) => {
          btn.addEventListener('click', () => {
            clearInterval(handleEventSlideShow);
            if (index === index1) {
              current = index1;
              this.clickSlide[index1].style.opacity = '0.8';
              if (this.slideShow) {
                this.slideShow.style.transform = `translateX(${-1440 * current}px)`;
              }
            } else {
              this.clickSlide[index1].style.opacity = '0.4';
            }
            handleEventSlideShow = setInterval(handleSlideShow, 4000);
          });
        });
      });
    }
  }
}

const carousel = new Carousel();
export default carousel;
