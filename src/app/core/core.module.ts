import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';



@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
