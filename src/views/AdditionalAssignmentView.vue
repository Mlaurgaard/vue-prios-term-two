<template>
  <div>
    <button class="btn bg-blue-400 m-12" @click="triggerFunction()">
      Test
    </button>
  </div>
</template>

<script setup>
// Object
let typeA = {
  objectName: "A",
  owns: ["x", "y", "z"],
};

// Array
let typeB = [
  {
    objectName: "B",
    owns: ["y", "q", "p"],
  },
  {
    objectName: "C",
    owns: ["x", "y", "r"],
  },
];

let matchResults = [];

const triggerFunction = () => {
  // 1. Iterate(loop) through typeB Array
  typeB.forEach((item) => {
    //2. Iterate(loop) through each item in the Array
    item.owns.forEach((value) => {
      // console.log("yo", arrayValue);
      // 3. Check if typeA's owns value matches typeB
      if (typeA.owns.includes(value)) {
        // 4. Push resuly to new Array
        matchResults.push(value);
        console.log(`Match in ${item.objectName}`, matchResults);
      }
    });
  });
};
</script>
