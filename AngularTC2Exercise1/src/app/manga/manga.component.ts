import { Component, OnInit } from '@angular/core';
import { Manga } from '../model/Manga';
import {mangaList} from "../MangaList";

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  MangaList: Manga[] = mangaList;

  constructor() { }

  ngOnInit(): void {
  }

}
