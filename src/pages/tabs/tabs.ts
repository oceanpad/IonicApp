import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';
import { SearchPage } from '../search/search';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MessagePage;
  tab3Root: any = SearchPage;
  tab4Root: any = MePage;

  constructor() {

  }
}
