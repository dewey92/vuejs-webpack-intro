<template>
  <div class="instance">
    <h1>VueJS Instance</h1>
    <div class="row">
      <div class="col-sm-6 col-sm-offset-3">
        <div class="panel panel-default">
          <div class="panel-body">
             <img v-attr="src: './img/Basic_example.png'" class="img-responsive" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var highlight = require('highlight.js');

  module.exports = {
    attached: function() {
      highlight.initHighlighting();
    }
  };
</script>