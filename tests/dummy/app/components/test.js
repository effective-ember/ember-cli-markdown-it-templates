import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class TestComponent extends Component {
  @tracked
  showResult = false;

  @action
  handleClick() {
    this.showResult = !this.showResult;
  }
}
