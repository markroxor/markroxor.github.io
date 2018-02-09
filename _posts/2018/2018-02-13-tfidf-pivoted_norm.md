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


## 1. Introduction  
As a part of gensim's incubator programme my goal was to add two new features on the existing `tfidf` model of gensim. One was implementing a
smart information retrieval system (smartirs) scheme [Link][1] and the other was implementing pivoted document length normalisation [Link][2]. In this blog I will be discussing about the why and the what of the implementation and the take away will be a scrutinized inspection of the paper by Singhal, et al [Link][2] on pivoted document length normalisation.

## 2. Term frequency-Inverse document frequency  
#### Glossary of words -  
Term Frequency is the number of times a word has occured in the document or a words frequency in a document. Its domanin remains local to the document.
Document frequency is the number of times a word has occured in the whole corpus. Where corpus is a stack of multiple documents. Its domain is global.

In very simple terms TF-IDF scheme is used for extracting features or important words which can be the best representative of your document. To get the intutive feel of TFIDF, consider a recipe book which has recipe of various fast foods.
Here the recipe book is our corpus and each recipe is our document. Now consider various recipes like that of a
1. Burger which will consist of words like "bun", "meat", "lettuce", "ketchup", "heat", "onion", "food", "preparation", "delicious", "fast"
2. French fries which will consist of words like "potato", "fry", "heat", "oil", "ketchup", "food", "preparation", "fast"
3. Pizza which will consist of words like "ketchup", "capsicum", "heat", "food", "delicious", "oregano", "dough", "fast"

Here words like "fast", "food", "preparation", "heat" occur in almost all the preparations. Words like these will have a very high document frequency. Now consider words like "bun", "lettuce" for the recipe burger, "potato" and "fry" for the recipe french fries and "dough" and "oregano" for the recipe pizza. These words will have high term frequency for the particular recipe they are related to but will have a comparativly low document frequency.

Now we propose the scheme of TF-IDF which simply put is a mathematical product of term-frequency and inverse of the document frequency of each term. One can clearly visualize how the words like "potato" in French fries will have a high TF-IDF value and at the same time are the best representative of the document which in this case is "French Fries".

Now mathematically speaking -  


# 3. SMART Information Retrieval System  
## 3.1 The scheme  
Taking a hint from wikipedia [Link][1] - smart information retrieval system or SMARTIRS in short is a mnemonic scheme for denoting tf-idf weighting variants in the vector space model which is a string of form TDN where T represents the term weighting for term frequency, D represents the term weighting for document frequency, and N represents the normalization scheme employed after the calculation of TF-IDF, The various place-holders that form the string are depicted in the figure - ![pic](/img/smartirs.png)

# 6. References  
[1]: https://en.wikipedia.org/wiki/SMART_Information_Retrieval_System  
[2]: http://singhal.info/pivoted-dln.pdf
