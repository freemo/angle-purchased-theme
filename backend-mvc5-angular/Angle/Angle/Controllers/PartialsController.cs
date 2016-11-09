using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class PartialsController : Controller
    {
        public ActionResult TopNavbar()
        {
            return PartialView();
        }

        public ActionResult TopNavbarH()
        {
            return PartialView();
        }

        public ActionResult Sidebar()
        {
            return PartialView();
        }
        public ActionResult Offsidebar()
        {
            return PartialView();
        }
        public ActionResult Footer()
        {
            return PartialView();
        }
        public ActionResult Settings()
        {
            return PartialView();
        }
        public ActionResult Chat()
        {
            return PartialView();
        }
    }
}