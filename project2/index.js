
var Kidz_solutions_array = ["Table", "Forward_Counting", "Backward_Counting"]
var user_input = +prompt(`Enter your choice: (1-3)\n\n
(1.) "Generate_Table of any Number"
(2.) "Generate_Forward_Counting"
(3.) "Generate_Backward_Counting"
`)
var istrue = false;

for (let i = 0; i < Kidz_solutions_array.length; i++) {
    if (user_input === 1) {
        istrue = true; document.write(` <div
    class="container-fluid first p-lg-5 p-lg-5 p-1">
    <h1 class="text-center fw-bold pt-2  display-4 ">KIDS SOLUTIONS</h1>
    <h2 class="text-center fw-bold mt-3">***** "Table" *****</h2>

    <div class="card pt-3 text-center" style="word-spacing: 1em; animation:bounceInDown;  animation-duration:2s;">

        <script>

            var Startno = +prompt("Enter the Table Starting Number:");
            var Endno = +prompt("Enter the Table Ending Number:");
            var Tableno = +prompt("Enter Your Table Number:");

            document.write("<table>");
            for (var i = Startno; i <= Endno; i++) {
                document.write("<tr><td>" + Tableno + " X " + i + " " + " = " + " " + (Tableno * i) + "</td></tr>");
            }
            document.write("</table>");

        </script>

    </div>
    </div>
    `)
        break;
    }

    else if (user_input === 2) {
        istrue = true;
        document.write(`
    <div class="container-fluid second  p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">KIDS SOLUTIONS</h1>
        <h5 class="text-center fw-bold mt-3">****"Forward_Counting"****</h5>

        <div class="card pt-3 text-center"
            style="word-spacing: 0.2em; animation:bounceInDown;  animation-duration:2s;">

            <script>
                var Startfcount = +prompt("Enter the Forward_Counting Starting Number:");
                var Endfcount = +prompt("Enter the Forward_Counting Ending Number:");

                   for (var i = Startfcount; i <= Endfcount; i = i + 10) {
                       for (var j = i; j < i + 10; j++) {
                           document.write(" " + j + " ");
                       }
                   }

            </script>

        </div>
    </div>
    `);
        break;
    }



    else if (user_input === 3) {
        istrue = true;
        document.write(`
    <div class="container-fluid third  p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">KIDS SOLUTIONS</h1>
        <h5 class="text-center fw-bold mt-3">****"Backward_Counting"****</h5>

        <div class="card pt-3 text-center"
            style="word-spacing: 0.2em; animation:bounceInDown;  animation-duration:2s;">

            <script>
                var Startbcount = +prompt("Enter the Backward_Counting Starting Number:");
                var Endbcount = +prompt("Enter the Backward_Counting Ending Number:");

                for (var i = Startbcount; i >= Endbcount; i -= 10) {
                    for (var j = i; j > i - 10; j--) {
                        document.write(" " + j + " ");
                    }
                }

            </script>

        </div>
    </div>
    `);
        break;
    }

    else {
        document.write(`<div class="container text-center mt-5 pt-5 p-5">
        <h1>unvalid input Try again...</h1>
    </div>`)
        break;
    }
}

if (!istrue) {
    alert("Code not working properly... ");
}

