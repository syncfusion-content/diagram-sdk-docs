

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-diagrams/styles/tailwind3.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 Diagram's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-diagrams/dist/global/ej2-diagrams.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element  -->
             <div id="element">Diagram</div>
            <script>
                // initialize diagram component
                var diagram = new ej.diagrams.Diagram();

                // Render initialized diagram.
                diagram.appendTo('#element')
            </script>
       </body>
  </html>



