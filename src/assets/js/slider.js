class Slider {
  constructor(option) {
    this.parentClass = option.parentClass
      ? option.parentClass
      : ".parent-class";
    this.sliderBtn2 = option.sliderBtn2 ? option.sliderBtn2 : ".slider-btn2";
    this.productParent = option.productParent
      ? option.productParent
      : ".productParent";
    this.singleProduct = option.singleProduct
      ? option.singleProduct
      : ".singleProduct";
    this.paginationNumber = option.paginationNumber
      ? option.paginationNumber
      : ".pagination-number";
    this.slideInfo = option.slideInfo ? option.slideInfo : ".slide-info";
    this.draw();
  }

  draw() {
    let getClasses = document.querySelectorAll(this.parentClass);
    getClasses.forEach((item) => {
      let sliderBtn2 = item.querySelectorAll(this.sliderBtn2);
      let productParent = item.querySelector(this.productParent);
      let singleProduct = item.querySelectorAll(this.singleProduct);
      let firstClone = singleProduct[0].cloneNode(true);
      let lastClone = singleProduct[singleProduct.length - 1].cloneNode(true);
      productParent.appendChild(firstClone);
      productParent.prepend(lastClone);

      let count = 100;
      let maxSpace = (singleProduct.length + 1) * 100;
      productParent.style.left = "-" + count + "%";
      console.log(maxSpace);
      let ind = 0;
      let rightMove1 = () => {
        if (count >= maxSpace) return;
        count = count + 100;

        ind = count / 100 - 1;

        if (count == 100 || count == maxSpace) {
          ind = 0;
        }

        productParent.style.transition = "all 0.6s ease-in-out";
        productParent.style.left = "-" + count + "%";
      };

      let leftMove1 = () => {
        if (count <= 0) return;

        productParent.style.transition = "all 0.6s ease-in-out";

        count = count - 100;
        ind = count / 100 - 1;

        if (count == 0 || count == maxSpace - 100) {
          ind = (maxSpace - 100) / 100 - 1;
        }
        productParent.style.left = "-" + count + "%";
      };

      productParent.addEventListener("transitionend", () => {
        if (count == maxSpace) {
          productParent.style.transition = "none";
          count = 100;
          productParent.style.left = "-" + count + "%";
        }
        if (count == 0) {
          productParent.style.transition = "none";
          count = maxSpace - 100;
          productParent.style.left = "-" + count + "%";
        }
      });

      sliderBtn2[1].onclick = () => {
        rightMove1();
      };
      sliderBtn2[0].onclick = () => {
        leftMove1();
      };
    });
  }
}

let slider = new Slider({});
