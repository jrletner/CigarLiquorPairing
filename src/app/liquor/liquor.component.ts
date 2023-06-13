import { Component } from '@angular/core';
import { LiquorService } from '../services/liquor.service';

@Component({
  selector: 'app-liquor',
  templateUrl: './liquor.component.html',
  styleUrls: ['./liquor.component.scss'],
})
export class LiquorComponent {
  liquors: any = [];
  constructor(private liquorService: LiquorService) {}

  ngOnInit(): void {
    this.liquorService.fetchLiquors().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.liquors = res.payload.liquor;
      }
    });
  }
}
