import { Injectable } from '@angular/core';
import {Song} from "../model/song";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  playlist: Song[] = [
    {
      id: 'wno94CJFRTw',
      name: 'Tilo'
    },
    {
      id: 'HBYirj2c_jw',
      name: 'Deadpool 2 - Take on Me'
    },
    {
      id: 'N6O2ncUKvlg',
      name: 'Nelly - Just A Dream'
    },
    {
      id: 'uelHwf8o7_U',
      name: 'Eminem - Love The Way You Lie ft. Rihanna'
    },
    {
      id: 'WpYeekQkAdc',
      name: 'The Black Eyed Peas - Where Is The Love?'
    }
  ];

  findSongById(id: string | null){
    return this.playlist.find(item => item.id == id);
  }
}
