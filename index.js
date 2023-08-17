class AnimatedCounter {
  constructor(ele) {
    this.ele = ele;
    this.start = parseFloat(ele.dataset.start); // Parse float instead of using parseInt
    this.end = parseFloat(ele.dataset.end); // Parse float instead of using parseInt
    this.interval = parseFloat(ele.dataset.interval); // Parse float instead of using parseInt
    this.multiplier = 0;
    this.timer = 0;

    if (!isNaN(this.end)) {
      this.setEle();
    } else {
      ele.innerText = ele.dataset.end;
    }
  }

  setEle() {
    setTimeout(() => {
      this.ele.innerText = Math.floor(this.start); // Update displayed value
      this.multiplier += this.interval; // Increment by interval

      if (this.start < this.end) {
        this.start = this.multiplier;

        // Update timer condition
        if ((this.multiplier / this.end) * 100 > 95) {
          this.timer = 20;
        }

        this.setEle();
      }
    }, ((this.multiplier / this.end) * this.timer));
  }
}