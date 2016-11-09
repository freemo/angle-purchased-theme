using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class BlogController : Controller
    {
        // GET: Blog
        public IActionResult Blog()
        {
            return View();
        }
        public IActionResult BlogArticles()
        {
            return View();
        }
        public IActionResult BlogArticleView()
        {
            return View();
        }
        public IActionResult BlogPost()
        {
            return View();
        }
    }
}