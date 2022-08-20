import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // navigation by boutton 
  /*
  1 - this._router.navigate(['product']
  2 - this._router.navigateByUrl('product')
  3 - this._router.navigate(['product/detail/1'])  pass params in boutton 
  4 - this._router.navigate(['detail'], { queryParams: { pageNum: this.pageNum + 1 }, relativeTo: this._Activatedroute } );
  */


}
