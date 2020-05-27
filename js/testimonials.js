let testimonials = document.querySelector('#slider')
testimonials.innerHTML=`<div id="slider">
<input type="radio" name="slider" id="slide1" checked>
<input type="radio" name="slider" id="slide2">
<input type="radio" name="slider" id="slide3">
<input type="radio" name="slider" id="slide4">
<div id="slides">
    <div id="overflow">
        <div class="inner">
            <div class="slide slide_1">
                <div class="testimonials">
                    <div class='testimoniesImgBox'><img src="./img/team/team-1.jpg"
                            title="testimonies image" alt="testimonies"></div>
                    <div class="testimoniesText">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Accusantium laboriosam officiis facilis ratione dolorum
                        repudiandae maxime commodi architecto velit. Assumenda.</div>
                    <div class="testimonyAuthor">Nancy Bayers</div>
                    <div class="co-f">Co-Founder</div>
                </div>
            </div>
            <div class="slide slide_2">
                <div class="testimonials">
                    <div class='testimoniesImgBox'><img src="./img/team/team-2.jpg"
                            title="testimonies image" alt="testimonies"></div>
                    <div class="testimoniesText">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Accusantium laboriosam officiis facilis ratione dolorum
                        repudiandae maxime commodi architecto velit. Assumenda.</div>
                    <div class="testimonyAuthor">Nancy Bayers</div>
                    <div class="co-f">Co-Founder</div>
                </div>
            </div>
            <div class="slide slide_3">
                <div class="testimonials">
                    <div class='testimoniesImgBox'><img src="./img/team/team-3.jpg"
                            title="testimonies image" alt="testimonies"></div>
                    <div class="testimoniesText">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Accusantium laboriosam officiis facilis ratione dolorum
                        repudiandae maxime commodi architecto velit. Assumenda.</div>
                    <div class="testimonyAuthor">Nancy Bayers</div>
                    <div class="co-f">Co-Founder</div>
                </div>
            </div>
            <div class="slide slide_4">
                <div class="testimonials">
                    <div class='testimoniesImgBox'><img src="./img/team/team-4.jpg"
                            title="testimonies image" alt="testimonies"></div>
                    <div class="testimoniesText">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Accusantium laboriosam officiis facilis ratione dolorum
                        repudiandae maxime commodi architecto velit. Assumenda.</div>
                    <div class="testimonyAuthor">Nancy Bayers</div>
                    <div class="co-f">Co-Founder</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="bullets">
    <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
    <label for="slide4"></label>
</div>
</div>`;