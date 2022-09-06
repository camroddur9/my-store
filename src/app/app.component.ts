import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'camroddur9';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png'
  btnDisabled = true
  names: string[] = ['Nico', 'Juli', 'Santi']
  newName = ''
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category:'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled
  }

  handleChangeAge(){
    this.age = this.age + 1
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  handleChangeName(event: Event){
    const element = event.target as HTMLInputElement
    console.log(element.value)
    this.name = element.value
  }

  handleAddName(){
    this.names.push(this.newName)
    this.newName = ''
  }

  handleDeleteName(index: number){
    this.names.splice(index,1)
  }
}
