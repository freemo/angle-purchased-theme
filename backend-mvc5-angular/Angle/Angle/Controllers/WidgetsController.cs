using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class WidgetsController : Controller
    {
        // GET: Widgets
        public ActionResult Widgets()
        {
            return View();
        }
    }
}