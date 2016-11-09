using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class BlogController : Controller
    {
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