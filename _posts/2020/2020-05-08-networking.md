---
layout: post
title:  "Introduction to Networking (1)"
timezone: Asia/Kolkata
date:   2020-05-09 10:55:00
categories:
    - blog
tags:
    - Networking
    - Sneakey
---

# Table of Contents
1. [Introduction](#introduction)
2. [Layers](#layers)
    1. [Physical Layer](#layer1)
    2. [Data Link Layer](#layer2)
    3. [Network Layer](#layer3)
    4. [Transport Layer](#layer4)
3. [Unwrapping Layers](#unwrap)

<u>These are notes for the series - "HydPy meetup on networking" and hence are a supplementary read discussing only the essentials.</u>

## 1. Introduction - <a name="introduction"></a>
When you look at this blog you look at human readable text and interpretable images. For these human interpretable structures to reach you there is a vast complex constant communication going on between machines. At the base level all these structures are streams of bits travelling through cables. The protocols which engage in the formation and extraction of data streams travelling through cables to the interpretable structures you are looking at right now (for instance) were created by International Organization for Standardization (ISO) named OSI or Open systems interconnections model.   

<p align="center">
<img src="https://scltraininghounslow.weebly.com/uploads/4/0/5/3/40536869/2217877.png?1441538284" alt="OSI model">
</p>
<center> <b>OSI model</b></center>

From sender to receiver the data makes its way up the OSI model from layer 1 to 7 at receiver's end and vica versa.  
We are going to discuss and work our way up to transport layer of OSI model. Theoretically discussing about each protocol and why it is the way it is.
1. Physical layer
2. Data Link layer
3. Network Layer
4. Transport Layer

## 2. Layers - <a name="Layers"></a> 

### 2.1 Physical Layer - <a name="layer1"></a> 
This layer transmits raw stream of bits / the lowest level of data format between different machines across the globe.
The transmission of these bits can be through various media for instance coaxial cables, fibre optics and even radio-waves.
This transmits 
Also known as hardware layer.

### 2.2 Data Link Layer - <a name="layer2"></a> 
This layer actually directs the data from layer 1 to the specific node(s) for which it was intended along with other basic checks of error correction. The most important information this layers adds is the hardware address (aka mac address which is hard coded in the NIC) of the receiving and sending node(s) to the header.  

Eg. of MAC address - ab:cd:ef:12:34:56 (6 bytes in size)  

Common protocols of this layer - ARP, Ethernet  

<p align="center">
<img src="https://www.gatevidyalay.com/wp-content/uploads/2018/10/Ethernet-Frame-Format-IEEE-802.3.png" alt="ether header">
</p>
<center> <b>Ethernet header</b></center>

### 2.3 Network Layer - <a name="layer3"></a> 
MAC ID of a server AKA website, server crashed, get new messed.
IP addr tells what network you are part of.

<div style="overflow-y: auto; height:400px; width:70% ; margin: 0 auto;">
<a href="https://github.com/markroxor/sneakey/blob/master/tools/unwrap_pack.cpp">unwrap_pack.cpp</a>
<script src="http://gist-it.appspot.com/https://github.com/markroxor/sneakey/blob/master/tools/unwrap_pack.cpp?footer=minimal"></script>
</div>

https://whofi.com/blog/technical-info/why-do-computers-need-both-mac-addresses-and-ip-addresses/
