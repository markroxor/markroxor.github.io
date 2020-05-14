---
layout: post
title:  "Introduction to Networking (1)"
timezone: Asia/Kolkata
date:   2020-05-09 10:55:00
quote: What I cannot create, I do not understand.
author: Richard Feynman
categories:
    - blog
tags:
    - Networking
    - Sneakey
    - Notes
---

# Table of Contents
1. [Introduction](#introduction)
2. [Layers](#layers)
    1. [Physical Layer](#layer1)
    2. [Data Link Layer](#layer2)
    3. [Network Layer](#layer3)
    4. [Transport Layer](#layer4)
3. [Unwrapping Layers](#unwrap)
4. [ARP Cache Poisoning](#arply)
5. [Pseudo Port](#pseudoport)

<u>These are notes for the series - "HydPy meetup on networking" and hence are a supplementary read discussing only the essentials.</u>

## 1. Introduction - <a name="introduction"></a>
When you look at this blog you look at human readable text and interpretable images. For these human interpretable structures to reach you there is a vast complex constant communication going on between machines. At the base level all these structures are streams of bits travelling through cables. The protocols which engage in the formation and extraction of data streams travelling through cables to the interpretable structures you are looking at right now (for instance) were created by International Organization for Standardization (ISO) named OSI or Open systems interconnections model.   

<p align="center">
<img src="https://scltraininghounslow.weebly.com/uploads/4/0/5/3/40536869/2217877.png?1441538284" alt="OSI model">
</p>
<center> <b>OSI model</b></center>

From sender to receiver the data makes its way up the OSI model from layer 1 to 7 at receiver's end and vica versa. Along this 
process it keeps *enveloping itself with the header of each layer*.

We are going to discuss and work our way up to transport layer of OSI model. Theoretically discussing about each protocol and why it is the way it is.
1. Physical layer
2. Data Link layer
3. Network Layer
4. Transport Layer

*(TALK NOTES) - An analogy will help along the way - consider a hypothetical scenario where you need to connect two individuals living in their houses.*

## 2. Layers - <a name="Layers"></a> 

### 2.1 Physical Layer - <a name="layer1"></a> 
This layer transmits raw stream of bits / the lowest level of data format between different machines across the globe.
The transmission of these bits can be through various media for instance coaxial cables, fibre optics and even radio-waves.
Also known as hardware layer.

*(TALK NOTES) - This layer acts as the "cable" connecting the houses.*







### 2.2 Data Link Layer - <a name="layer2"></a> 
This layer actually directs the data from layer 1 to the specific node(s) for which it was intended along with other basic checks of error correction. The most important information this layers adds is the hardware address (aka mac address which is hard coded in the NIC) of the receiving and sending node(s) to the header.  

Eg. of MAC address - ab:cd:ef:12:34:56 (6 bytes in size)  

Common protocols of this layer - ARP, Ethernet  

*(TALK NOTES) - This layers provides information about the SSN (a static identity) of the individuals.*

<p align="center">
<img src="https://www.gatevidyalay.com/wp-content/uploads/2018/10/Ethernet-Frame-Format-IEEE-802.3.png" alt="ether header">
</p>
<center> <b>Ethernet header</b></center>


ARP protocol - Address resolution protocol resolves the IP address to it's corresponding hardware address, for this to happen
each device has its own hardware address : ip address mapping which is called ARP table.
which looks something like 

```shell
$ > arp -a # lists the arp table on *nix machines.
_gateway (192.168.0.12) at 16:4e:12:1f:3s:2d [ether] on eth0
? (192.168.0.187) at 12:d4:af:1a:23:11 [ether] on eth0
```

this resolution takes place when you try to communicate with an IP in your network with something as light as a ping.










### 2.3 Network Layer - <a name="layer3"></a> 
This layer routes the packet from the source address to target address following the shortest path, defining address of each node.
IP address have an edge over hardware addresses as IP addresses are disposable, provides information about the network you are part of, geographic location etc.

Other uses involves specifying the protocol of next layer - transport layer (eg. UDP, TCP)

<p align="center">
<img src="https://lh3.googleusercontent.com/proxy/mBgAIP-Gmg9o3UrDCqWMq5l59rrBz72HULxzmniKElZSIJh2MFUkcYOgR7q7NzL77Vw2LXF3Wz6b-aqNVYfhv7aEv8cQBEWPttkGzhZjRrbLj5cGpgO_Y8uIL1dJ
" alt="ether header">
</p>



```c
struct iphdr_ {
#if __BYTE_ORDER == __LITTLE_ENDIAN 
    unsigned int ihl:4; 
    unsigned int version:4;
#elif __BYTE_ORDER == __BIG_ENDIAN 
    unsigned int version:4; 
    unsigned int ihl:4;
#else 
# error "Please fix <bits/endian.h>" 
#endif 
    u_int8_t tos; 
    u_int16_t tot_len; 
    u_int16_t id;
    u_int16_t frag_off; 
    u_int8_t ttl; 
    u_int8_t protocol; 
    u_int16_t check; 
    struct in_addr saddr; 
    struct in_addr daddr; 
};
```

*(TALK NOTES) - This layer adds the residence address (temporary address) aka ip address of the individuals.*











### 2.4 Transport Layer - <a name="layer4"></a> 
This layer provides end to end transfer of data, establishes connection between two nodes (unlike lower layers which aids in establishing connection), acknowledge the success of data transmission and send the data again in case of error.

Details of TCP (transfer control protocol) -  
<p align="center">
<img src="https://lh3.googleusercontent.com/proxy/IXb75pPHFTAAEcvLMqXygBAssCKhrkS-0KifvmzPkn6avJo0VNKd2sTmAon9ecnrTuoftFr-ONrVs7csgxEYzI9rw_nbxNhxUcjLWpeOufdVjCb-GOeiggZbRgepsA
" alt="ether header">
</p>
```c
struct tcphdr
  {
    __extension__ union
    {
      struct
      {
	uint16_t th_sport;	/* source port */
	uint16_t th_dport;	/* destination port */
	tcp_seq th_seq;		/* sequence number */
	tcp_seq th_ack;		/* acknowledgement number */
# if __BYTE_ORDER == __LITTLE_ENDIAN
	uint8_t th_x2:4;	/* (unused) */
	uint8_t th_off:4;	/* data offset */
# endif
# if __BYTE_ORDER == __BIG_ENDIAN
	uint8_t th_off:4;	/* data offset */
	uint8_t th_x2:4;	/* (unused) */
# endif
	uint8_t th_flags;
# define TH_FIN	0x01
# define TH_SYN	0x02
# define TH_RST	0x04
# define TH_PUSH	0x08
# define TH_ACK	0x10
# define TH_URG	0x20
	uint16_t th_win;	/* window */
	uint16_t th_sum;	/* checksum */
	uint16_t th_urp;	/* urgent pointer */
      };
```

The total available ports on a machine are 2^16 -1, so it can handle these many connections at once.  
Common ports -
* 22 - ssh
* 80 - http
* 443 - https

### Three way handshake
Three way handshaking is used by two machines to establish connection using TCP.
1. The client sends a sequence number (a random number to initialise connection) to the server.
2. The server in turn sends its own sequence number and the client's sequence number + 1 as acknowledgement number.
3. The client responds back with the server's sequence number.

This drill synchronises server and client with each other's sequence numbers, in further communication the machines will expect for the other machines sequence number + 1 to align packets in order. 

<p align="center">
<img width="40%" height="55%" src="https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/what-is-a-tcp-3-way-handshake-process-three-way-handshaking-establishing-connection-6a724e77ba96e241.jpg" alt="Three way handshake">
</p>

*(TALK NOTES) - This layer connects two specific doors aka ports (from multiple doors) of the two houses.*

## How structures are laid out in the memory, explain datatypes like unsigned






### 3 Unwrapping Layers - <a name="unwrap"></a> 
This layer routes the packet from the source address to target address following the shortest path, defining address of each node.
IP address have an edge over hardware addresses as IP addresses are disposable, provides information about the network you are part of, geographic location etc.




<div style="overflow-y: auto; height:400px; width:70% ; margin: 0 auto;">
<a href="https://github.com/markroxor/sneakey/blob/master/tools/unwrap_pack.cpp">unwrap_pack.cpp</a>
<script src="http://gist-it.appspot.com/https://github.com/markroxor/sneakey/blob/master/tools/unwrap_pack.cpp?footer=minimal&slice=0:10"></script>
</div>


### 4 ARP Cache Poisoning - <a name="arply"></a> 
This layer routes the packet from the source address to target address following the shortest path, defining address of each node.
IP address have an edge over hardware addresses as IP addresses are disposable, provides information about the network you are part of, geographic location etc.




<div style="overflow-y: auto; height:400px; width:70% ; margin: 0 auto;">
<a href="https://github.com/markroxor/sneakey/blob/master/tools/arply.cpp">arply.cpp</a>
<script src="http://gist-it.appspot.com/https://github.com/markroxor/sneakey/blob/master/tools/arply.cpp?footer=minimal&slice=0:10"></script>
</div>


### 5 Pseudo Port - <a name="pseudoport"></a> 
This layer routes the packet from the source address to target address following the shortest path, defining address of each node.
IP address have an edge over hardware addresses as IP addresses are disposable, provides information about the network you are part of, geographic location etc.




<div style="overflow-y: auto; height:400px; width:70% ; margin: 0 auto;">
<a href="https://github.com/markroxor/sneakey/blob/master/tools/pseudo_port.cpp">pseudo_port.cpp</a>
<script src="http://gist-it.appspot.com/https://github.com/markroxor/sneakey/blob/master/tools/pseudo_port.cpp?footer=minimal&slice=0:10"></script>
</div>

https://whofi.com/blog/technical-info/why-do-computers-need-both-mac-addresses-and-ip-addresses/

MAC ID of a server AKA website, server crashed, get new messed.
IP addr tells what network you are part of.
