var axios = require( 'axios' );

module.exports = function( RED ){
  function main( config ){
    RED.nodes.createNode( this, config );
    var node = this;
    node.on( 'input', function( msg ){
      node.status( { fill: "green", shape: "dot", text: "..." } );
      var IGNORE_PHRASE = 10;  //. 結果の最初のフレーズがこの長さ以下だったら無視する
      var text = msg.payload;
      var apikey = config.apikey;
      //console.log( {apikey} );
      if( apikey ){
        if( text ){
          axios.post( 'https://api.openai.com/v1/completions', {
            prompt: text,
            model: 'text-davinci-003',
            max_tokens: 4000
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + apikey 
            }
          }).then( function( result ){
            if( result.data && result.data.choices && result.data.choices.length > 0 ){
              var answer = result.data.choices[0].text;

              //. 最初の "\n\n" 以降が正しい回答？
              var tmp = answer.split( "\n\n" );
              if( tmp.length > 1 && tmp[0].length < IGNORE_PHRASE ){
                tmp.shift();
                answer = tmp.join( "\n\n" );
              }
              msg.payload = answer;
              node.status( {} );
              node.send( msg );
            }else{
              msg.payload = JSON.stringify( result );
              node.status( {} );
              node.send( msg );
            }
          });
        }else{
          msg.payload = 'Query text is missing.';
          node.status( {} );
          node.send( msg );
        }
      }else{
        msg.payload = 'API Key is missing.';
        node.status( {} );
        node.send( msg );
      }
    });
  };

  RED.nodes.registerType( 'GPT 3.5', main );
}
