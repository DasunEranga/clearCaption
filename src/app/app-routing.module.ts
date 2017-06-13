import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { WebPortalComponent } from "./products/web-portal/web-portal.component";
import { HomePhoneComponent } from "./products/home-phone/home-phone.component";
import { MobilePhoneComponent } from "./products/mobile-phone/mobile-phone.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { LeadershipTeamComponent } from './about-us/leadership-team/leadership-team.component';
import { PressReleaseListComponent } from './about-us/press-releases/press-release-list/press-release-list.component';
import { PressReleaseSingleComponent } from './about-us/press-releases/press-release-single/press-release-single.component';
import { ContactUsComponent } from './about-us/contact-us/contact-us.component';
import { CareersComponent } from './about-us/careers/careers.component';
import { SupportComponent } from './support/support.component';
import { FaqComponent } from './support/faq/faq.component';
import { UserGuidesComponent } from './support/user-guides/user-guides.component';
import { ProfessionComponent } from "./profession/profession.component";
import { NewsListComponent } from './about-us/news/news-list/news-list.component';
import { NewsSingleComponent } from './about-us/news/news-single/news-single.component';
import { FindusComponent } from './about-us/findus/findus.component';
import { SignmeupComponent } from './signmeup/signmeup.component';
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductBrochuresComponent } from "./product-brochures/product-brochures.component";
import { RequestADemoComponent } from "./request-a-demo/request-a-demo.component";
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ServiceAnnouncementsComponent } from './terms-and-conditions/service-announcements/service-announcements.component';
import { PrivacyComponent } from './terms-and-conditions/privacy/privacy.component';
import { TrademarksComponent } from './terms-and-conditions/trademarks/trademarks.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'products/web-portal',
        component: WebPortalComponent,
        pathMatch: 'full'
    },
    {
        path: 'products/home-phone',
        component: HomePhoneComponent,
        pathMatch: 'full'
    },
    {
        path: 'products/mobile-phone',
        component: MobilePhoneComponent,
        pathMatch: 'full'
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
        pathMatch: 'full'
    },
    {
        path: 'sign-me-up',
        component: SignmeupComponent,
        pathMatch: 'full'
    },
    {
        path: 'leadership-team',
        component: LeadershipTeamComponent,
        pathMatch: 'full'
    },
    {
        path: 'news',
        component: NewsListComponent
    },
    {
        path: 'news/:slug',
        component: NewsSingleComponent
    },
    {
        path: 'press-releases',
        component: PressReleaseListComponent,
        pathMatch: 'full'
    },
    {
        path: 'press-releases/:slug',
        component: PressReleaseSingleComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
        pathMatch: 'full'
    },
    {
        path: 'careers',
        component: CareersComponent,
        pathMatch: 'full'
    },
    {
        path: 'support',
        component: SupportComponent,
        pathMatch: 'full'
    },
    {
        path: 'faq',
        component: FaqComponent,
        pathMatch: 'full'
    },
    {
        path: 'user-guides',
        component: UserGuidesComponent,
        pathMatch: 'full'
    },
    {
        path: 'professionals',
        component: ProfessionComponent,
        pathMatch: 'full'
    },
    {
        path: 'find-local-event',
        component: FindusComponent,
        pathMatch: 'full'
    },
    {
        path: 'how-it-works',
        component: HowItWorksComponent,
        pathMatch: 'full'
    },
    {
        path: 'product-brochures',
        component: ProductBrochuresComponent,
        pathMatch: 'full'
    },
    {
        path: 'request-a-demo',
        component: RequestADemoComponent,
        pathMatch: 'full'
    },
    {
        path: 'terms',
        component: TermsAndConditionsComponent,
        pathMatch: 'full'
    },
    {
        path: 'service-announcements',
        component: ServiceAnnouncementsComponent,
        pathMatch: 'full'
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
        pathMatch: 'full'
    },
    {
        path: 'trademarks',
        component: TrademarksComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
