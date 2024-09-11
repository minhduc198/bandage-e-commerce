class Video {
  private video: HTMLVideoElement | null;
  private btnPlayVideo: HTMLElement | null;

  constructor() {
    this.video = document.querySelector("#video");
    this.btnPlayVideo = document.querySelector("#btn-play-video");
  }

  togglePlayBtn() {
    this.video?.addEventListener("click", () => {
      this.btnPlayVideo?.classList.add("toggle-play");

      setTimeout(() => {
        this.btnPlayVideo?.classList.remove("toggle-play");
      }, 1000);
    });
  }

  playVideo() {
    this.btnPlayVideo?.addEventListener("click", () => {
      if (this.video?.paused == true) {
        this.video?.play();
      } else {
        this.video?.pause();
      }
    });
  }
}

const video = new Video();
export default video;
