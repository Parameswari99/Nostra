var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"

    }
)

var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",
    function () {
        sidenavbar.style.marginLeft = "0px"
    }
)

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

//slider activation//

function changeSlide(a) {
    var myDiv = document.getElementById("imgdiv");
    var imgCount = myDiv.getElementsByTagName('img');

    if (a == "2") {
        document.getElementById("image1").style = "display:none";
        document.getElementById("image2").style = "display:block";
    }
    else if (a == "1") {
        document.getElementById("image1").style = "display:block";
        document.getElementById("image2").style = "display:none";
    }
}

// Heart icon toggle to red on click
document.querySelectorAll(".fa-heart").forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
        icon.style.color = icon.classList.contains("fa-solid") ? "red" : "#e44907";
    });
});

//filter section

var filterList = []
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag) => {
    tag.addEventListener("change", (e) => {

        if (e.target.checked) {
            filterList.push(e.target.value)
            console.log(filterList)
            FilterImageBySelect()
        }
        else {
            filterList = filterList.filter(item => item !== e.target.value);
            FilterImageBySelect()

        }
    })
})

function FilterImageBySelect() {

    var productList = document.querySelectorAll(".product-card");
    console.log(productList);

    var filteimg = document.getElementById('[id*="Floral"]');

    for (var i = 0; i < productList.length; i++) {
        var check = false
        var product = productList[i]
        console.log(product)
        var temp = product.querySelector("tags").innerHTML;

        console.log(temp)


        const filterArray = temp.split(',');

        console.log(filterArray)
        console.log(filterList)
        filterList.forEach((j) => {
            filterArray.forEach((i) => {
                if (j == i) {
                    check = true
                }
            })
        })
        if (!check && filterList.length > 0) {
            product.style.display = "none"
        }
        else {
            product.style.display = "block"
        }

    }

}