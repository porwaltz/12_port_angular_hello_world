import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "docs/app/app.component";
import { HeaderComponent } from "docs/app/components/header/header.component";
import { BodyComponent } from "docs/app/components/body/body.component";
import { FooterComponent } from "docs/app/components/footer/footer.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
