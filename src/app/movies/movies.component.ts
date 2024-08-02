import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';



// interface movieData{
//   title:string;
//   overview:string;
//   vote:number;

// }
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HttpClientModule ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  dataMovies : any;
  imgpath: string="https://image.tmdb.org/t/p/w500/"

  constructor(private _data: DataService){

  }

  ngOnInit(): void {
      this._data.getData().subscribe((res)=>{
        this.dataMovies = res.results
      })
  }

}
