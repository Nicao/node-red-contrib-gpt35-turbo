# GPT 3.5 based query Node for Node-RED


## Overview

Query-able node based on GPT 3.5


## Pre-requisite

You need to get (free)account in [Open AI API beta](https://beta.openai.com/) first.

You also have to prepare API Key [here](https://beta.openai.com/account/api-keys).

At last, you would prepare [Node-RED](https://nodered.org/).


## How to use

1. In Node-RED, you can search [node-red-contrib-dotnsf-gpt35](https://www.npmjs.com/package/node-red-contrib-dotnsf-gpt35) node. You need to install this node in your Node-RED.

2. You will see **GPT35** node under `function` category. Drag & Drop this node into Node-RED's canvas.

3. Open properties box. You need to edit **API Key** field with your API Key.

4. Connect nodes. You have to input query text as **msg.payload** into GPT35 node. Then GPT35 node would output generated text in its **msg.payload**.


## Licensing

This code is licensed under MIT.


## Copyright

2022 K.Kimura @ Juge.Me all rights reserved.

