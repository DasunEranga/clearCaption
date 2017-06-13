import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Option } from "./../../services/option/option";
import { OptionService } from "./../../services/option/option.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-talk-to-consultant',
  templateUrl: './talk-to-consultant.component.html',
  styleUrls: ['./talk-to-consultant.component.scss'],
  providers: [OptionService],
  encapsulation: ViewEncapsulation.None
})
export class TalkToConsultantComponent implements OnInit {

  option: Option;

  constructor(
    private optionService : OptionService,
    private router: Router

  ) { }

  getOption(){

    this.optionService.getOption()
    .subscribe(res => {
        this.option = res;
      });
  }

  ngOnInit() {
    this.getOption();
  }
}
