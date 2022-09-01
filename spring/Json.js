

document.getElementById('spring').style.display = 'block';
const loadImages = () => {
    Url = ('https://jsonplaceholder.typicode.com/photos');
    fetch(Url)
    .then(res=>res.json())
        .then(data => displayImages(data.slice()))
        document.getElementById('spring').style.display = 'block';


    

}

const displayImages = (images) => {
    console.log(images)
    document.getElementById('spring').style.display = 'none';

    const imagesContainer = document.getElementById('images-container');
    images.forEach(image => {
        const { title, thumbnailUrl, albumId } = image;

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('col');
        imageDiv.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${thumbnailUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Image title : ${title.slice(0,10)}</h5>
            <p class="card-text">${ albumId}</p>
            <button onclick="loadDetails('${image.id}')" class="btn btn-primary py-2 px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
            
           

          </div>
        </div>
      </div>
        
        
        `
        imagesContainer.appendChild(imageDiv);




    })
     

}
 
const loadDetails = (id) => {
    
    Url = (`https://jsonplaceholder.typicode.com/photos/${id}`);
    fetch(Url)
    .then(res=>res.json())
        .then(data => displayDetails(data))
        document.getElementById('spring').style.display = 'block';



}
const displayDetails = image => {
    console.log(image)
    
    
    document.getElementById('spring').style.display = 'none';



    const modal = document.getElementById('exampleModalLabel');
    modal.innerText = image.id
    const ModalBody = document.getElementById('modal');
    ModalBody.innerHTML = `
      <img src="${image.thumbnailUrl}" class="card-img-top" alt="...">
      <p> name${image.title} </p>


    `


     
     




}
 
loadImages()