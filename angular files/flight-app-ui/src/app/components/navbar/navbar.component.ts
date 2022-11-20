import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ShowSignInBtn = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openLoginPopup() {
    const dialogRef = this.dialog.open(AdminloginComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.ShowSignInBtn = false;
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
