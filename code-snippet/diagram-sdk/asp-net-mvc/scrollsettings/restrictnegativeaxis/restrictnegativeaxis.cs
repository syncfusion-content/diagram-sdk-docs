using System.Collections.Generic;
using System.Web.Mvc;
using Syncfusion.EJ2.Diagrams;

namespace EJ2MVCSampleBrowser.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<DiagramNode> nodes = new List<DiagramNode>();
            nodes.Add(new DiagramNode()
            {
                Id = "negativeNode",
                OffsetX = -150,
                OffsetY = -100,
                Width = 140,
                Height = 60,
                Annotations = new List<DiagramNodeAnnotation>() { new DiagramNodeAnnotation() { Content = "Negative Region Node" } }
            });
            nodes.Add(new DiagramNode()
            {
                Id = "positiveNode",
                OffsetX = 250,
                OffsetY = 150,
                Width = 140,
                Height = 60,
                Annotations = new List<DiagramNodeAnnotation>() { new DiagramNodeAnnotation() { Content = "Positive Region Node" } }
            });
            ViewBag.nodes = nodes;

            List<DiagramConnector> connectors = new List<DiagramConnector>();
            connectors.Add(new DiagramConnector()
            {
                Id = "connector1",
                SourceID = "negativeNode",
                TargetID = "positiveNode"
            });
            ViewBag.connectors = connectors;
            return View();
        }
    }
}
