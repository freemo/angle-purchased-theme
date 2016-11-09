using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class MapsController : Controller
    {
        public ActionResult MapsGoogle()
        {
            return View();
        }
        public ActionResult MapsVector()
        {
            return View();
        }
    }
}