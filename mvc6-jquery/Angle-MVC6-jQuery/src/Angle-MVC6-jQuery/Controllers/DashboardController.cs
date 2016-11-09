using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public IActionResult Dashboard_v1()
        {
            return View();
        }
        public IActionResult Dashboard_v2()
        {
            return View();
        }
        public IActionResult Dashboard_v3()
        {
            return View();
        }
        public IActionResult Dashboard_h()
        {
            return View();
        }
    }
}