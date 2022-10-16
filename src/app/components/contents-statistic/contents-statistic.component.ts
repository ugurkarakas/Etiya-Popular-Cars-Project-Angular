import { Component, OnInit } from '@angular/core';
import {
  filter,
  from,
  groupBy,
  mergeMap,
  Observable,
  of,
  switchMap,
  toArray,
  zip,
} from 'rxjs';
import { CarsModel } from 'src/shared/models/CarsModel';
import { LikedModel } from 'src/shared/models/LikedModel';
import { BaseService } from 'src/shared/services/base.service';
import * as moment from 'moment';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-contents-statistic',
  templateUrl: './contents-statistic.component.html',
  styleUrls: ['./contents-statistic.component.scss'],
})
export class ContentsStatisticComponent implements OnInit {
  constructor(private base: BaseService, private toastService: HotToastService) {}

  PopularCars!: CarsModel[];
  LikedTable!: any[];
  carVote:boolean = true;
  ngOnInit() {
    this.getPopularCars();
  }

  getPopularCars(func?: Function): void {
    this.base.httpGet<LikedModel>('/likedPost').subscribe((res: any) => {
      if (func) {
      res = res.filter(func);
      }
      debugger;
      this.LikedTable = [];
      // @ts-ignore
      from(res).pipe(groupBy((item) => item.postsId), mergeMap((group) => zip(of(group.key), group.pipe(toArray())))).subscribe((output) => {
          this.LikedTable.push(output);
        });
      console.dir(this.LikedTable);

      if(this.LikedTable.length == 0){
        this.carVote = false;
      }
      this.getContent(this.LikedTable);
    });
  }

  monthPopuler() {
    //const month = moment().subtract(1, 'month').format("YYYY-MM-DD");
    // this.getPopularCars((item: any) =>  moment(item.Date).toString() <= month);
    this.showToast();

  }

  weekPopuler() {
    // debugger;
    // const week = moment().subtract(6, 'days').format("YYYY-MM-DD");
    // this.getPopularCars((item: any) =>  moment(item.Date).toString() <= week);

    this.showToast();
  }
  showToast() {
    this.toastService.error('İşlem Tamamlanamadı', {
      position:'top-right'
    })
  }
  dayPopuler() {
    debugger;
    let day = (new Date()).getDate();
    this.getPopularCars((item: any) =>  (new Date(item.date).getDate()) == day);
  }

  getContent(likedTable: any) {
    const ids = likedTable.map((item: any[]) => item[0]);
    this.base
      .httpGet<CarsModel>(`/posts?id=${ids.join('&id=')}`)
      .subscribe((res) => {
        this.PopularCars = res;
        likedTable.forEach((item: (string | any[])[]) => {
          let updateItem = this.PopularCars.find(
            (car: any) => car.id == item[0]
          );
          if (updateItem) {
            let index = this.PopularCars.indexOf(updateItem);
            this.PopularCars[index].likeCount = item[1].length;
          }
        }
        );
        // @tg-ignore
        this.PopularCars.sort((a, b) => b.likeCount - a.likeCount);
        console.dir(this.PopularCars);
      });
  }
}
