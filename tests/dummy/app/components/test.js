import Component from '@ember/component';
import { action } from '@ember/object';


export default class TestComponent extends Component {
  tagName = '';

  showResult = false;

  @action
  handleClick() {
    this.set('showResult', !this.showResult);
  }
}
