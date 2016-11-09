using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class ForumController : Controller
    {
        public ActionResult ForumCategories()
        {
            return View();
        }
        public ActionResult ForumTopics()
        {
            return View();
        }
        public ActionResult ForumDiscussion()
        {
            return View();
        }
    }
}