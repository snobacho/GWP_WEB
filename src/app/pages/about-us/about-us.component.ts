import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AboutUsDialogComponent } from './about-us-dialog/about-us-dialog.component';

enum ETabs{
  Work,
  Management,
  Quality,
  Water,
  Social,
  Tariff
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, AboutUsDialogComponent, MatDialogModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  openedTab = ETabs.Work
  tabs = ETabs
  private dialog = inject(MatDialog)
  managementItems = [
    {
      name: 'ხოსე მიგელ სანტოს გონზალეზ',
      title: 'გენერალური დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/xose.png'
    },
    {
      name: 'რამონ მარია პუჯოლ კერ',
      title: 'ფინანსური დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/2.png'
    },
    {
      name: 'ვიქტორ სოლის',
      title: 'წყლის წარმოების და ენერგეტიკის დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/3.png'
    },
    {
      name: 'ივან ნანეზ',
      title: 'მშენებლობისა და ინჟინერიის დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/4.png'
    },
    {
      name: 'ანტონიო კინტანა',
      title: 'წყალარინების და წყალსადენის ქსელების დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/5.png'
    },
    {
      name: 'ედუარდო სიენფუეგოს ალვარეზ',
      title: 'კომერციული დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/6.png'
    },
    {
      name: 'პერე სალა',
      title: 'ოპერაციების მხარდაჭერა და წყლის ტექნოლოგიები',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/7.png'
    },
    {
      name: 'მიგელ ანხელ მაზო ესტებანეზ',
      title: 'GWP რუსთავის დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/8.png'
    },
    {
      name: 'გიგა ნადირაძე',
      title: 'აქტივების მართვის დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/9.png'
    },
    {
      name: 'ოთარ დათუნაშვილი',
      title: 'ანალიტიკის, რეგულაციებისა და კონტროლის დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/10.png'
    },
    {
      name: 'ეკატერინე ბერიძე',
      title: 'კომუნიკაციისა და კორპორაციული მომსახურების დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/11.png'
    },
    {
      name: 'ჯაბა მამულაშვილი',
      title: 'იურიდიული დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/12.png'
    },
    {
      name: 'რუსუდან სანიკიძე',
      title: 'ხალხისა და კულტურის, შრომის უსაფრთხოებისა და ადმინისტრაციის დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/13.png'
    },
    {
      name: 'ნინო წურწუმია',
      title: 'ფინანსური დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/14.png'
    },
    {
      name: 'ირაკლი ხვადაგაძე',
      title: 'შესყიდვებისა და ლოგისტიკის დირექტორი',
      text: 'ეკატერინე ბერიძე  ჯორჯიან უოთერ ენდ ფაუერის კომუნიკაციისა და კორპორაციული მომსახურების დირექტორად 2013 წელს დაინიშნა...',
      year: 2013,
      imgSrc: 'assets/images/about/managment/15.png'
    }
  ];
  selectedItem: any = {};
  isDialogOpen = false
  currentOpenedItemIndex: number = 0
  openDialog(item: any, index: number){
    this.currentOpenedItemIndex = index
    this.selectedItem = item;
    this.isDialogOpen = true
  }

  getPreviousItem(){
    if(this.currentOpenedItemIndex){
      this.selectedItem = this.managementItems[--this.currentOpenedItemIndex]
    }else {
      this.currentOpenedItemIndex = this.managementItems.length - 1
      this.selectedItem = this.managementItems[this.currentOpenedItemIndex]
    }
  }

  getNextItem(){
    if(this.currentOpenedItemIndex == this.managementItems.length - 1){
      this.currentOpenedItemIndex = 0
      this.selectedItem = this.managementItems[this.currentOpenedItemIndex]
    }else {
      this.currentOpenedItemIndex = this.currentOpenedItemIndex + 1
      this.selectedItem = this.managementItems[this.currentOpenedItemIndex]
    }
  }
  
}
