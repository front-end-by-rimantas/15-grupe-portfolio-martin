
let HTMLBlog = '';
let image = [`src="./img/blog/blog-1.jpg"`,`src="./img/blog/blog-2.jpg"`,`src="./img/blog/blog-3.jpg"`]
let date = ["02 Mar 2020", "03 Jan 2020", "01 01 2020"];
let topic = ["Design","Art","Sports"]
let title = ["Make your Marketing website", "Paint the most beautiful Painting", "Be as fast as fastest Man on Earth"];
let texts = '';  


if( image == title ){
    document.write(HTMLBlog);
}


for (let i=0; i<3; i++) {
    HTMLBlog += `<div class="col-4 blog">
    <div class="blogsImg">
    <a href="#">
        <img ${image[i]} title="" alt="blog">
    </a>
</div>
<div class="blogsInfo">
    <div class="b-meta row"><span>${date[i]} </span><span>| ${topic[i]}</span></div>
    <div class="blogTitle"><a href="#">${title[i]}</a></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <div class="readMore"><a href="#">Read More</a></div>
</div>
</div>`;
}

document.getElementById('blogs').innerHTML= HTMLBlog;