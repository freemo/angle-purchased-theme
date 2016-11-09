using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class SingleViewController : Controller
    {
        // GET: SingleView
        public IActionResult Index()
        {
            return View();
        }
        // GET: SingleView
        public IActionResult MenuView()
        {
            return View();
        }
    }
}