import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reading-figures',
  templateUrl: 'reading-figures.html',
})
export class ReadingFiguresPage {

  parent
  reading

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.parent = navParams.get('parent')
    this.reading = this.parent.reading
  }

  showTetragram(tetragram, house?: number) {
    this.parent.navCtrl.push('TetragramPage', { tetragram: tetragram, house: house })
  }

  ionViewWillEnter() {
    this.parent.title = 'Figures'
    this.parent.helpTopic = 'reading figures'
  }

}
