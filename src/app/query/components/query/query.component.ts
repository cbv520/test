import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../service/query.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  public fontSize = 20;
  public loading = false;

  constructor(public queryService: QueryService) { }

  ngOnInit(): void {
    document.getElementById('input')?.addEventListener('keydown', function(e) {
      if (e.key == 'Tab') {
        e.preventDefault();
        var target = e.target as any
        var start = target.selectionStart;
        var end = target.selectionEnd;
    
        target.value = target.value.substring(0, start) + "    " + target.value.substring(end);
    
        target.selectionStart =
          target.selectionEnd = start + 4;
      }
    });
  }

  async submit() {
    this.loading = true;
    const delay = (ms:number) => new Promise(res => setTimeout(res, ms));
    await delay(2000);
    this.loading = false;
  }

}
