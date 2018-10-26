---
layout: base_research
---
<main class="main">
  <div class="container-fluid">
    <div class="animated fadeIn">
      <div lang='latex' >
          <h2>Translation</h2>
        <p>A regular translation of an image can be found by applying the below transform on the input image</p>

        <div lang='latex' style="text-align:center">
                \begin{bmatrix}X_1+p_{1}  \\ Y_1 + p_{2} \end{bmatrix}
                =
                \begin{bmatrix}X_2 \\ Y_2 \end{bmatrix}
            </div>

            This will translate the image by $p_{1}$ along the $x$ and $p_{2}$ along the $y$ axis. (0, 0)-->(p1, p2).


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
    </div>
  </div>
</main>