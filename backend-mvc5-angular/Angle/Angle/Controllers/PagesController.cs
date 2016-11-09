using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class PagesController : Controller
    {
        // GET: Pages
        public ActionResult Error404()
        {
            return View();
        }
        public ActionResult Lock()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult Page()
        {
            return View();
        }
        public ActionResult Recover()
        {
            return View();
        }
        public ActionResult Register()
        {
            return View();
        }
        public ActionResult Maintenance()
        {
            return View();
        }
        public ActionResult Error500()
        {
            return View();
        }
    }
}