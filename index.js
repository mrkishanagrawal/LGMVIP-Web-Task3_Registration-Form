let enrollbtn = document.getElementById("student");
let dataentry = document.getElementById("data");
let photo = document.getElementById("photo")
let nametext = document.getElementById('nametext')
let emailtext = document.getElementById('emailtext')
let websitetext = document.getElementById('websitetext')
let style = document.getElementById("style")
enrollbtn.addEventListener('click', e => {
    let newelement = document.createElement('div')
    dataentry.appendChild(newelement)
    newelement.classList.add('newstyle')

    let createelement = document.createElement('div')
    newelement.appendChild(createelement)


    let emailElement = document.createElement('div')
    newelement.appendChild(emailElement)

    let elementforimage = document.createElement("div")
    newelement.appendChild(elementforimage)
    elementforimage.classList.add("positionrelative")

    let photoentry = photo.value
    let imageElement = document.createElement("img")
    imageElement.classList.add("photodimension")
    elementforimage.appendChild(imageElement)
    imageElement.src = `${photoentry}`

    let websiteelement = document.createElement('div')
    newelement.appendChild(websiteelement)

    if (document.getElementById("Male").checked == true) {
        let genderelement = document.createElement('div')
        newelement.appendChild(genderelement)
        genderelement.innerHTML = `<span>Male</span>`

    } else if (document.getElementById("Female").checked == true) {
        let genderelement = document.createElement('div')
        newelement.appendChild(genderelement)
        genderelement.innerHTML = `<span>Female</span>`
    }
    if (document.getElementById("Male").checked == true && document.getElementById("Female").checked == true) {
        alert("select only one gender")
        document.getElementById("Male").checked = false
        document.getElementById("Female").checked = false
        newelement.remove()

    } else if (document.getElementById("Male").checked == false && document.getElementById("Female").checked == false) {
        alert("select gender")
        emailElement.remove()
        createelement.remove()
        websiteelement.remove()
        newelement.remove()
    }


    if (document.getElementById("java").checked && document.getElementById("css").checked && document.getElementById("Html").checked) {
        let skillelement = document.createElement('div')
        newelement.appendChild(skillelement)
        skillelement.innerHTML = `<span>HTML,CSS,JAVA</span>`
    }
    else if (document.getElementById("css").checked && document.getElementById("java").checked) {
        let skillelement = document.createElement('div')
        newelement.appendChild(skillelement)
        skillelement.innerHTML = `<span>CSS,JAVA</span>`
    } else if (document.getElementById("Html").checked && document.getElementById("css").checked) {
        let skillelement = document.createElement('div')
        newelement.appendChild(skillelement)
        skillelement.innerHTML = `<span>CSS,HTML</span>`
    } else if (document.getElementById("Html").checked && document.getElementById("java").checked) {
        let skillelement = document.createElement('div')
        newelement.appendChild(skillelement)
        skillelement.innerHTML = `<span>JAVA,HTML</span>`
    } else if (document.getElementById("Html").checked) {
        let skillelement = document.createElement('div')
        newelement.appendChild(skillelement)
        skillelement.innerHTML = `<span>HTML</span>`
    } else if (document.getElementById("java").checked) {
        let skillelement = document.createElement('div')
        stylnewelement.appendChild(skillelement)
        skillelement.innerHTML = `<span>JAVA</span>`
    } else if (document.getElementById("css").checked) {
        let skillelement = document.createElement('div')
        newelement.appendChild(skillelement)
        skillelement.innerHTML = `<span>CSS</span>`
    }
    let x = nametext.value
    let y = emailtext.value
    let z = websitetext.value


    createelement.innerHTML = `${x}`
    emailElement.innerHTML = `${y}`
    websiteelement.innerHTML = `${z}`

    if (x == "" || y == "" || z == "" || (document.getElementById("Male").checked == false && document.getElementById("Female").checked == false) || photoentry == "") {
        alert("Fill up all the details")
        emailElement.remove()
        createelement.remove()
        websiteelement.remove()
        newelement.remove()

    }






})






let dltbtn = document.getElementById("dlt")
dltbtn.addEventListener('click', e => {
    emailtext.value = ""
    nametext.value = ""
    photo.value = ""
    websitetext.value = ""
    document.getElementById("Male").checked = false
    document.getElementById("Female").checked = false

    document.getElementById("Html").checked = false
    document.getElementById("css").checked = false
    document.getElementById("java").checked = false

})