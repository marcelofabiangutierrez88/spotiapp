import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient )  { }

  getQuery(query : string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD67blThl9-LU3He_tJikLf1un6jZxD8QULDwS-25Rx19WF2r2QPb3V3Io5Ul3TyeV-27mmIZw7s8R1aT8'
    });
    return this.http.get(url, {headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
              .pipe( map ( data=> data['albums'].items));  

  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map (data=>data['artists'].items));

  }
  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
             

  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
           .pipe( map (data=>data['tracks']));
             

  }
}
