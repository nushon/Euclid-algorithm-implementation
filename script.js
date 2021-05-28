  let submit = document.getElementById("btn");

  let output;

  function greatestCommonDivisor(height, width) {
      let remainer;
      while ((height % width) > 0) {
          remainer = height % width;
          height = width;
          width = remainer;

      }
      return width;

  }

  submit.addEventListener("click", function() {

      let getHeight = document.getElementById("height").value;
      let getWidth = document.getElementById("width").value;

      output = greatestCommonDivisor(getHeight, getWidth);

      document.getElementById("output").innerHTML += output;

      //   document.write(output);

      console.log(output);

  })