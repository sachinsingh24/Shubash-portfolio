import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };

  growYourBusiness: any[] = [
    {
      TITLE: 'Struggling',
      MAIN: 'Are You Struggling To Generate Quality Leads In Your Business On Regular Basis?',
    },
    {
      TITLE: 'Worry',
      MAIN: 'Are You Worried About Competition To Deal With Low Price Competitors?',
    },
    {
      TITLE: 'Sale',
      MAIN: 'Are You Worried That Your Business Is Stagnated And No Predictable Sale?',
    },
    {
      TITLE: 'Frustrated',
      MAIN: 'Are You Frustrated That Your Sales Team Is Not Having Enough Training On Sales To Convert Leads Into Sales?',
    },
    {
      TITLE: 'Lack Of Knowledge',
      MAIN: 'Are You Worried About The Lack Of Knowledge On How To Get Your Employees To Give Their Best?',
    },
    {
      TITLE: 'Money Stuck',
      MAIN: 'Are You Worried About The Money Stuck In The Market?',
    },
    {
      TITLE: 'Roadmap',
      MAIN: 'Worried About Not Having The Clear Roadmap On How To Proceed From Here To Take It To Next Level.',
    },
  ];

  worryData: any[] = [
    {
      TITLE: 'Generate Consistent Flow',
      MAIN: 'Happy To Build A System To Generate Consistent Flow Of Leads In Your Business.',
    },
    {
      TITLE: 'Build Your Authority',
      MAIN: 'Build Your Authority In Your Niche So That You Become Ultimate Choice For Your Client.',
    },
    {
      TITLE: 'Robust',
      MAIN: 'Robust  Daily/Weekly/Monthly Plan For Consistent Growth In Your Business.',
    },
    {
      TITLE: 'Your Sales Team',
      MAIN: 'Train Your Sales Team To Handle The Sales Objection And Help Increase Conversion.',
    },
    {
      TITLE: 'Educate',
      MAIN: 'Happy To Educate People Handling So That They Can Produce Productive Result.',
    },
    {
      TITLE: '13 Steps',
      MAIN: 'Follow Easy 13 Steps Which Can Be Applied To Recover The Money From The Market.',
    },
    {
      TITLE: 'Challenges',
      MAIN: 'Overcome Any External Obstacle And Tackle Any Challenges In Your Business By Sharing Proven Strategies.',
    },
  ];

  testimonialsData: any[] = [
    {
      MAIN: 'What seemed stuck when the lockdown started has now gained momentum. I have been able to pick something or the other from each of these sessions and it has only helped me get better personally & professionally.',
      NAME: 'Umesh Soni',
      DESC: 'EVENT MANAGEMENT',
    },
    {
      MAIN: 'Learnings you share are very practical and are based on solutions. Actions you suggest are realistic and doable for small entrepreneurs.',
      NAME: 'Somnath',
      DESC: 'CERTIFIED STOCK BROKER',
    },
    {
      MAIN: "I've been moving my business to the next level ever since I've been attending the Business Growth Mastermind sessions and I am almost at the verge of completing my business model by the end of this month.",
      NAME: 'Jadhav',
      DESC: 'BUSINESS OWNER',
    },
  ];

  onClickSocial(socilaType: string) {
    if (socilaType === 'facebook') {
      window.open('https://facebook.com/subhashwangdebusinesscoach', '_blank');
    } else if (socilaType === 'linkedin') {
      window.open('https://www.linkedin.com/in/subhshwangde', '_blank');
    } else if (socilaType === 'instagram') {
      window.open('https://www.instagram.com/subhaway', '_blank');
    } else if (socilaType === 'youtube') {
      window.open('https://www.youtube.com/subhaway', '_blank');
    }
  }
}
