import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DemoApplicationSharedModule } from 'app/shared/shared.module';
import { DemoApplicationCoreModule } from 'app/core/core.module';
import { DemoApplicationAppRoutingModule } from './app-routing.module';
import { DemoApplicationHomeModule } from './home/home.module';
import { DemoApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DemoApplicationSharedModule,
    DemoApplicationCoreModule,
    DemoApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DemoApplicationEntityModule,
    DemoApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class DemoApplicationAppModule {}
