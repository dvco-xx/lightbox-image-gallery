//selecting all required elements for filtering image gallery
const filterItem = document.querySelector(".items"),
filterImg = document.querySelectorAll(".image");

window.onload = () => {
  //once window is loaded
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      //if user clicks element with .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class from current element
      selectedItem.target.classList.add("active"); //addd active class to user selected element
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and storing it in filterName variable
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to image data-name value
        //or iuser selected item data  is equal to "all"
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };

};

//selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  categoryName = previewBox.querySelector(".category p"),
  shadow = document.querySelector(".shadow");

for (let i = 0; i < gallery.length; i++) {
  totalImg.textContent = gallery.length; //passing gallery images length to totalimg
  let newIndex = i; //passing i value to newIndex value
  let clickImgIndex = newIndex;
  gallery[i].onclick = () => {
    clickImgIndex = newIndex; //passing clicked img value to clickedImgIndex variable

    function preview() {
      let selectedImgCategory = gallery[newIndex].getAttribute("data-name"); //getting user clicked data-name value
      categoryName.textContent = selectedImgCategory; //passing the data-name value to category name
      currentImg.textContent = newIndex + 1; //passing newIndex value to currentImg by adding 1
      let selectedImgurl = gallery[newIndex].querySelector("img").src; //getting user clicked image url
      previewImg.src = selectedImgurl; //passing our clicked img url to previewImg source
    }

    //previous and next buttons
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    if (newIndex == 0) {
      prevBtn.style.display = "none";
    }
    if (newIndex >= gallery.length - 1) {
      nextBtn.style.display = "none";
    }
    prevBtn.onclick = () => {
      newIndex--; //decrement newIndex value
      if (newIndex == 0) {
        preview();
        prevBtn.style.display = "none";
      } else {
        preview(); //calling preview function again to update image
        nextBtn.style.display = "block";
      }
    };
    nextBtn.onclick = () => {
      newIndex++; //increment newIndex value
      if (newIndex >= gallery.length - 1) {
        preview();
        nextBtn.style.display = "none";
      } else {
        preview(); //calling preview function again to update image
        prevBtn.style.display = "block";
      }
    };

    preview();
    previewBox.classList.add("show");
    shadow.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";

    closeIcon.onclick = () => {
      newIndex = clickImgIndex; ///assigning user first clicked img index to newIndex variable
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
      previewBox.classList.remove("show");
      shadow.style.display = "none";
      document.querySelector("body").style.overflow = "auto";
    };
  };
}

$(document).ready(function () {
    $('#up').on("click", function () {
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          2000
        );
      });
    
      AOS.init({
        easing: 'ease',
        duration: '1000'
      });
    });


