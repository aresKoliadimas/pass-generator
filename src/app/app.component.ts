import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  letters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'];
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
  password = ""
  nrLetters = 8
  nrSymbols = 2
  nrNumbers = 2

  generatePassword() {
    this.password = ""

    let passwordList = []
    for (let i = 0; i < this.nrLetters; i++) {
        passwordList.push(this.letters[Math.floor(Math.random() * this.letters.length)])
    }
    for (let i = 0; i < this.nrSymbols; i++) {
      passwordList.push(this.symbols[Math.floor(Math.random() * this.symbols.length)])
    }
    for (let i = 0; i < this.nrNumbers; i++) {
      passwordList.push(this.numbers[Math.floor(Math.random() * this.numbers.length)])
    }
    
    const generatedPass =  this.shuffle(passwordList)

    for (let i = 0; i < generatedPass.length; i++){
      this.password += generatedPass[i]
    }
  }

  shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }  
    return array;
  }

  getNrLetters(event: Event){
    this.nrLetters = +(<HTMLInputElement>event.target).value
  }

  getNrSymbols(event: Event){
    this.nrSymbols = +(<HTMLInputElement>event.target).value
  }

  getNrNumbers(event: Event){
    this.nrNumbers = +(<HTMLInputElement>event.target).value
  }
}
