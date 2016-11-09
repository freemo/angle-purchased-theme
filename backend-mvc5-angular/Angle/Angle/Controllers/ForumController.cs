using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class ForumController : Controller
    {
        // GET: Forum
        public ActionResult Forum()
        {
            return View();
        }
        public ActionResult ForumDiscussion()
        {
            return View();
        }
        public ActionResult ForumTopics()
        {
            return View();
        }
    }
}