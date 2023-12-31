import React from 'react';

function BlogsPage(){
return(
    <div className="container">
         <div class="card">
        <div class="card-header"><strong>Blogs</strong></div>
            <div class="card-body">
            <h5 class="card-title">Blog Articles</h5>
            <p class="card-text">blog posts</p>
        </div>
    </div>
    <p></p>
            <div className="card-body">
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">

      <div class="card">
        <div class="card-header">Card header</div>
            <div class="card-body">
            <p class="card-text">Card content</p>
        </div>
        </div>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">

      <div class="card">
        <div class="card-header">Card header</div>
            <div class="card-body">
            <p class="card-text">Card content</p>
        </div>
        </div>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        
      <div class="card">
        <div class="card-header">Card header</div>
            <div class="card-body">
            <p class="card-text">Card content</p>
        </div>
        </div>

      </div>
    </div>
  </div>
</div>
            </div>
        </div>
);
}

export default BlogsPage;