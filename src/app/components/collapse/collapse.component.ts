import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  @Input() target = ''
  @Input() customClass = ''

  constructor() {}

  ngOnInit(): void {
  }

  isId(target: string) {
    return target[0] && target[0] === '#'
  }

}
