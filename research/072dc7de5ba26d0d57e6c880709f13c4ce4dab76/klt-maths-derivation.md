---
layout: base_research
---


<main class="main">
  <div class="container-fluid">
    <div class="animated fadeIn">
      <div>
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
    </div>
  </div>
</main>