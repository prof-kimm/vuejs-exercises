<template>
  <div class="hello">
    <!-- v-bind -->
    <!-- v-bind shorthand-->
    <!-- <div>Some Class With Background</div> -->
    <!-- v-on -->
    <!-- v-on shorthand -->
    <!-- <button>On Click</button> -->
    <!-- v-once -->
    <!-- <span v-once>This will never change: {{ msg }}</span> -->
    <!-- <div>Some Text Change</div> -->
    <!-- v-html -->
    <!-- <p>Using mustaches: {{ rawHtml }}</p> -->
    <!-- <p>Using v-html directive: <span v-html="rawHtml"></span></p> -->
    <!-- v-model -->
    <!-- <input type="text"> -->
    <!-- computed -->
    <div>{{ reverseMessage }}</div>
    <div>{{ reverseMessageNotCached() }}</div>
    <!-- computed property will immediately return the previously computed result without having to run the function again. -->
    <!-- watch -->
    <p>Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>

  </div>
</template>
<script src="./PlayGround.js"></script>
<style src="./PlayGround.css"></style>
