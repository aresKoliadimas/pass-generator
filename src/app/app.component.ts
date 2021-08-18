import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
  password = '';
  passwordList: string[] = [];
  nrLetters = 8;
  nrSymbols = 2;
  nrNumbers = 2;

  generatePassword(
    inputLetters: string,
    inputNumbers: string,
    inputSymbols: string
  ) {
    this.password = '';
    this.passwordList = [];

    for (let i = 0; i < +inputLetters; i++) {
      this.passwordList.push(
        this.letters[Math.floor(Math.random() * this.letters.length)]
      );
    }
    for (let i = 0; i < +inputSymbols; i++) {
      this.passwordList.push(
        this.symbols[Math.floor(Math.random() * this.symbols.length)]
      );
    }
    for (let i = 0; i < +inputNumbers; i++) {
      this.passwordList.push(
        this.numbers[Math.floor(Math.random() * this.numbers.length)]
      );
    }

    const generatedPass = this.shuffle(this.passwordList);

    for (let i = 0; i < generatedPass.length; i++) {
      this.password += generatedPass[i];
    }
  }

  shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  onCopy() {
    let dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = this.password;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    const holder = this.password;
    this.password = 'copied to clipboard!';
    setTimeout(() => {
      this.password = holder;
    }, 1000);
  }
}
