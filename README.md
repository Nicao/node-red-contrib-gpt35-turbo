# GPT 3.5 Turbo based query Node for Node-RED
based on GPT 3.5 node for NODE-RED 


## Overview

Query-able node based on GPT 3.5 Turbo (ChatGPT)


## Pre-requisite

You need to get (free)account in [Open AI API beta](https://beta.openai.com/) first.

You also have to prepare API Key [here](https://beta.openai.com/account/api-keys).

At last, you would prepare [Node-RED](https://nodered.org/).


## How to use

1. In Node-RED, you can search [node-red-contrib-gpt35-turbo](https://www.npmjs.com/package/node-red-contrib-gpt35-turbo) node. You need to install this node in your Node-RED.

2. You will see **GPT35 Turbo** node under `function` category. Drag & Drop this node into Node-RED's canvas.

3. Open properties box. You need to edit **API Key** field with your API Key.

4. Connect nodes. You have to input query text as **msg.payload** into GPT35 Tubro node AND the system role as **msg.systemrole**. Then GPT35 Turbo node would output generated text in its **msg.payload** using ChatGPT API.


## Licensing

This code is licensed under MIT.


## Copyright

2022 K.Kimura @ Juge.Me all rights reserved.

