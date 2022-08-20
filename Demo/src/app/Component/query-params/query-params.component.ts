import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css']
})
export class QueryParamsComponent implements OnInit {
  data: any = { id: "", id1: "", id2: "" }

  constructor(private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    //  this.id=this._Activatedroute.snapshot.paramMap.get("id"); olso can work
    this._Activatedroute.paramMap.subscribe(params => {
      console.log(params)
      this.data.id = params.get('id');
      this.data.id1 = params.get('id1');
      this.data.id2 = params.get('id2');

    });
  }

}
