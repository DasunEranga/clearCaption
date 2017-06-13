import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option } from './../../services/option/option';
import { OptionService } from "./../../services/option/option.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [OptionService]
})
export class HeaderComponent implements OnInit {

 option:Option
 currentURL ='';
  constructor(
    private optionService: OptionService,
    private router: Router
  ) {

    this.router.events
        .subscribe(
            (url:any) => {
                url.url.split("/").forEach(element => {
                    if(element!=="" && this.currentURL=="")
                        this.currentURL=element;  
                });
                console.log("route: "+this.currentURL); //<<<---- Root path
            }); 
   }

  getOption(){
    this.optionService
    .getOption()
    .subscribe(
      res=>{
        this.option=res;
    }
    );
  }

  ngOnInit() {
    this.getOption();
  }

}
