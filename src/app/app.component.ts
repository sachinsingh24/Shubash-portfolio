import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  isFormSubmit: Boolean = false;

  isPopup: boolean = false;
  contactForm!: FormGroup;

  growYourBusiness: any[] = [
    {
      ICON: 'fa fa-smile-o',
      TITLE: 'Struggling',
      MAIN: 'Are You Struggling To Generate Quality Leads In Your Business On Regular Basis?',
    },
    {
      ICON: 'fa fa-smile-o',
      TITLE: 'Worry',
      MAIN: 'Are You Worried About Competition To Deal With Low Price Competitors?',
    },
    {
      ICON: 'fa fa-smile-o',
      TITLE: 'Sale',
      MAIN: 'Are You Worried That Your Business Is Stagnated And No Predictable Sale?',
    },
    {
      ICON: 'fa fa-smile-o',
      TITLE: 'Frustrated',
      MAIN: 'Are You Frustrated That Your Sales Team Is Not Having Enough Training On Sales To Convert Leads Into Sales?',
    },
    {
      ICON: 'fa fa-smile-o',
      TITLE: 'Lack Of Knowledge',
      MAIN: 'Are You Worried About The Lack Of Knowledge On How To Get Your Employees To Give Their Best?',
    },
    {
      ICON: 'fa fa-smile-o',
      TITLE: 'Money Stuck',
      MAIN: 'Are You Worried About The Money Stuck In The Market?',
    },
    {
      ICON: 'fa fa-smile-o',
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
      MAIN: "I've been moving my business to the next level ever since I've been attending the Business Growth Mastermind sessions and I am almost at the verge of completing my business model by the end of this month.",
      NAME: 'Jadhav',
      DESC: 'BUSINESS OWNER',
    },
    {
      MAIN: 'Learnings you share are very practical and are based on solutions. Actions you suggest are realistic and doable for small entrepreneurs.',
      NAME: 'Somnath',
      DESC: 'CERTIFIED STOCK BROKER',
    },
  ];

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  get formValidationStateContactUs() {
    return this.contactForm.controls;
  }

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

  openPopup() {
    this.isPopup = true;
  }
  closePopup() {
    this.isPopup = false;
  }
  submitForm() {
    this.isFormSubmit = true;
    if (this.contactForm.valid) {
      // console.log(this.contactForm.value);
      // handle the form submission logic here

      // Replace with your actual EmailJS service ID and template ID
      const serviceID = 'subhashwangde';
      const templateID = 'subhashTemplateID';

      // Replace with your actual EmailJS user ID
      const userID = 'P9p7sPU9uoAC_5a6X';

      // Format the data to be sent via EmailJS
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        from_mobile: this.contactForm.value.mobile,
      };

      // Send the email using EmailJS
      emailjs.send(serviceID, templateID, templateParams, userID).then(
        (response: EmailJSResponseStatus) => {
          // console.log('Email sent successfully:', response);
          alert('Form submitted successfully!');
          this.contactForm.reset();
          // Optionally, show a success message to the user
        },
        (error) => {
          console.error('Error sending email:', error);
          // Optionally, show an error message to the user
        }
      );
      this.closePopup();
    } else {
      // show an error message or handle the form validation errors
      // console.log('Form is not valid');
    }
  }
}
