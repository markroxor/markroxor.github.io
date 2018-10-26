---
layout: base_research
---

<main class="main">
<div class="container-fluid">
<div class="animated fadeIn">
    <div class='our' style='left:0; right:0 ;margin-left:30; margin-right:50;'>
        <a href="#" onClick="return false;" class="more btn" id="affine">Affine transform</a>
        <div class='affine' >
        <h2>Translation</h2>
        <p>A regular translation of an image can be found by applying the below transform on the input image</p>
        
        <div lang='latex' style="text-align:center">
                \begin{bmatrix}X_1+p_{1}  \\ Y_1 + p_{2} \end{bmatrix}
                =
                \begin{bmatrix}X_2 \\ Y_2 \end{bmatrix}
            </div>
            
            <p>This will translate the image by $p_{1}$ along the $x$ and $p_{2}$ along the $y$ axis. (0, 0)-->(p1, p2).</p>
            
            
            <h2>Affine</h2>
            <p>Affine transformation includes the effects of scaling, translating and rotating the image.</p>
            <div lang='latex' style="text-align:center">
                    \begin{bmatrix}1+p_{1} & p_{3} & p_5 \\p_2 & 1+p_4 & p_6 \end{bmatrix}
                    * \begin{bmatrix}X_1 \\ Y_1 \\ 1 \end{bmatrix}
                    =
                    \begin{bmatrix}(1+p_1)*X_1 + p_3*Y_1 + p_5 \\ p_2*X_1 + (1+p_4)*Y_1 + p_6 \end{bmatrix}
                    =
                    \begin{bmatrix}X_2 \\ Y_2 \end{bmatrix}
            </div>
            <div style="width:image width px; font-size:90%; text-align:center">
                    <img src = "/img/research/transforms.png" style="width:40%; height:80%;" alt = 'alt text'/>
                    <br/>
                    Affine examples.
                    Figure 2
            </div>
        </div>

        <a href="#" onClick="return false;" class="more btn" id="aim">How do we track?</a>
        <div class='aim'>
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


                
        <a href="#" onClick="return false;" class="more btn" id="klt">Kanade Lucas Tomasi KLT tracker</a>
        <div class='klt'>
            <h2>Introduction and intuition</h2>
            <p>KLT tracker finds out the parameters $p$ of the affine matrix given the original image I and the template image T.</p>
            <p>We consider the initial paramters $p$ of the affine matrix to be all zeros (which suggests a unit affine transformation or $I$ == $T$)</p>
            <p>We then update the $p$ values by $\triangledown p$ iteratively such that the error between the warped original image $I(W(x;p))$ and
                the template image T is minimised where $W(x;p)$ is the affine transform applied.
            </p>
            <p>Generally we keep iterating until the norm of $\triangledown p \leq \alpha $ where $\alpha$ is our error tolerance.</p>
        </div>

        <a href="#" onClick="return false;" class="more btn" id="klt_deriv">KLT mathematical derivation</a>
        <div class='klt_deriv'>
            <p>The goal is to minimise the mean square error between the warped original image $I(W(x;p))$ and the template image $T$. </p> 
            <div lang='latex' style="text-align:center">
                \sum_{x} \left[I(W(x;p + \triangle p)) - T(x)\right]^2
            </div>
            <p>First order taylor expansion </p> 
            <div lang='latex' style="text-align:center">
                \sum_{x} \left[I(W(x;p)) + \triangledown I \frac{\partial W}{\partial p} \triangle p - T(x)\right]^2
            </div>
            <p>The error is minimised by making the first order derivative of the error as zero. </p> 
            <div lang='latex' style="text-align:center">
                \sum_{x} \left[ \triangledown I \frac{\partial W}{\partial p} \right]^T \left[I(W(x;p)) + \triangledown I \frac{\partial W}{\partial p} \triangle p - T(x)\right] = 0
            </div>
            <p>Reshuffling .. </p> 
            <div lang='latex' style="text-align:center">
                \triangle p = H^{-1}\sum_{x} \left[ \triangledown I \frac{\partial W}{\partial p} \right]^T \left[ T(x) - I(W(x;p))\right]
            </div>
            <p> Where</p>
            <div lang='latex' style="text-align:center">
                H = \left[\triangledown I \frac{\partial W}{\partial p} \right]^T \left[\triangledown I \frac{\partial W}{\partial p} \right]
            </div>
            <p> Pictorially - </p>
            <div style="width:image width px; font-size:90%; text-align:center">
                <img src = "/img/research/klt.png" alt = 'alt text'/>
                <br/>
            </div>    
        </div>        

        <a href="#" onClick="return false;" class="more btn" id="iou">Calculating IoU.</a>
        <div class='iou'>
            <p>To calculate the IoU or intersection over union of two images. The following steps should be performed - </p> 
            <ul>
                <li>
                    Convert the original image and the template images into binary masks. Where the background is 0s and foregroud (bounding box) is 1s.
                </li>
                <li> Apply the predicted affine transformation on the original masked image.
                </li>
                <li> Calculate the pixel-wise "logical and" (intersection) and "logical or" (union) of the warped and template image masks.
                </li>
                <li> Calculate IoU as per sum(intersection)/sum(union).
                </li>
            </ul>
            <div style="width:image width px; font-size:90%; text-align:center">
                <img src = "/img/research/maskedimg0091.png" alt = 'alt text'/>
                <img src = "/img/research/maskedimg0092.png" alt = 'alt text'/>
                <br/>
                The masks corresponding to the warped input image and the template image.
            </div>    
        </div>

        <a href="#" onClick="return false;" class="more btn" id="cav">Caveats.</a>
        <div class='cav'>
            <ul>
                <li>
                    The bounding boxes fed to KLT were resized to 48x64 using bilinear interpolation maintaining the aspect ratio WRT to the frame
                    which had dimensions 480x640. So that we can use the calculated transformation matrix for calculating the IoU.
                </li>
            </ul>
        </div>

        <a href="#" onClick="return false;" class="more btn" id="klt_assumpt">Assumptions and Drawbacks of KLT</a>
        <div class='klt_assumpt'>
            <h2>Assumptions</h2>
            <ul>
                <li>
                    Brightness constancy - KLT assumes that the intensity of the pixels of the object which is being tracked will correspondigly be consistent in every subsequent image.  
                </li>
                <div style="width:image width px; font-size:90%; text-align:center">
                    <img src = "/img/research/intensity.png" style="width:40%; height:40%;" alt = 'alt text'/>
                    <br/>
                </div> 
                <br/>   
                <li>
                    Spatial coherence - The neighbouring points typically belong to the same surface and have similar motions.
                </li>
                <div style="width:image width px; font-size:90%; text-align:center">
                    <img src = "/img/research/spatial.png" style="width:40%; height:40%;" alt = 'alt text'/>
                    <br/>
                </div>   
                <br/> 
                <li>
                    Temporal persistence - Since the core of KLT lies in calculating the gradient of the image, it assumes that the pixel shift will be miniscule in subsequent images.
                </li>
                <div style="width:image width px; font-size:90%; text-align:center">
                    <img src = "/img/research/gradual.png" style="width:40%; height:40%;" alt = 'alt text'/>
                    <br/>
                </div>   
                <br/> 
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

        <a href="#" onClick="return false;" class="more btn" id="our1">Our Approach</a>
        <div class='our1' style='left:0; right:0 ;margin-left:30; margin-right:50;'>
            <p>With the advent of deep learning we can use neural networks to our aid.</p>
            <ul>
                <li>
                    We can use neural networks at appropriate position in KLT, possibly right after calculating the gradient of the image so as to extract important features
                    (which then act as a proxy for image gradients in KLT) that can account for the reliablity of the gradient and make the system more robust.
                </li>
                <li>
                    There are techniques already present which make use of the various flavour of neural networks for object tracking, but these techniques are known to
                    fail at instances because they go haywire in unknown environments (the environments which were not present in the training data.) 
                </li>
                <li>
                    Our proposed solution aims to capture the best of both worlds making a more reliable and robust object tracking system.
                </li>
            </ul>
            <div style="width:image width px; font-size:90%; text-align:center">
                <img src = "/img/research/neural.jpg" style="width:40%; height:60%;"  alt = 'alt text'/>
                <br/>
                Extracting useful features from gradients. Figure 1. 
            </div>  
            <br>
            <p>We can extract features of the same dimenstions from the gradients of the image (as shown above) and keep using these features as a proxy of gradients
                in KLT. This should help KLT in trusting t
            </p>    
        </div>
</div>