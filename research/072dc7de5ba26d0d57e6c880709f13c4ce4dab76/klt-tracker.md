---
layout: base_research
---


<main class="main">
  <div class="container-fluid">
    <div class="animated fadeIn">
      <div>
          <h2>Introduction and intuition</h2>
          <p>KLT tracker finds out the parameters $p$ of the affine matrix given the original image I and the template image T.</p>
          <p>We consider the initial paramters $p$ of the affine matrix to be all zeros (which suggests a unit affine transformation or $I$ == $T$)</p>
          <p>We then update the $p$ values by $\triangledown p$ iteratively such that the error between the warped original image $I(W(x;p))$ and
              the template image T is minimised where $W(x;p)$ is the affine transform applied.
          </p>
          <p>Generally we keep iterating until the norm of $\triangledown p \leq \alpha $ where $\alpha$ is our error tolerance.</p>
      </div>
    </div>
  </div>
</main>