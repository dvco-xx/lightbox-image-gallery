//selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=> {//once window is loaded
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing gallery images length to totalimg
        let newIndex = i; //passing i value to newIndex value
        let clickImgIndex = newIndex;
        gallery[i].onclick = ()=> {
            clickImgIndex = newIndex; //passing clicked img value to clickedImgIndex variable
            console.log(i);
            
            function preview() {
                currentImg.textContent = newIndex + 1; //passing newIndex value to currentImg by adding 1
                let selectedImgurl = gallery[newIndex].querySelector("img").src; //getting user clicked image url
                previewImg.src = selectedImgurl; //passing our clicked img url to previewImg source
            }

            //previous and next buttons
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0) {
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=> {
                newIndex--; //decrement newIndex value
                if(newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview(); //calling preview function again to update image
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = ()=> {
                newIndex++; //increment newIndex value
                if(newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview(); //calling preview function again to update image
                    prevBtn.style.display = "block";
                }
            }

            preview();
            previewBox.classList.add("show");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";


            closeIcon.onclick = ()=> {
                newIndex = clickImgIndex; ///assigning user first clicked img index to newIndex variable
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        }
    }
}