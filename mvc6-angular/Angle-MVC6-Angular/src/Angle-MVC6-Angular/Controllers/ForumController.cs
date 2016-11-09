using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class ForumController : Controller
    {
        // GET: Forum
        public IActionResult Forum()
        {
            return View();
        }
        public IActionResult ForumDiscussion()
        {
            return View();
        }
        public IActionResult ForumTopics()
        {
            return View();
        }
    }
}