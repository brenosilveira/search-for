import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../shared/result.model';
import { RESULT } from './result-mock';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public results: Result[] = RESULT

  public resultCompare: any

  public finalResult: any

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.resultCompare = res.id
      this.results.map((res) => {
        if(this.resultCompare === res.id) {
          this.finalResult = res
        }
      })
    })
  }
}
