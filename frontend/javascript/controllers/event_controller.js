import { Controller } from "stimulus";

export default class extends Controller {
  static values = {
    name: String,
    params: Object,
  };

  track(e) {
    e.preventDefault();
    window.plausible(this.nameValue, this.paramsValue);
  }
}
