import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";
import {BookModel} from "./book.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  data: BookModel[] = []
  constructor(
    private readonly service: BookService
  ) { }

  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        title: 'Sariq dev',
        description: 'Khudayberdi Tukhtabaev was an Uzbek writer of children\'s stories. he studied at the Department of Philology at the University of Central Asia from 1950 until 1955. He worked for a time as a newspaper journalist, including at Tashkent haqiqati (The Truth of Tashkent) and Qizil O’zbekiston (Red Uzbekistan), and he was the editor of the monthly magazine Guliston. From 1972 until 1977, he worked as chief editor at Yosh Gvardiya (Young Guard) publishing house, and as assistant to the chief editor at Shark Yulduzi (Western Star) newspaper. In those days, he also worked as chief of editing at Yosh Kuch (Young Strength) newspaper.\n' +
          '\n' +
          'To\'xtaboyev began his career as a children\'s writer in 1958. He created the collection of stories Shoshqoloq (Hasty) in 1962, followed by other collections: Yosh Gvardiya (Young Guard), Sir Ochildi (The Secret Revealed), and Sehrli Qolpoqcha (A Magic Hat) (1965). To\'xtaboyev\'s writing was popular throughout Uzbekistan, and many children read his books as part of their school studies.\n' +
          '\n' +
          'To\'xtaboyev worked at the Kamalak publishing house as an editor, and then as lead editor. From 1960 until 1970, his most popular books were translated into other languages.\n',
        publishedYear: 2013
      },
      {
        id: 1,
        title: 'Sariq dev',
        description: 'Khudayberdi Tukhtabaev was an Uzbek writer of children\'s stories. he studied at the Department of Philology at the University of Central Asia from 1950 until 1955. He worked for a time as a newspaper journalist, including at Tashkent haqiqati (The Truth of Tashkent) and Qizil O’zbekiston (Red Uzbekistan), and he was the editor of the monthly magazine Guliston. From 1972 until 1977, he worked as chief editor at Yosh Gvardiya (Young Guard) publishing house, and as assistant to the chief editor at Shark Yulduzi (Western Star) newspaper. In those days, he also worked as chief of editing at Yosh Kuch (Young Strength) newspaper.\n' +
          '\n' +
          'To\'xtaboyev began his career as a children\'s writer in 1958. He created the collection of stories Shoshqoloq (Hasty) in 1962, followed by other collections: Yosh Gvardiya (Young Guard), Sir Ochildi (The Secret Revealed), and Sehrli Qolpoqcha (A Magic Hat) (1965). To\'xtaboyev\'s writing was popular throughout Uzbekistan, and many children read his books as part of their school studies.\n' +
          '\n' +
          'To\'xtaboyev worked at the Kamalak publishing house as an editor, and then as lead editor. From 1960 until 1970, his most popular books were translated into other languages.\n',
        publishedYear: 2013
      },
      {
        id: 1,
        title: 'Sariq dev',
        description: 'Khudayberdi Tukhtabaev was an Uzbek writer of children\'s stories. he studied at the Department of Philology at the University of Central Asia from 1950 until 1955. He worked for a time as a newspaper journalist, including at Tashkent haqiqati (The Truth of Tashkent) and Qizil O’zbekiston (Red Uzbekistan), and he was the editor of the monthly magazine Guliston. From 1972 until 1977, he worked as chief editor at Yosh Gvardiya (Young Guard) publishing house, and as assistant to the chief editor at Shark Yulduzi (Western Star) newspaper. In those days, he also worked as chief of editing at Yosh Kuch (Young Strength) newspaper.\n' +
          '\n' +
          'To\'xtaboyev began his career as a children\'s writer in 1958. He created the collection of stories Shoshqoloq (Hasty) in 1962, followed by other collections: Yosh Gvardiya (Young Guard), Sir Ochildi (The Secret Revealed), and Sehrli Qolpoqcha (A Magic Hat) (1965). To\'xtaboyev\'s writing was popular throughout Uzbekistan, and many children read his books as part of their school studies.\n' +
          '\n' +
          'To\'xtaboyev worked at the Kamalak publishing house as an editor, and then as lead editor. From 1960 until 1970, his most popular books were translated into other languages.\n',
        publishedYear: 2013
      },
      {
        id: 1,
        title: 'Sariq dev',
        description: 'Khudayberdi Tukhtabaev was an Uzbek writer of children\'s stories. he studied at the Department of Philology at the University of Central Asia from 1950 until 1955. He worked for a time as a newspaper journalist, including at Tashkent haqiqati (The Truth of Tashkent) and Qizil O’zbekiston (Red Uzbekistan), and he was the editor of the monthly magazine Guliston. From 1972 until 1977, he worked as chief editor at Yosh Gvardiya (Young Guard) publishing house, and as assistant to the chief editor at Shark Yulduzi (Western Star) newspaper. In those days, he also worked as chief of editing at Yosh Kuch (Young Strength) newspaper.\n' +
          '\n' +
          'To\'xtaboyev began his career as a children\'s writer in 1958. He created the collection of stories Shoshqoloq (Hasty) in 1962, followed by other collections: Yosh Gvardiya (Young Guard), Sir Ochildi (The Secret Revealed), and Sehrli Qolpoqcha (A Magic Hat) (1965). To\'xtaboyev\'s writing was popular throughout Uzbekistan, and many children read his books as part of their school studies.\n' +
          '\n' +
          'To\'xtaboyev worked at the Kamalak publishing house as an editor, and then as lead editor. From 1960 until 1970, his most popular books were translated into other languages.\n',
        publishedYear: 2013
      },
    ]
    // this.service.query().subscribe(data=>{
    //   this.data = data
    // })
  }

}
