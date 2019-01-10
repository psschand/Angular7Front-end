import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  ngOnInit() {
  }

  onClickEng() {
    console.log('eng');
    this.translate.use('en');

  }

  onClickIta() {
    console.log('ita');
    this.translate.use('it');
  }


  @HostListener('window:scroll', ['$event']) onScroll(event) {

    const scrollTop = $(window).scrollTop();
    const headlineHeight = $('.headline').outerHeight() - 75;
    const navOffset = $('nav').offset().top;

    $('.headline').css({
      'opacity': (1 - scrollTop / headlineHeight)
    });

    $('.inner').children().css({
      'transform': 'translateY(' + scrollTop * 0.4 + 'px)'
    });

    if (navOffset > headlineHeight) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  }
}
