import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CoursePage } from '../pages/course/course';
import { ModulePage } from '../pages/module/module';
import { OverviewPage } from '../pages/overview/overview';

@NgModule({
  declarations: [
    MyApp,
    OverviewPage,
    ModulePage,
    CoursePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OverviewPage,
    ModulePage,
    CoursePage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
