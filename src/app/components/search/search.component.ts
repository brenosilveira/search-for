import { Component, OnInit } from '@angular/core';
import { Result } from '../../shared/result.model';
import { RESULT } from '../../pages/result/result-mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public results: Result[] = RESULT
  public resultSearch: any

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(termSearch: string) {
  this.results.map((res) => {
    if(termSearch.toLowerCase() === res.title) {
        this.router.navigate(['/result', res.id])
        this.resultSearch = res
      }
    })
  }
}
