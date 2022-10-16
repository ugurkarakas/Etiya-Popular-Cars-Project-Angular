import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/shared/services/base.service';
import { LikedModel } from 'src/shared/models/LikedModel';
import { CarsModel } from 'src/shared/models/CarsModel';
import { Observable, of, switchMap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { AtomLinkComponent } from '../atom/atom-link/atom-link.component';
import * as moment from 'moment';

export interface Post {
  content: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  Liked!: LikedModel;
  Array!: Observable<CarsModel[]>;
  clickEvent = false;
  constructor(private base: BaseService, private toastService: HotToastService) {}

  ngOnInit() {
    this.getContent();
  }

  getContent() {
    this.Array = this.base.httpGet<CarsModel>('/posts').pipe(
      switchMap((res: CarsModel[]) => {
        const firstCar = Math.floor(Math.random() * (res.length -1))+1;
        const secondCar = Math.floor(Math.random() * (res.length -1))+1;     
       return of(res.filter(item => item.id == firstCar || item.id == secondCar))
      })
    );
  }

  postContent(item: any) {
    // moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    this.base
      .httpPost(
        {
          date: moment(new Date).format("YYYY-MM-DD"),
          postsId: item.id,
        },
        '/likedPost'
      )
      .subscribe((item) => this.showToast());
      this.clickEvent = true;
  }
  clickBtn(){
    this.clickEvent = false;
    this.getContent();
  }
  showToast() {
    this.toastService.success('İşlem Başarılı', {
      position:'bottom-right'
    })
  }
}
