/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './custom-components/header/header.component';
import { FooterComponent } from './custom-components/footer/footer.component';
import { ServiceComponent } from './custom-components/service/service.component';
import { WebPortalComponent } from './products/web-portal/web-portal.component';
import { HomePhoneComponent } from './products/home-phone/home-phone.component';
import { MobilePhoneComponent } from './products/mobile-phone/mobile-phone.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsModule } from './about-us/news/news.module';
import { LeadershipTeamComponent } from './about-us/leadership-team/leadership-team.component';
import { SubNavComponent } from './custom-components/sub-nav/sub-nav.component';
import { DefaultDetailPageComponent } from './custom-components/default-detail-page/default-detail-page.component';
import { ContactUsComponent } from './about-us/contact-us/contact-us.component';
import { CareersComponent } from './about-us/careers/careers.component';
import { FaqComponent } from './support/faq/faq.component';
import { SupportComponent } from './support/support.component';
import { UserGuidesComponent } from './support/user-guides/user-guides.component';
import { TalkToConsultantComponent } from './custom-components/talk-to-consultant/talk-to-consultant.component';
import { ProfessionComponent } from './profession/profession.component';
import { FindusComponent } from './about-us/findus/findus.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PressReleaseListComponent } from './about-us/press-releases/press-release-list/press-release-list.component';
import { PressReleaseSingleComponent } from './about-us/press-releases/press-release-single/press-release-single.component';
import { SignmeupComponent } from './signmeup/signmeup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductBrochuresComponent } from './product-brochures/product-brochures.component';
import { RequestDemoComponent } from './custom-components/request-demo/request-demo.component';
import { RequestADemoComponent } from './request-a-demo/request-a-demo.component';
import { LowercasePipe } from './lowercase.pipe';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { SubNavTermsConditionsComponent } from './custom-components/sub-nav-terms-conditions/sub-nav-terms-conditions.component';
import { ServiceAnnouncementsComponent } from './terms-and-conditions/service-announcements/service-announcements.component';
import { PrivacyComponent } from './terms-and-conditions/privacy/privacy.component';
import { TrademarksComponent } from './terms-and-conditions/trademarks/trademarks.component';
import { WordlimitPipe } from './wordlimit.pipe';
import { ThankyouComponent } from './thankyou/thankyou.component';

// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */

  declarations: [ AppComponent, HomeComponent, HeaderComponent, FooterComponent, ServiceComponent, WebPortalComponent, HomePhoneComponent, MobilePhoneComponent, AboutUsComponent,  LeadershipTeamComponent, SubNavComponent, DefaultDetailPageComponent, ContactUsComponent, CareersComponent, FaqComponent, SupportComponent, UserGuidesComponent, TalkToConsultantComponent, ProfessionComponent, FindusComponent, PressReleaseListComponent, PressReleaseSingleComponent, SignmeupComponent, HowItWorksComponent, PageNotFoundComponent, ProductBrochuresComponent, LowercasePipe, TermsAndConditionsComponent, SubNavTermsConditionsComponent, ServiceAnnouncementsComponent, PrivacyComponent, TrademarksComponent, RequestADemoComponent, RequestDemoComponent, WordlimitPipe, ThankyouComponent ],

  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * BrowserModule, HttpModule, and JsonpModule are included
     */
    NewsModule,
    UniversalModule,
    FormsModule
    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule {

}
