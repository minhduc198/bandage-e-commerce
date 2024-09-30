import './input.css';
import btn from './models/button';
import carousel from './models/carousel';
import menu from './models/menu';
import video from './models/video';

menu.openMenu();
menu.closeMenu();

carousel.onShowSlide();

video.togglePlayBtn();
btn.onclickBtn();