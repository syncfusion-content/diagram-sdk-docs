using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Syncfusion.EJ2.Diagrams;
using System.Drawing;

namespace EJ2MVCSampleBrowser.Controllers.Diagram {
    public partial class DiagramController: Controller {
        // GET: Nodes
        public ActionResult Nodes() {
            List < DiagramNode > nodes = new List < DiagramNode > ();
            nodes.Add(new DiagramNode() {
                Id = "negativeNode",
                    Width = 140,
                    Height = 60,
                    OffsetX = -150,
                    OffsetY = -100,
                    Style = new NodeStyleNodes() {
                        Fill = "#6BA5D7",
                            StrokeColor = "White"
                    },
            });
            nodes.Add(new DiagramNode() {
                Id = "positiveNode",
                    Width = 140,
                    Height = 60,
                    OffsetX = 250,
                    OffsetY = 150,
                    Style = new NodeStyleNodes() {
                        Fill = "#6BA5D7",
                            StrokeColor = "White"
                    },
            });
            ViewBag.nodes = nodes;

            List < DiagramConnector > connectors = new List < DiagramConnector > ();
            connectors.Add(new DiagramConnector() {
                Id = "connector1",
                    SourceID = "negativeNode",
                    TargetID = "positiveNode"
            });
            ViewBag.connectors = connectors;

            return View();
        }
    }
}
