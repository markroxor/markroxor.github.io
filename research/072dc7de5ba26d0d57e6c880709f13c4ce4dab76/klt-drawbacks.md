---
layout: base_research
---

<main class="main">
    <div class="container-fluid">
      <div class="animated fadeIn">
        <div>
            <h2>Assumptions</h2>
            <ul>
                <li>
                    Brightness constancy - KLT assumes that the intensity of the pixels of the object which is being tracked will correspondigly be consistent in every subsequent image.
                </li>
                <div style="width:image width px; font-size:90%; text-align:center">
                    <img src = "/img/research/intensity.png" alt = 'alt text'/>
                    <br/>
                </div>
                <li>
                    Spatial coherence - The neighbouring points typically belong to the same surface and have similar motions.
                </li>
                <div style="width:image width px; font-size:90%; text-align:center">
                    <img src = "/img/research/spatial.png" alt = 'alt text'/>
                    <br/>
                </div>
                <li>
                    Temporal persistence - Since the core of KLT lies in calculating the gradient of the image, it assumes that the pixel shift will be miniscule in subsequent images.
                </li>
                <div style="width:image width px; font-size:90%; text-align:center">
                    <img src = "/img/research/gradual.png" alt = 'alt text'/>
                    <br/>
                </div>
            </ul>
            <h2>Drawbacks</h2>
            <p>While KLT is a pure geometry based approach, it has some inherent problems.</p>
            <ul>
                <li>
                    It relies too much on gradients - the heart of KLT lies in using the gradient of the image to calculate the update in affine matrix parameters.
                </li>
                <li>
                    At time this gradient can lose its reliablity. We want the walls (static) to have a higher gradient and a person (non-static) to have a lower gradient.
                </li>
            </ul>
        </div>
      </div>
    </div>
</main>