import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
acno=''
psw=''
amnt=''

ac1=''
ps1=''
am1=''
user=''

constructor(private ds:DataService){
  //access username
 this.user=this.ds.currentuser
}
  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)
    if(result){
      alert(`${amnt} credited to your ac the balance is ${result}`)
    }
    else{
      alert('incorrect acno or password')
    }

  }

  withdraw(){
    var ac1=this.ac1
    var ps1=this.ps1
    var am1=this.am1
const result1=this.ds.withdraw(ac1,ps1,am1)
if (result1){
  alert(`${am1} withdraw from your account and the balance is ${result1}`)
}

  }
}
