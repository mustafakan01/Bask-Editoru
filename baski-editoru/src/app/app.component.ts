// app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // standalone: true  // Bu satırı kaldır
})
export class AppComponent {
  title = 'Print Editor';
  paperType = '';
  inputType = '';
  textSettings = { text: '', font: '', size: '', bold: false, italic: false };
  imageSettings = { src: '', x: 0, y: 0 };
  // Diğer değişkenler...

  constructor(private http: HttpClient) { }

  // Kullanıcıdan alınan bilgilerle API'ye POST isteği gönderme
  postToAPI() {
    const data = { /* Kullanıcıdan alınan bilgiler... */ };
    this.http.post('https://pusulaweb.com.tr/api/editor', data).subscribe(response => {
      console.log(response);
    });
  }

  // Diğer fonksiyonlar...
}
