using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class ForumController : Controller
    {
        public IActionResult ForumCategories()
        {
            return View();
        }
        public IActionResult ForumTopics()
        {
            return View();
        }
        public IActionResult ForumDiscussion()
        {
            return View();
        }
    }
}