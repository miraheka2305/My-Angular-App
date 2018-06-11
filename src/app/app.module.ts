import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MessageListComponent } from "./message-list/message-list.component";
import { MessageContentComponent } from "./message-content/message-content.component";
import { SubjectListComponent } from "./subject-list/subject-list.component";

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageContentComponent,
    SubjectListComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
