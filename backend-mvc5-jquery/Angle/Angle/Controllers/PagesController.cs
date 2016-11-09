using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class PagesController : Controller
    {
        public ActionResult Error_404()
        {
            return View();
        }
        public ActionResult Lock() {
            return View();
        }
        public ActionResult Login() {
            return View();
        }
        public ActionResult Recover() {
            return View();
        }
        public ActionResult Register() {
            return View();
        }
        public ActionResult Template()
        {
            return View();
        }
        public ActionResult Maintenance()
        {
            return View();
        }
        public ActionResult Error_500()
        {
            return View();
        }
    }
}