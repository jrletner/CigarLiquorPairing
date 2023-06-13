import { Component, OnInit } from '@angular/core';
import { CigarService } from '../services/cigar.service';

@Component({
  selector: 'app-cigar',
  templateUrl: './cigar.component.html',
  styleUrls: ['./cigar.component.scss'],
})
export class CigarComponent implements OnInit {
  cigars: any = [];
  constructor(private cigarService: CigarService) {}

  ngOnInit(): void {
    this.cigarService.fetchCigars().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.cigars = res.payload.cigar;
      }
    });
  }
}
