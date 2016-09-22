        document.addEventListener('DOMContentLoaded', function() {
            var button_name = document.querySelectorAll("button[id]")
            for (var i = 0; i < button_name.length; i++) {
                button_name[i].addEventListener('click', function() {
                    color_name = this.id;
                    document.getElementById('color_chosen').innerHTML = color_name;
                })
            }
            document.getElementById("0").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("0").style.fill = color_fill;
            })
            document.getElementById("1").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("1").style.fill = color_fill;
            })
            document.getElementById("2").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("2").style.fill = color_fill;
            })
            document.getElementById("3").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("3").style.fill = color_fill;
            })
            document.getElementById("4").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("4").style.fill = color_fill;
            })
            document.getElementById("5").addEventListener("click", function() {
                color_fill = color_name;
                document.getElementById("5").style.fill = color_fill;
            })
          })
