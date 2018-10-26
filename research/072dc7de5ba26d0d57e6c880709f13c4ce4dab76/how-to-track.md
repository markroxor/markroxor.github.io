---
layout: base_research
---

<main class="main">
    <div class="container-fluid">
    <div class="animated fadeIn">
        <div>
            <h2>Intuition</h2>
            <p>Consider two cropped images bounding the object we wish to track</p>
            <ul>
                <li>The original image or the image given at t=n.</li>
                <li>The template image or the image given at t=n+1 which we wish to find.</li>
            </ul>
            <div style="width:image width px; font-size:90%; text-align:center">
                    <img src = "/img/research/img0092c.png" style="width:10%; height:10%;"  alt = 'alt text'/>
                    <img src = "/img/research/img0093c.png" style="width:10%; height:10%;" alt = 'alt text'/>
                    <br/>
                    Original image I and template image T.
                    <br/>
                    Figure 1
            </div>
            <strong>The template image can be thought of as an affine transformed version of our original image.</strong>
            <p>If we manage to find the exact parameters of the affine matrix for each pair of subsequent images we can
                serially track the object, given we have the ground truth of the object at t=0.</p>

        </div>
    </div>
    </div>
</main>