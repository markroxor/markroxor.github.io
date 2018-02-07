---
layout: post
title:  "Pivoted document length normalisation."
timezone: Asia/Kolkata
date:   2018-02-12 21:03:00
categories:
    - blog
tags:
    - Gensim's incubator programme
    - Machine Learning
---

<!--
# Table of contents:  
## 1. Introduction  
## 2. Term frequency-Inverse document frequency  
##   2.1. Introduction  
## 3. SMART Information Retrieval System  
##   3.1. The scheme  
## 4. Pivoted document length normalisation  
##   4.1. The scheme  
##   4.2. Implementation  
## 5. Comparitive study  
## 6. References  
-->

## 1. Introduction  
As a part of gensim's incubator programme my goal was to add two new features on the existing `tfidf` model of gensim. One was implementing a
smart information retrieval system (smartirs) scheme [\[1\]][1] and the other was implementing pivoted document length normalisation [\[2\]][2]. In this blog I will be discussing about the why and the what of the implementation and the take away will be a scrutinized inspection of the paper by Singhal, et al [\[2\]][2] on pivoted document length normalisation.

## 2. Term frequency-Inverse document frequency  
#### Glossary of words -  
Term Frequency is the number of times a word has occured in the document or a words frequency in a document. Its domanin remains local to the document.
Document frequency is the fraction of documents in which the word has occured. Where corpus is a stack of multiple documents. Its domain is global.

In very simple terms TF-IDF scheme is used for extracting features or important words which can be the best representative of your document. To get the intutive feel of TFIDF, consider a recipe book which has recipe of various fast foods.
Here the recipe book is our corpus and each recipe is our document. Now consider various recipes like that of a
1. Burger which will consist of words like "bun", "meat", "lettuce", "ketchup", "heat", "onion", "food", "preparation", "delicious", "fast"
2. French fries which will consist of words like "potato", "fry", "heat", "oil", "ketchup", "food", "preparation", "fast"
3. Pizza which will consist of words like "ketchup", "capsicum", "heat", "food", "delicious", "oregano", "dough", "fast"

Here words like "fast", "food", "preparation", "heat" occur in almost all the preparations. Words like these will have a very high document frequency. Now consider words like "bun", "lettuce" for the recipe burger, "potato" and "fry" for the recipe french fries and "dough" and "oregano" for the recipe pizza. These words will have high term frequency for the particular recipe they are related to but will have a comparativly low document frequency.

Now we propose the scheme of TF-IDF which simply put is a mathematical product of term-frequency and inverse of the document frequency of each term. One can clearly visualize how the words like "potato" in French fries will have a high TF-IDF value and at the same time are the best representative of the document which in this case is "French Fries".

Now mathematically speaking -
#### Term frequency  
For a word (or term) `t`, the term frequency is denoted by <code>tf<sub>t,d</sub></code> and the frequency of each term in a document `d` is denoted by <code>f<sub>t,d</sub></code> then  
<code>tf<sub>t,d</sub> = f<sub>t,d</sub></code>

#### Inverse document frequency
Taking the log `smartirs` scheme for inverse document frequency `idf` is calculated as   
![idf](http://bit.ly/2EoYVee)  
or the log of inverse fraction of document that contain the term `t` , where `N` is the total number of documents in the corpus.
To avoid division by zero error generally 1 is added to the denominator.

#### TF-idf
Finally TF-IDF is calculated as the product of term frequency <code>tf<sub>t,d</sub></code> and inverse document frequency  
idf(t,D)  
<code>tfidf(t,d,D) = tf<sub>t,d</sub> * idf<sub>t,D</sub></code>

# 3. SMART Information Retrieval System  
Taking a hint from wikipedia [\[1\]][1] - smart (System for the Mechanical Analysis and Retrieval of Text) information retrieval system or SMARTIRS in short is a mnemonic scheme for denoting tf-idf weighting variants in the vector space model which is a string of form TDN where T represents the term weighting for term frequency, D represents the term weighting for document frequency, and N represents the normalization scheme employed after the calculation of TF-IDF, The various place-holders that form the string are depicted in the figure -

 ![smartirs](/img/smartirs.png)

## 4. Pivoted document length normalisation  
### 4.1 Approach
It is proven that cosine normalization tends to favor retrieval of short documents but supresses the retrieval of long documents as can be seen in figure -
<p align="center">
<img src="/img/fig1.png" alt="Figure - 1">
</p>
<center> <b>Figure 1</b></center>

Our goal is to somehow boost the probability of retrieving long documents and supress the probability of retrieval of short documents so that the probability of retrieval and relevence for a given document align. So our pivoted normalization scheme should be something like -
<p align="center">
<img src="/img/fig2.png" alt="Figure - 1">
</p>
<center> <b>Figure 2</b></center>

The normalization factor should be high for short documents and low for long documents.
(Remember that the graph is plotted for calculating the normalization factor. The higher the normalisation factor, lower is the TF-IDF value. More discussion on this in the later part.)

This approach requires two parameters for the normalization to work
* Pivot - Pivot is the point before which we consider a document to be short and after which the document is considered long. It can be found by plotting the retrieval and relevence curves of a set of documents using a general normalization function. The point where both these curves coincide is the pivot point.
* Slope - The slope decides the amount of "tilting" at the pivot point which is required to bring the relevance and retrieval curves as close as possible. Mathematically slope is the tan(the angle made by old normalization)

Using basic coordinate geometry (which we are not going to discuss here) we can propose the new normalization scheme as  
`pivoted normalization = (1.0 - slope) x pivot + slope x old normalization`


## 5. Comparitive study  

# 6. References  
\[1\] - https://en.wikipedia.org/wiki/SMART_Information_Retrieval_System  
\[2\] - http://singhal.info/pivoted-dln.pdf  


[1]: https://en.wikipedia.org/wiki/SMART_Information_Retrieval_System  
[2]: http://singhal.info/pivoted-dln.pdf
