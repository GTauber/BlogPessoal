import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: Theme = new Theme()
  listThemes: Theme[]
  
  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      // alert ('You session is over, login again.')
      this.router.navigate(['/enter'])
    }

    this.findAllThemas()
  }

  findAllThemas(){
    this.themeService.getAllTheme().subscribe((resp: Theme[]) => {
      this.listThemes = resp
    })
  }

  register(){
    this.themeService.postTheme(this.theme).subscribe((resp: Theme)=>{
      this.theme = resp
      alert('Theme created!')
      this.theme = new Theme()
    })
  }

}
